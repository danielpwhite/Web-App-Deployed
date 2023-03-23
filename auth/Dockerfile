# Using an official python runtime as the parent image -
# much lighter than a full Ubuntu image
FROM python:3.8-slim-buster

# Set the working directory to /app
WORKDIR /auth

# Copy the current directory contents into the container at /app
COPY . /auth

# Install the required packages
RUN pip install --no-cache-dir -r requirements.txt

# Expose port 5000
EXPOSE 5000

# Set environment variables
ENV PYTHONPATH="/auth:${PYTHONPATH}"
ENV FLASK_APP=app.py

# Run the command to start the server
CMD ["gunicorn", "-w", "4", "--bind",  "0.0.0.0:5000", "app:app"]