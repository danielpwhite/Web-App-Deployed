# Setup Python environment and copy built assets
FROM python:3.8-slim-buster

# Set the working directory to /auth
WORKDIR /auth

# Copy the current directory contents into the container at /auth
COPY . /auth

# Install the required packages
RUN pip install --no-cache-dir -r requirements.txt

# Expose portfolio 5000
EXPOSE 5000

# Set environment variables
ENV PYTHONPATH="/auth:${PYTHONPATH}"
ENV FLASK_APP=app.py

# Run the command to start the server
CMD ["gunicorn", "-w", "4", "--bind",  "0.0.0.0:5000", "app:app"]