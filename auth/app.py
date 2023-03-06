from flask import Flask, request, render_template
import secrets
from auth import require_token, authenticate

app = Flask(__name__)
app.config['SECRET_KEY'] = secrets.token_urlsafe(32)


@app.route('/')
def index():
    return render_template('index.html')


# Define the authentication API
@app.route('/auth', methods=['POST'])
def authenticate_user():
    username = request.json.get('username')
    password = request.json.get('password')

    return authenticate(username, password)


@app.route('/protected')
@require_token
def protected():
    # TODO: Implement protected route logic
    pass


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
