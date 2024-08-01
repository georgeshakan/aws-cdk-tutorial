import * as cdk from 'aws-cdk-lib';
import { Construct } from "constructs";
import { TutorialStack } from './tutorial-stack';
export class TutorialStage extends cdk.Stage {

    constructor(scope: Construct, id: string) {
      super(scope, id);

   
        new TutorialStack(this, 'tutorial');
    }
}