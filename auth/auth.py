from flask import request, jsonify, current_app
from datetime import datetime, timedelta
import jwt

JWT_SECRET = 'myjwtsecret'


def authenticate(username, password):
    # Check if username and password are valid
    if username == 'myuser' and password == 'mypassword':
        payload = {
            'exp': datetime.utcnow() + timedelta(minutes=30),
            'iat': datetime.utcnow(),
            'sub': username
        }
        access_token = jwt.encode(payload, JWT_SECRET, algorithm='HS256')
        return jsonify({'access_token': access_token, 'payload': payload}), 200
    else:
        return jsonify({'error': 'Invalid username or password'}), 401


def require_token(f):
    def wrapper(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'error': 'Missing authorization token'}), 401

        try:
            payload = jwt.decode(token, current_app.config['SECRET_KEY'], algorithms=['HS256'])
            # TODO: Check if user ID in payload is valid
        except jwt.exceptions.DecodeError:
            return jsonify({'error': 'Invalid authorization token'}), 401

        # Attach the payload to the request object for use in the route function
        request.payload = payload

        return f(*args, **kwargs)

    return wrapper
