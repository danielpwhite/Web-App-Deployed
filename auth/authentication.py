from werkzeug.security import check_password_hash
from flask_login import login_user

from models import User


def authenticate(username, password):
    user = User.query.filter_by(username=username).first()

    if user is not None and check_password_hash(user.password, password):
        login_user(user)
        return user
    else:
        return None
