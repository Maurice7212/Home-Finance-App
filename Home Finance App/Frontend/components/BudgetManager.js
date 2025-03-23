import React, { useState } from 'react';

const BudgetManager = () => {
    const [budget, setBudget] = useState(100000);
    const [expenses, setExpenses] = useState(0);
    const remainingBudget = budget - expenses;

    const handleExpense = (amount) => {
        setExpenses((prev) => prev + amount);
    };

    return (
        <div className="budget-container">
            <h2>Budget Manager</h2>
            <p><strong>Total Budget:</strong> PKR {budget}</p>
            <p><strong>Expenses:</strong> PKR {expenses}</p>
            <p><strong>Remaining Budget:</strong> PKR {remainingBudget}</p>
        </div>
    );
};

export default BudgetManager;
