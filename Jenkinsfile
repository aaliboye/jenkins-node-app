pipeline {
  agent any
  
  stages {
    stage('Checkout') {
      steps {
        git branch: 'master', url: 'https://github.com/aaliboye/jenkins-node-app.git'
      }
    }
    
    stage('installation dependances') {
      steps {
        sh 'npm install'
      }
    }
    
    
    stage('Test') {
      steps {
        sh 'on a pas fait les test unitaire'
      }
    }
    
    stage('deploy') {
      steps {
        sh 'npm run start'
      }
    }
  }
}
