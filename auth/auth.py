from datetime import datetime, timedelta
import jwt

SECRET = 'myjwtsecret'


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
        token = jwt.encode(payload, SECRET, algorithm="HS256")
        return token
    else:
        return None

