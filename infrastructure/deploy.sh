#!/bin/bash

# Exit on error
set -e

# Check if HOSTED_ZONE_ID environment variable is set
if [ -z "$HOSTED_ZONE_ID" ]; then
  echo "Error: HOSTED_ZONE_ID environment variable is not set"
  echo "Please set it with: export HOSTED_ZONE_ID=your-hosted-zone-id"
  exit 1
fi

# Deploy or update CloudFormation stack
echo "Deploying CloudFormation stack with hosted zone ID: $HOSTED_ZONE_ID"
aws cloudformation deploy \
  --template-file ./infrastructure/cloudformation.yaml \
  --stack-name blog-infrastructure \
  --parameter-overrides \
    HostedZoneId=$HOSTED_ZONE_ID \
  --capabilities CAPABILITY_IAM

# Get the bucket name from CloudFormation outputs
echo "Getting S3 bucket name from CloudFormation outputs..."
BUCKET_NAME=$(aws cloudformation describe-stacks \
  --stack-name blog-infrastructure \
  --query 'Stacks[0].Outputs[?OutputKey==`BucketName`].OutputValue' \
  --output text)

echo "Uploading files to S3 bucket: $BUCKET_NAME"
# Upload files to S3
aws s3 sync ./out s3://$BUCKET_NAME

# Get CloudFront distribution ID from CloudFormation outputs
echo "Getting CloudFront distribution ID..."

DISTRIBUTION_ID=$(aws cloudformation describe-stacks \
  --stack-name blog-infrastructure \
  --query 'Stacks[0].Outputs[?OutputKey==`CloudFrontDistributionId`].OutputValue' \
  --output text)

# If the output doesn't exist, try getting it another way
if [ -z "$DISTRIBUTION_ID" ] || [ "$DISTRIBUTION_ID" = "None" ]; then
  echo "Distribution ID not found in outputs, looking it up by domain..."
  # Get the CloudFront domain name first
  CLOUDFRONT_DOMAIN=$(aws cloudformation describe-stacks \
    --stack-name blog-infrastructure \
    --query 'Stacks[0].Outputs[?OutputKey==`CloudFrontDomainName`].OutputValue' \
    --output text)
    
  echo "Found CloudFront domain: $CLOUDFRONT_DOMAIN"
  
  # Use the domain to find the distribution ID
  DISTRIBUTION_ID=$(aws cloudfront list-distributions \
    --query "DistributionList.Items[?DomainName=='$CLOUDFRONT_DOMAIN'].Id" \
    --output text)
    
  # If still empty, try with aliases
  if [ -z "$DISTRIBUTION_ID" ] || [ "$DISTRIBUTION_ID" = "None" ]; then
    echo "Looking up by alias..."
    DISTRIBUTION_ID=$(aws cloudfront list-distributions \
      --query "DistributionList.Items[?contains(Aliases.Items, 'www.eladheller.com')].Id" \
      --output text)
  fi
fi

if [ -z "$DISTRIBUTION_ID" ] || [ "$DISTRIBUTION_ID" = "None" ]; then
  echo "Error: Could not find CloudFront distribution ID"
  exit 1
fi

echo "Invalidating CloudFront cache for distribution ID: $DISTRIBUTION_ID"
# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id $DISTRIBUTION_ID \
  --paths "/*"

echo "Deployment completed successfully!"