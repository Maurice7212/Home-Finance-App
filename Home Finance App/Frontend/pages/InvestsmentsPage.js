import React, { useContext } from 'react';
import InvestmentContext from './investmentcontext';

const InvestmentsPage = () => {
    const { investments } = useContext(InvestmentContext);

    return (
        <div>
            <h2>Investments</h2>
            <ul>
                {investments.map(inv => (
                    <li key={inv.id}>{inv.name}: ${inv.amount}</li>
                ))}
            </ul>
        </div>
    );
};

export default InvestmentsPage;
