FROM python:3.8-slim-buster

WORKDIR /auth

COPY . /auth

RUN pip install --no-cache-dir -r requirements.txt

# Set environment variables
ENV PYTHONPATH="/auth:${PYTHONPATH}"
ENV FLASK_APP=app.py

EXPOSE 5000

# Run the command to start the server
CMD ["gunicorn", "-w", "4", "--bind",  "0.0.0.0:5000", "app:app"]