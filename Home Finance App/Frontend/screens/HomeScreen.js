import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => (
    <div className="p-6">
        <h1 className="text-3xl font-bold">🏠 Home Finance App</h1>
        <p className="mt-2 text-lg">Track your expenses, savings, and goals easily!</p>
        <nav className="mt-4 space-y-2">
            <Link to="/dashboard" className="block text-blue-500 hover:underline">📊 Dashboard</Link>
            <Link to="/goals" className="block text-green-500 hover:underline">🎯 Goal Tracker</Link>
        </nav>
    </div>
);

export default HomeScreen;
