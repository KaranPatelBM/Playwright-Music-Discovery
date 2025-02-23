def testReportName = "UI_TEST_REPORT"
properties([
    parameters([
        string(name: 'CONTAINER_NAME', defaultValue: '', description: 'Name of the Docker container'),
        string(name: 'DOCKER_IMAGE', defaultValue: '', description: 'Docker image for the container')
    ])
])

pipeline {
    agent any
    stages {
        stage('dependencies') {
            steps {
                bat 'npm ci'
                bat 'npx playwright install'
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