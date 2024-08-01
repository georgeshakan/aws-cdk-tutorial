import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class TutorialStack extends cdk.Stack {
    constructor(scope: Construct, id: string) {
      super(scope, id);


      const websiteBucket = new cdk.aws_s3.Bucket(this, 'dev-website', {
        blockPublicAccess: cdk.aws_s3.BlockPublicAccess.BLOCK_ALL,
        encryption: cdk.aws_s3.BucketEncryption.S3_MANAGED,
        versioned: false,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
      });

      const frontend = cdk.aws_s3_deployment.Source.asset('website');
      const Deployment = new cdk.aws_s3_deployment.BucketDeployment(this, 'DeployWebsite', {
        sources: [
            frontend,
        ],
        destinationBucket: websiteBucket,
      });


      const origin = new cdk.aws_cloudfront_origins.S3Origin(websiteBucket)
      new cdk.aws_cloudfront.Distribution(this, 'distro', {
        defaultBehavior: {
          origin: origin,
        
        },
        defaultRootObject: 'index.html',
      });

    }
}