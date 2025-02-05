pipeline {
    agent any
    stages {
        stage('dependencies') {
            steps{
                bat 'npm install'
                bat 'npx playwright install'
                bat 'npm install cross-env'
                bat 'npm install dotenv'
            }
        }
        stage('Lint and Build') {
            steps{
                bat 'npm run lint'
                bat 'npm run build'
            }
        }
        stage('Test') {
            steps{
                bat 'npx playwright test'
            }
        }
    }
}