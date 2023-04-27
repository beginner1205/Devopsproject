pipeline {
  agent any
  stages {
    stage('Upload to S3') {
      steps {
        withCredentials([[$class: 'AmazonWebServicesCredentialsBinding',credentialsId: 'AlmostAdmin']]) {
          sh 'aws s3 sync ./react/dist s3://devops-single-spa/@root/react/'
          sh 'aws s3 sync Devopsproject/react2/dist s3://devops-single-spa/@root/react2/'
          sh 'aws s3 sync Devopsproject/react3/dist s3://devops-single-spa/@root/react3/'
          sh 'aws s3 sync Devopsproject/root/dist s3://devops-single-spa/@root/root-config/'
        }
      }
    }
  }
}