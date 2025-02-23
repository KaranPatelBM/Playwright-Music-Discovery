def testReportName = "UI_TEST_REPORT"
properties([
    parameters([
        string(name: 'CONTAINER_NAME', defaultValue: '', description: 'Name of the Docker container'),
        string(name: 'DOCKER_IMAGE', defaultValue: '', description: 'Docker image for the container'),
        string(name: 'REACT_BUILD_PATH', defaultValue: '', description: 'Path to React project')
    ])
])

pipeline {
    agent any
     environment {
        COMPOSE_FILE = "docker-compose.yml"
    }
    stages {
        stage('Git Checkout') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'PLAYWRIGHT_GIT_URL', variable: 'GIT_URL_SECRET')]) {                    
                        git branch: 'master', url: "${env.GIT_URL_SECRET}"
                    }
                }
            }
        }
        stage('Build and Start Containers') {
            steps {
                script {
                    echo "Building and starting Docker Compose services..."
                    bat "echo Building with path: ${params.REACT_BUILD_PATH}"
                    bat "docker-compose build --build-arg REACT_BUILD_PATH=${params.REACT_BUILD_PATH}"
                }
            }
        }
        stage('dependencies') {
            steps {
                bat """
                    docker run -d --name ${params.CONTAINER_NAME} -p 8563:8563 ${params.DOCKER_IMAGE}
                """
                bat "docker exec ${params.CONTAINER_NAME} npm ci"
                echo "Running npx playwright install inside container: ${params.CONTAINER_NAME}"
                bat "docker exec ${params.CONTAINER_NAME} npx playwright install"
            }
        }
        stage('Test') {
            steps {
                echo "Running Playwright tests inside container: ${params.CONTAINER_NAME}"
                bat "docker exec ${params.CONTAINER_NAME} npm run test"
            }
        }
    }

    post {
        always {
            publishHTML([
                    allowMissing : true,
                    alwaysLinkToLastBuild: true,
                    keepAll : true,
                    escapeUnderscores : false,
                    reportDir : 'playwright-report',
                    reportFiles : 'index.html',
                    reportName : testReportName,
            ])

            junit testResults: "playwright-report/junit/junit-test-report.xml", skipPublishingChecks: true, healthScaleFactor: 10.0, allowEmptyResults: true

            // Archive screenshots, videos, traces for failed tests
            archiveArtifacts artifacts: 'playwright-report/screenshots/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'playwright-report/videos/**', allowEmptyArchive: true
            archiveArtifacts artifacts: 'playwright-report/traces/**', allowEmptyArchive: true
        }
    }
}