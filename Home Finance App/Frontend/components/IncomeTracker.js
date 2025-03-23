import React, { useContext } from 'react';
import IncomeContext from './incomecontext';

const IncomeTracker = () => {
    const { income, addIncome, deleteIncome } = useContext(IncomeContext);

    return (
        <div>
            <h2>Income Tracker</h2>
            <ul>
                {income.map((entry) => (
                    <li key={entry.id}>
                        {entry.source}: ${entry.amount} 
                        <button onClick={() => deleteIncome(entry.id)}>❌</button>
                    </li>
                ))}
            </ul>

            <button onClick={() => addIncome({ id: Date.now(), source: 'Freelancing', amount: 500 })}>
                Add Income
            </button>
        </div>
    );
};

export default IncomeTracker;
