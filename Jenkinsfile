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
        echo 'npm install'
      }
    }
    
    
    stage('Test') {
      steps {
        echo 'on a pas fait les test unitaire'
      }
    }
    
    stage('deploy') {
      steps {
        echo 'npm run start'
      }
    }
  }
}
