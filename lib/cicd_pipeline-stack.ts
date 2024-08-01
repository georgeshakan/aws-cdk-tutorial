import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { TutorialStage } from './tutorial-stage';


export class CicdPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const repo = new cdk.aws_codecommit.Repository(this, 'codecommit-repo', {
      repositoryName: 'test-repo',
      description:  "A test for Code Pipeline",
      code: cdk.aws_codecommit.Code.fromDirectory('notes' , 'dev'),
    });

    const devSourceCode = cdk.pipelines.CodePipelineSource.codeCommit(repo,'dev');

    const commands : string[] = [
      'npm ci',
      'npm run build',
      'npx cdk synth',
            ]

    const synthStepDev = new cdk.pipelines.ShellStep(
              "Synth",
              {
              input : devSourceCode,
              commands : commands,
                    },
                  )

    const devPipeline = new cdk.pipelines.CodePipeline(this, 'dev-pipeline', {
                    pipelineName: 'test-pipeline',
                    synth: synthStepDev,
                    selfMutation: true,
                  });
    

    const devStage = new TutorialStage(this, 'dev-stage');
    devPipeline.addStage(devStage)

  }
}
