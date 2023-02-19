pipeline {
  agent any
    tools {
    nodejs "node" // Utilisez le nom d'installation de Node.js défini dans la configuration de Jenkins
  }

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
