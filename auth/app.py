from flask import Flask, jsonify, request
import jwt
import secrets


app = Flask(__name__)
app.config['SECRET_KEY'] = secrets.token_urlsafe(32)


# Define the authentication API
@app.route('/auth', methods=['POST'])
def authenticate():
    username = request.json.get('username')
    password = request.json.get('password')

    # TODO: Check if username and password are valid
    # If not, return a 401 Unauthorized response

    # If the credentials are valid, create a JWT containing the user's ID
    payload = {'user_id': 12345}
    access_token = jwt.encode(payload, app.config['SECRET_KEY'])

    return jsonify({'access_token': access_token.decode(utf=8)}), 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
