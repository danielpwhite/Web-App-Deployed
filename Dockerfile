FROM ubuntu:latest

RUN apt-get update && apt-get install -y python3-pip
RUN apt-get upgrade openssl
RUN pip3 install flask

COPY . /app

WORKDIR /app
CMD ["python", "app.py"]