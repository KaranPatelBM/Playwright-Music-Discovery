def testReportName = ["UI_TEST_REPORT"]

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
                bat 'npm run test'
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