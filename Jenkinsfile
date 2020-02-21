node{
	def app
	stage('Clone Repository'){
		checkout scm
	}

	stage('Build Image'){
		app=docker.build('app');

	}

	
	stage('push image'){

		docker.withRegistry('https://208997411759.dkr.ecr.ap-south-1.amazonaws.com/app','ecr:ap-south-1:aws-cred'){
		docker.image('app').push('latest')

		}
	}

	stage('deploy image'){
		bat'aws cloudformation delete-stack --stack-name ECSService'
		bat 'aws cloudformation update-stack --stack-name ECSTaskDefinition --template-body file://ecsTaskDefinition.yaml --parameters ParameterKey=FamilyName,ParameterValue=NewTaskDef ParameterKey=PortToMap,ParameterValue=3200' 
		bat 'aws cloudformation create-stack --stack-nameECSService --template-body file://ecsService.yaml --parameters ParameterKey=TaskDefVersion,ParameterValue=1' 

	}
}
