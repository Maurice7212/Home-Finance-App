import React from 'react';

const SummaryCard = ({ income, expenses, savings }) => (
    <div className="summary-card">
        <h2>Financial Summary</h2>
        <p>💰 Income: ${income}</p>
        <p>💸 Expenses: ${expenses}</p>
        <p>💹 Savings: ${savings}</p>
    </div>
);

export default SummaryCard;
