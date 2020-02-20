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
		bat 'aws cloudformation create-stack --stack-name FargateDeploy --template-url https://amit-cloudformation-templete.s3.ap-south-1.amazonaws.com/aws-fargate-ecs.yaml'

	}
}
