#!/bin/bash

# Build the website
npm run build

# Get the bucket name from CloudFormation outputs
BUCKET_NAME=$(aws cloudformation describe-stacks \
  --stack-name blog-infrastructure \
  --query 'Stacks[0].Outputs[?OutputKey==`BucketName`].OutputValue' \
  --output text)

# Upload files to S3
aws s3 sync ../out s3://$BUCKET_NAME

# Invalidate CloudFront cache
DISTRIBUTION_ID=$(aws cloudfront list-distributions \
  --query "DistributionList.Items[?Aliases.Items[?contains(@, 'www.eladheller.com')]].Id" \
  --output text)

aws cloudfront create-invalidation \
  --distribution-id $DISTRIBUTION_ID \
  --paths "/*" 