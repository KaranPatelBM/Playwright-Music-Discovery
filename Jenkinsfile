pipeline {
    stages {
        stage('dependencies') {
            bat 'npm install'
            bat 'npx playwright install'
            bat 'npm install cross-env'
            bat 'npm install dotenv'
        }
        stage('Lint and Build') {
            bat 'npm run lint'
            bat 'npm run build'
        }
        stage('Test') {
            bat 'npx playwright test'
        }
    }
}