import React, { useContext } from 'react';
import ExpenseContext from './expensecontext';

const ExpensesPage = () => {
    const { expenses } = useContext(ExpenseContext);

    return (
        <div>
            <h2>Expenses</h2>
            <ul>
                {expenses.map(expense => (
                    <li key={expense.id}>{expense.description}: ${expense.amount}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExpensesPage;
