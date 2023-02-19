pipeline {
  agent any
  
  stages {
    stage('Checkout') {
      steps {
        git branch: 'master', url: 'https://github.com/aaliboye/jenkins-node-app.git'
      }
    }
    
    stage('build') {
      steps {
        bat 'npm install'
      }
    }
       
    stage('Test') {
      steps {
        bat 'npm run test'
      }
    }
    
    stage('deploy') {
      steps {
        bat 'npm run start'
      }
    }
  }
}
