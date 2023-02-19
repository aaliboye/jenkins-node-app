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
        echo 'npm inst'
      }
    }
    
    // stage('Build') {
    //   steps {
    //     sh 'npm run build'
    //   }
    // }
    
    // stage('Test') {
    //   steps {
    //     sh 'npm run test'
    //   }
    // }
    
    stage('deploy') {
      steps {
        echo 'npm run start'
      }
    }
  }
}
