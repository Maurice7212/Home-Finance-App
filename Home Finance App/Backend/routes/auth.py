from flask import request, jsonify
from flask_jwt_extended import create_access_token

def register_auth_routes(app):
    @app.route('/api/login', methods=['POST'])
    def login():
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        if username == 'test' and password == 'pass':  # Dummy auth
            access_token = create_access_token(identity=1)
            return jsonify({'token': access_token})
        return jsonify({'error': 'Invalid credentials'}), 401