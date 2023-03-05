FROM ubuntu:latest
RUN apt-get update && \
    apt-get install -y python3 python3-pip
RUN pip3 install --no-cache-dir -r requirements.txt
COPY .. /app
WORKDIR /app
CMD ["python3", "app.py"]