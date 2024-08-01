# Tutorial for AWS CDK

- Multi-account CI/CD pipeline with AWS CDK.
- Deploys simple website hosted on S3 with CloudFront.
- Uses CodePipeline for CI/CD with Code Commit as source.

This tutorial has an accompanying [YouTube video](https://youtu.be/i7aSiQwHs1Q?si=UCguu3lerv_6RvCA).

## Language

I built this project in TypeScript, even though I'm more of a
Python person. Typescript is what the AWS CDK source code
is written in, so it's a bit of a better practice to use it.

## Useful commands

These are from the AWS Documentation.

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `npx cdk deploy` deploy this stack to your default AWS account/region
- `npx cdk diff` compare deployed stack with current state
- `npx cdk synth` emits the synthesized CloudFormation template
