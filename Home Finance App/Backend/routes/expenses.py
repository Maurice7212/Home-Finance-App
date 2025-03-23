from flask import request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.expense import db, Expense
from sqlalchemy import func

def register_routes(app):
    @app.route('/api/expense', methods=['POST'])
    @jwt_required()
    def add_expense():
        user_id = get_jwt_identity()
        data = request.get_json()
        amount = data.get('amount')
        category = data.get('category')
        if not amount or not category:
            return jsonify({'error': 'Amount and category required'}), 400
        expense = Expense(amount=float(amount), category=category, user_id=user_id)
        db.session.add(expense)
        db.session.commit()
        return jsonify({'message': 'Expense added', 'id': expense.id}), 201

    @app.route('/api/expenses', methods=['GET'])
    @jwt_required()
    def get_expenses():
        user_id = get_jwt_identity()
        expenses = Expense.query.filter_by(user_id=user_id).order_by(Expense.date_added.desc()).all()
        return jsonify([{'id': e.id, 'amount': e.amount, 'category': e.category, 'date': e.date_added.isoformat()} for e in expenses])

    @app.route('/api/budget', methods=['GET'])
    @jwt_required()
    def get_budget():
        user_id = get_jwt_identity()
        expenses = Expense.query.filter_by(user_id=user_id).all()
        total_spent = sum(e.amount for e in expenses)
        budget_limit = 1000.0  # Hardcoded, could be dynamic
        savings_goal = 500.0  # New feature
        savings_progress = max(0, budget_limit - total_spent)  # How much is left to save
        return jsonify({
            'total_spent': total_spent,
            'budget_limit': budget_limit,
            'savings_goal': savings_goal,
            'savings_progress': savings_progress
        })

    @app.route('/api/analytics', methods=['GET'])
    @jwt_required()
    def get_analytics():
        user_id = get_jwt_identity()
        category_totals = db.session.query(Expense.category, func.sum(Expense.amount)) \
            .filter_by(user_id=user_id) \
            .group_by(Expense.category) \
            .all()
        return jsonify({cat: float(total) for cat, total in category_totals})