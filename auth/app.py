from flask import Flask, request, render_template, jsonify
import secrets
from auth import authenticate
import requests
import jwt

app = Flask(__name__)
app.config['SECRET_KEY'] = secrets.token_urlsafe(32)


@app.route('/')
def index():
    return render_template('index.html')


# Define the login API
@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    # Call the authenticate function to validate user credentials
    token = authenticate(username, password)

    # Check if authentication was successful
    if not token:
        return jsonify({'error': 'Invalid credentials'}), 401

    # Decode the token and extract the information it contains
    try:
        payload = jwt.decode(token, 'myjwtsecret', algorithms=["HS256"])
        username = payload['sub']
        exp = payload['exp']
    except jwt.DecodeError:
        return jsonify({'error': 'Invalid token'}), 401

    return jsonify({'username': username, 'experation': exp})


# Define the authentication API
@app.route('/authenticate', methods=['POST'])
def authenticate_user():
    username = request.json.get('username')
    password = request.json.get('password')

    return authenticate(username, password)


@app.route('/protected')
def protected():
    return 'Protected logic here'


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
