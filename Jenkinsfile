pipeline {
  agent any
  stages {
    stage('Upload to S3') {
      steps {
        withCredentials([[$class: 'AmazonWebServicesCredentialsBinding',credentialsId: 'AlmostAdmin']]) {
          sh 'cd react'
          sh 'npm run build'
          sh 'cd ..'
          sh 'cd react2'
          sh 'npm run build'
          sh 'aws s3 sync ./react/dist s3://devops-single-spa/@root/react/'
          sh 'aws s3 sync ./react2/dist s3://devops-single-spa/@root/react2/'
          sh 'aws s3 sync ./react3/dist s3://devops-single-spa/@root/react3/'
          sh 'aws s3 sync ./root/dist s3://devops-single-spa/@root/root-config/'
        }
      }
    }
  }
}