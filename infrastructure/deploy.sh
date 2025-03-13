#!/bin/bash

# Exit on error
set -e

# Check if HOSTED_ZONE_ID environment variable is set
if [ -z "$HOSTED_ZONE_ID" ]; then
  echo "Error: HOSTED_ZONE_ID environment variable is not set"
  echo "Please set it with: export HOSTED_ZONE_ID=your-hosted-zone-id"
  exit 1
fi

# Set default environment to prod if not specified
ENVIRONMENT=${ENVIRONMENT:-prod}
echo "Deploying to environment: $ENVIRONMENT"

# Set stack name based on environment
if [ "$ENVIRONMENT" == "production" ]; then
  STACK_NAME="blog-infrastructure"
  WEBSITE_SUBDOMAIN="www"
  ENABLE_ROOT_REDIRECT="true"
else
  STACK_NAME="blog-dev-infrastructure"
  WEBSITE_SUBDOMAIN="dev-www"
  ENABLE_ROOT_REDIRECT="false"
fi

# Deploy or update CloudFormation stack
echo "Deploying CloudFormation stack with hosted zone ID: $HOSTED_ZONE_ID"
aws cloudformation deploy \
  --template-file ./infrastructure/cloudformation.yaml \
  --stack-name $STACK_NAME \
  --parameter-overrides \
    HostedZoneId=$HOSTED_ZONE_ID \
    WebsiteSubDomain=$WEBSITE_SUBDOMAIN \
    Environment=$ENVIRONMENT \
    EnableRootDomainRedirect=$ENABLE_ROOT_REDIRECT \
  --capabilities CAPABILITY_IAM

# Get the bucket name from CloudFormation outputs
echo "Getting S3 bucket name from CloudFormation outputs..."
BUCKET_NAME=$(aws cloudformation describe-stacks \
  --stack-name $STACK_NAME \
  --query 'Stacks[0].Outputs[?OutputKey==`BucketName`].OutputValue' \
  --output text)

echo "Uploading files to S3 bucket: $BUCKET_NAME"
# Upload files to S3
aws s3 sync ./out s3://$BUCKET_NAME

# Get CloudFront distribution ID from CloudFormation outputs
echo "Getting CloudFront distribution ID..."
DISTRIBUTION_ID=$(aws cloudformation describe-stacks \
  --stack-name $STACK_NAME \
  --query 'Stacks[0].Outputs[?OutputKey==`CloudFrontDistributionId`].OutputValue' \
  --output text)

echo "Invalidating CloudFront cache for distribution: $DISTRIBUTION_ID"
# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id $DISTRIBUTION_ID \
  --paths "/*"

WEBSITE_URL=$(aws cloudformation describe-stacks \
  --stack-name $STACK_NAME \
  --query 'Stacks[0].Outputs[?OutputKey==`WebsiteURL`].OutputValue' \
  --output text)

echo "Deployment completed successfully!"
echo "Visit your site at: $WEBSITE_URL"