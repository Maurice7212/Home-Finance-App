import React, { useState } from 'react';
import axios from 'axios';

const TaxCalculator = () => {
    const [income, setIncome] = useState('');
    const [province, setProvince] = useState('Punjab');
    const [result, setResult] = useState(null);

    const calculateTax = async () => {
        const response = await axios.post('/api/tax', {
            income: parseFloat(income),
            province,
        });

        setResult(response.data);
    };

    return (
        <div className="p-4 border rounded-md shadow-md bg-white">
            <h2 className="text-2xl font-bold mb-4">Tax Calculator</h2>

            <div className="mb-4">
                <label>Income:</label>
                <input
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    className="px-3 py-2 border rounded-md"
                />
            </div>

            <div className="mb-4">
                <label>Province:</label>
                <select
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    className="px-3 py-2 border rounded-md"
                >
                    <option>Punjab</option>
                    <option>Sindh</option>
                    <option>KPK</option>
                    <option>Balochistan</option>
                </select>
            </div>

            <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={calculateTax}
            >
                Calculate Tax
            </button>

            {result && (
                <div className="mt-4">
                    <p>Income: {result.income}</p>
                    <p>Tax: {result.tax}</p>
                    <p>Net Income: {result.net_income}</p>
                </div>
            )}
        </div>
    );
};

export default TaxCalculator;
