from flask import request, jsonify
from app import app
import jwt


def require_token(f):
    def wrapper(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({'error': 'Missing authorization token'}), 401

        try:
            payload = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['H256'])
            # TODO: Check if user ID in payload is valid
        except jwt.exceptions.DecodeError:
            return jsonify({'error': 'Invalid authorization token'}), 401

        return f(*args, **kwargs)

    return wrapper


@app.route('/protected')
@require_token
def protected_route():
    return 'This route requires authentication'
