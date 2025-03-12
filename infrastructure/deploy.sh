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
  --template-file cloudformation.yaml \
  --stack-name blog-infrastructure \
  --parameter-overrides \
    HostedZoneId=$HOSTED_ZONE_ID \
  --capabilities CAPABILITY_IAM

# Build the website
echo "Building website..."
cd ..
npm run build

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
  --query 'Stacks[0].Outputs[?OutputKey==`CloudFrontDomainName`].OutputValue' \
  --output text)

if [ -z "$DISTRIBUTION_ID" ]; then
  # Fallback method if output is not available
  DISTRIBUTION_ID=$(aws cloudfront list-distributions \
    --query "DistributionList.Items[?Aliases.Items[?contains(@, 'www.eladheller.com')]].Id" \
    --output text)
fi

echo "Invalidating CloudFront cache for distribution: $DISTRIBUTION_ID"
# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id $DISTRIBUTION_ID \
  --paths "/*"

echo "Deployment completed successfully!"