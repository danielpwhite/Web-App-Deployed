# Web-App-Deployed
This project is a training exercise for:

1. Web Development -- creating a microservices-based web application 
2. Containerization -- deploying and monitoring containerized services
3. Kubernetes - orchestrating and managing containerized applications
4. Amazon EKS - deploying and managing a Kubernetes cluster on AWS

The goal of this project is to deepen our understanding of modern web development and enhance our ability to build, test, and deploy scalable, fault-tolerant systems. 

The application will consist of several services, including authentication, catalog, and orders, which will communicate with each other using RESTful APIs. Each service will be designed as a Docker container to be deployed onto the Kubernetes cluster, which will handle the orchestration, scaling, and management of the application. The Kubernetes cluster will be hosted on Amazon EKS, leveraging the benefits of a managed Kubernetes service on AWS. Prometheus will be used for monitoring the health and performance of the system.

## Tech Stack

### Back-end
- [PostgreSQL](https://www.postgresql.org/)
- [SQLAlchemy](https://github.com/sqlalchemy/sqlalchemy)
- [Redis](https://redis.io/)
- [Celery](https://github.com/celery/celery)

### Front-end
- [Gulp](https://gulpjs.com/)
- [Bootstrap](https://getbootstrap.com/)

### JS Framework
- [jQuery](https://jquery.com/)

### DevOps
- [Docker](https://www.docker.com/) 
- [Kubernetes](https://kubernetes.io/)
- [Amazon EKS](https://aws.amazon.com/eks/)
- [Helm](https://helm.sh/)
- [Prometheus](https://prometheus.io/)
