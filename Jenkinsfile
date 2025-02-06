pipeline {
    agent any
    stages {
        stage('dependencies') {
            steps {
                bat 'npm install'
                bat 'npx playwright install'
                bat 'npm install cross-env'
                bat 'npm install dotenv'
            }
        }
        stage('Lint and Build') {
            steps {
                bat "npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev"
                bat 'npm run lint'
                bat 'npm run build'
            }
        }
        stage('Test') {
            steps {
                bat 'npx playwright test --reporter=json > test-report.json'
                junit '**/test-report.json'
            }
        }
    }
    post {
        always {
            echo "Cleaning up after the build."
            cleanWs() // Cleans up the workspaces
        }
    }
}
