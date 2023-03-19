from flask import Flask, request, render_template, jsonify, redirect, url_for
import secrets
import os
from flask_login import LoginManager, login_user, logout_user, login_required, current_user
if os.environ.get('DOCKER'):
    from .authentication import authenticate
    from .models import db, User
else:
    from authentication import authenticate
    from models import db, User

app = Flask(__name__)
app.config['SECRET_KEY'] = secrets.token_urlsafe(32)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get("DATABASE_URL")

login_manager = LoginManager()
login_manager.init_app(app)
db.init_app(app)


@app.route('/')
def index():
    return render_template('login.html')


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')

        user = User.query.filter_by(username=username).first()
        if user:
            return jsonify({'error': 'User already exists'}), 409

        new_user = User(username=username, password=password)
        db.session.add(new_user)
        db.session.commit()

        return redirect(url_for('index'))
    return render_template('register.html')


# Define the login API
@app.route('/login', methods=['POST'])
@login_required
def login():
    username = request.form.get('username')
    password = request.form.get('password')
    authenticated = authenticate(username, password)

    if not authenticated:
        return jsonify({'error': 'Invalid credentials'}), 401

    return redirect(url_for('protected'))


@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('index'))


@app.route('/protected')
@login_required
def protected():
    return 'Protected logic here'


# Loader function
# Returns a user object based on user_id from our db
@login_manager.user_loader
def load_user(user_id):
    user = User.query.get(int(user_id))
    return user


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
