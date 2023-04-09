# Setup Python environment and copy built assets
FROM python:3.8-slim-buster

# Set the working directory to /portfolio
WORKDIR /portfolio

# Copy the current directory contents into the container at /portfolio
COPY . /portfolio

# Install the required packages
RUN pip install --no-cache-dir -r requirements.txt

# Expose portfolio 5000
EXPOSE 5001

# Set environment variables
ENV PYTHONPATH="/portfolio:${PYTHONPATH}"
ENV FLASK_APP=app.py

# Run the command to start the server
CMD ["gunicorn", "--bind",  "0.0.0.0:5001", "app:app"]