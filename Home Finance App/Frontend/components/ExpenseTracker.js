import React, { useState } from 'react';

const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState([]);

    const handleAddExpense = (category, amount) => {
        const newExpense = { category, amount };
        setExpenses((prev) => [...prev, newExpense]);
    };

    return (
        <div className="expense-tracker">
            <h2>Expense Tracker</h2>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>
                        {expense.category}: PKR {expense.amount}
                    </li>
                ))}
            </ul>

            <button onClick={() => handleAddExpense('Food', 500)}>Add PKR 500 for Food</button>
        </div>
    );
};

export default ExpenseTracker;
