FROM python:3.8-slim-buster

WORKDIR /portfolio

COPY . /portfolio

RUN pip install --no-cache-dir -r requirements.txt

# Install necessary packages for live-reloading
RUN apt-get update && apt-get install -y --no-install-recommends \
    inotify-tools \
    && rm -rf /var/lib/apt/lists/*

ENV PYTHONPATH="/portfolio:${PYTHONPATH}"
ENV FLASK_APP=app.py

EXPOSE 5001

# Run the command to start the server
CMD ["hupper", "-m", "gunicorn", "--bind",  "0.0.0.0:$PORT", "app:app", "-w", "1"]