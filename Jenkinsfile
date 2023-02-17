pipeline {
  agent any
  
  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/mon-utilisateur/mon-referentiel.git'
      }
    }
    
    stage('Build') {
      steps {
        sh 'npm install'
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
    
    stage('Deploy') {
      steps {
        sh 'npm run start'
      }
    }
  }
