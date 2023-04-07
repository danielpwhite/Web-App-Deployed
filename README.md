# Web-App-Deployed
This project is a training exercise for:

1. Web development  - Building a microservices-based web application with separate authentication, catalog, and orders services that communicate via RESTful APIs.
2. Containerization - Packaging each service as a Docker container, enabling consistent deployment and runtime environments across different stages of the application                       lifecycle.
3. Kubernetes       - Orchestrating and managing containerized applications to ensure scalability, fault tolerance, and efficient resource utilization.
4. Amazon EKS       - Leveraging the power of AWS to host and maintain a Kubernetes cluster, simplifying the process of deploying and managing containerized                                 applications at scale.
5. Monitoring       - Using Prometheus to track the performance and health of the application's services, ensuring reliability and rapid troubleshooting.
6. Helm             - Streamlining the management of Kubernetes deployments with Helm charts, making it easier to define, install, and upgrade complex applications.

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
