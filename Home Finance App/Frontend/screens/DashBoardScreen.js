import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/api';

const DashboardScreen = () => {
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getExpenses = async () => {
            try {
                const data = await fetchData('expenses');
                setExpenses(data);
            } catch (error) {
                console.error('Failed to fetch expenses:', error);
            } finally {
                setLoading(false);
            }
        };

        getExpenses();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>

            {loading ? (
                <p>Loading expenses...</p>
            ) : (
                <ul className="mt-4">
                    {expenses.map((expense) => (
                        <li key={expense.id}>
                            <strong>{expense.category}</strong>: PKR {expense.amount} (Date: {expense.date})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DashboardScreen;
