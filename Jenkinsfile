pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build and Test Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                    sh 'npm test'
                }
            }
        }

        stage('Build and Test Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm test'
                }
            }
        }

        stage('Build and Push Docker Images') {
            steps {
                script {
                    def backendImage = docker.build('your-registry/backend:latest', './backend')
                    def frontendImage = docker.build('your-registry/frontend:latest', './frontend')

                    backendImage.push()
                    frontendImage.push()
                }
            }
        }

        stage('Deploy Infrastructure') {
            steps {
                // Deploy infrastructure using Docker Compose, Kubernetes, or other tools
                sh 'docker-compose -f docker-compose.yml up -d' // Example for Docker Compose
            }
        }

        stage('Deploy Containers') {
            steps {
                // Deploy your containers to the infrastructure
                sh 'docker run -d --name backend-container your-registry/backend:latest'
                sh 'docker run -d --name frontend-container your-registry/frontend:latest'
            }
        }

        stage('Cleanup') {
            steps {
                sh 'docker system prune -af' // Clean up Docker resources
            }
        }

        stage('Done') {
            steps{
                echo 'done'
            }
        }
    }

    post {
        always {
            // Clean up resources, send notifications, or perform other post-build tasks
        }
    }
}
