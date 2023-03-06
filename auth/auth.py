from flask import request, jsonify, current_app
from datetime import datetime, timedelta
import jwt

JWT_SECRET = 'myjwtsecret'


# This function checks if the given username and password are valid.
# If they are, it generates a JWT access token and returns it in a JSON response.
# If they are not, it returns an error response.
def authenticate(username, password):
    # Check if username and password are valid
    if username == 'myuser' and password == 'mypassword':
        # Generate payload with expiration time, issue time, and subject (username)
        payload = {
            'exp': datetime.utcnow() + timedelta(minutes=30),
            'iat': datetime.utcnow(),
            'sub': username
        }
        # Encode payload into JWT access token using the secret key
        access_token = jwt.encode(payload, JWT_SECRET, algorithm='HS256')
        # Return access token and payload in a JSON response with 200 status code
        return jsonify({'access_token': access_token, 'payload': payload}), 200
    else:
        # Return error message in a JSON response with 401 status code
        return jsonify({'error': 'Invalid username or password'}), 401


# This function is a decorator that checks if the request contains a valid JWT access token.
# If it does, it attaches the decoded payload to the request object for use in the route function.
# If it does not, it returns an error response.
def require_token(f):
    def wrapper(*args, **kwargs):
        # Get the access token from the Authorization header
        token = request.headers.get('Authorization')
        if not token:
            # Return error message if token is missing in a JSON response with 401 status code
            return jsonify({'error': 'Missing authorization token'}), 401

        try:
            # Decode the access token using the secret key
            payload = jwt.decode(token, current_app.config['SECRET_KEY'], algorithms=['HS256'])
            # TODO: Check if user ID in payload is valid
        except jwt.exceptions.DecodeError:
            # Return error message if token is invalid in a JSON response with 401 status code
            return jsonify({'error': 'Invalid authorization token'}), 401

        # Attach the payload to the request object for use in the route function
        request.payload = payload

        # Call the route function with the modified request object and return the response
        return f(*args, **kwargs)

    return wrapper
