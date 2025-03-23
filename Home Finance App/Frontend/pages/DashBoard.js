import React from 'react';
import FinanceChart from '../components/FinanceChart';

const data = [
    { month: 'Jan', income: 50000, expenses: 30000, savings: 20000 },
    { month: 'Feb', income: 45000, expenses: 25000, savings: 20000 },
    { month: 'Mar', income: 60000, expenses: 35000, savings: 25000 },
    { month: 'Apr', income: 70000, expenses: 40000, savings: 30000 },
    { month: 'May', income: 65000, expenses: 38000, savings: 27000 },
    { month: 'Jun', income: 72000, expenses: 42000, savings: 30000 },
    { month: 'Jul', income: 68000, expenses: 39000, savings: 29000 },
    { month: 'Aug', income: 75000, expenses: 45000, savings: 30000 },
    { month: 'Sep', income: 78000, expenses: 47000, savings: 31000 },
    { month: 'Oct', income: 82000, expenses: 50000, savings: 32000 },
    { month: 'Nov', income: 86000, expenses: 52000, savings: 34000 },
    { month: 'Dec', income: 90000, expenses: 55000, savings: 35000 }
];

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <FinanceChart data={data} />
        </div>
    );
};

export default Dashboard;
