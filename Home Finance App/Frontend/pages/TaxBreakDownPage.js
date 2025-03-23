import React from 'react';
import { calculateTax } from './taxslabs';

const TaxBreakdownPage = ({ income }) => (
    <div>
        <h2>Tax Breakdown</h2>
        <p>Tax Amount: ${calculateTax(income)}</p>
    </div>
);

export default TaxBreakdownPage;
