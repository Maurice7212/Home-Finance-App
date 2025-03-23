import React from 'react';

const BudgetProgressMeter = ({ budget, expenses }) => {
    const percentage = (expenses / budget) * 100;

    return (
        <div className="progress-container">
            <div 
                className="progress-bar" 
                style={{ width: `${percentage}%`, backgroundColor: percentage > 100 ? '#F44336' : '#4CAF50' }}
            >
                {percentage.toFixed(2)}%
            </div>
        </div>
    );
};

export default BudgetProgressMeter;
