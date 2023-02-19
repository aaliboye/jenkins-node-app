pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git branch: 'master', url: 'https://github.com/aaliboye/jenkins-node-app.git'
      }

    stage('Installation des dépendances') {
      steps {
        sh 'npm install'
      }
    }
    stage('Tests') {
      steps {
        sh 'npm test'
      }
    }
    stage('Déploiement') {
      when {
        branch 'master'
      }
      steps {
        sh 'npm run start'
      }
    }
    }
    
  }
}
