import jwt
from flask import jsonify
from config import SECRET_KEY

def generate_token(user_id):
    token = jwt.encode({'id': user_id}, SECRET_KEY, algorithm="HS256")
    return token

def decode_token(token):
    try:
        return jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
    except jwt.ExpiredSignatureError:
        return jsonify({'error': 'Token expired'}), 401
    except jwt.InvalidTokenError:
        return jsonify({'error': 'Invalid token'}), 401
