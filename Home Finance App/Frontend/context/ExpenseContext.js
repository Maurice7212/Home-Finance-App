import { createContext, useState, useEffect } from 'react';

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
    const [expenses, setExpenses] = useState([]);

    const addExpense = (expense) => setExpenses([...expenses, expense]);

    const deleteExpense = (id) => 
        setExpenses(expenses.filter(expense => expense.id !== id));

    const updateExpense = (id, updatedExpense) =>
        setExpenses(expenses.map(expense => 
            expense.id === id ? { ...expense, ...updatedExpense } : expense
        ));

    return (
        <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense, updateExpense }}>
            {children}
        </ExpenseContext.Provider>
    );
};

export default ExpenseContext;
