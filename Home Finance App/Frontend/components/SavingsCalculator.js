import React, { useState } from 'react';

const SavingsCalculator = () => {
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);

    const calculateSavings = () => income - expenses;

    return (
        <div>
            <h2>Savings Calculator</h2>
            <input 
                type="number" 
                placeholder="Enter Income" 
                onChange={(e) => setIncome(Number(e.target.value))} 
            />
            <input 
                type="number" 
                placeholder="Enter Expenses" 
                onChange={(e) => setExpenses(Number(e.target.value))} 
            />
            <h3>Estimated Savings: {calculateSavings()}</h3>
        </div>
    );
};

export default SavingsCalculator;
