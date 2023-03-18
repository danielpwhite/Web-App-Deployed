# Using an official python runtime as the parent image -
# much lighter than a full Ubuntu image
FROM python:3.8-slim-buster

# Set the working directory to /app
WORKDIR /auth

# Copy the current directory contents into the container at /app
COPY . /auth

# Install the required packages
RUN pip install --no-cache-dir -r requirements.txt

# Make sure the auth module is included in the Docker image
#RUN pip install -e .

# Expose port 5000
EXPOSE 5000

# Set environment variables
ENV FLASK_APP=app
ENV FLASK_RUN_HOST=0.0.0.0

# Run the command to start the server
CMD ["flask", "run"]