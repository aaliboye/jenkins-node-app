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
        bat 'npm install'
      }
    }
    
    
    stage('Test') {
      steps {
        bat 'on a pas fait les test unitaire'
      }
    }
    
    stage('deploy') {
      steps {
        bat 'npm run start'
      }
    }
  }
}
