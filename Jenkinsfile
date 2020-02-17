node{
	
	def jenkins-nodejs-app
	stage('Clone Repository'){
		checkout scm
	}

	stage('Build Image'){
		jenkins-nodejs-app=docker.build('app');

	}

	
	stage('push image'){
		
		docker.withRegistry('https://208997411759.dkr.ecr.ap-south-1.amazonaws.com/jenkins-nodejs-app','ecr:ap-south-1:aws-amit-cred'){
		docker.image('jenkins-nodejs-app').push('latest')
		}
	}
}
