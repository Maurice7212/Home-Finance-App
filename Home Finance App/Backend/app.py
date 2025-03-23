from flask import Flask, jsonify, request  # Added `request` import
from utils.helpers import some_helper_function  # Adjust based on actual functions
from utils.tax_slabs import calculate_tax
from utils.auth_utils import authenticate_user
from config import Config
from key import SECRET_KEY

app = Flask(__name__)
app.config.from_object(Config)
app.secret_key = SECRET_KEY

# Sample route for health check
@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "OK", "message": "API is running successfully"}), 200

# Sample route for calculating tax
@app.route('/calculate-tax', methods=['POST'])
def calculate_tax_route():
    try:
        # Example JSON request: {"income": 75000}
        data = request.get_json()
        income = data.get('income')

        if income is None:
            return jsonify({"error": "Income is required"}), 400

        tax_result = calculate_tax(income)
        return jsonify({"income": income, "calculated_tax": tax_result})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Sample authentication route
@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')

        if not username or not password:
            return jsonify({"error": "Username and password are required"}), 400

        if authenticate_user(username, password):
            return jsonify({"message": "Login successful"}), 200
        else:
            return jsonify({"error": "Invalid credentials"}), 401

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
