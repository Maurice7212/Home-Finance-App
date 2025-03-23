import React from 'react';

const InvestmentAdvisor = ({ riskLevel }) => {
    const recommendations = {
        low: ['Bonds', 'Index Funds'],
        medium: ['ETFs', 'Mutual Funds'],
        high: ['Cryptocurrency', 'Stocks']
    };

    return (
        <div>
            <h2>Investment Recommendations</h2>
            <ul>
                {recommendations[riskLevel].map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default InvestmentAdvisor;
