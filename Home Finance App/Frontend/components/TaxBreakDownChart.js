import React, { useState } from 'react';

const GoalTracker = () => {
    const [goal, setGoal] = useState(100000);
    const [currentSavings, setCurrentSavings] = useState(25000);
    const [inputValue, setInputValue] = useState('');

    const handleAddSavings = () => {
        const amount = parseFloat(inputValue);
        if (isNaN(amount) || amount <= 0) {
            alert('❌ Please enter a valid positive amount!');
            return;
        }

        const newSavings = currentSavings + amount;
        setCurrentSavings(newSavings);

        if (newSavings >= goal) {
            const surplus = (newSavings - goal).toFixed(2);
            alert(`🎯 Goal Achieved! You’ve exceeded your goal by PKR ${surplus}.`);
        } else {
            const remaining = (goal - newSavings).toFixed(2);
            alert(`✅ PKR ${amount} added! PKR ${remaining} remaining to reach your goal.`);
        }

        setInputValue('');
    };

    const progressPercentage = ((currentSavings / goal) * 100).toFixed(1);

    return (
        <div className="p-4 border rounded-md shadow-md bg-white max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">
                Savings Goal Tracker
            </h2>

            <div className="mb-3 text-center">
                <p><strong>Target Goal:</strong> PKR {goal.toLocaleString()}</p>
                <p><strong>Current Savings:</strong> PKR {currentSavings.toLocaleString()}</p>
            </div>

            <div className="relative w-full bg-gray-200 rounded-md overflow-hidden mb-2">
                <div
                    className={`h-6 ${
                        progressPercentage >= 100
                            ? 'bg-green-500'
                            : progressPercentage >= 75
                            ? 'bg-blue-500'
                            : progressPercentage >= 50
                            ? 'bg-yellow-500'
                            : 'bg-red-500'
                    }`}
                    style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                ></div>
            </div>

            <p className="mt-2 text-center font-semibold">
                Progress: {progressPercentage}%
            </p>

            <div className="mt-4 flex gap-2">
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter amount"
                    className="flex-grow px-3 py-2 border rounded-md"
                />
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                    onClick={handleAddSavings}
                >
                    Add Savings
                </button>
            </div>
        </div>
    );
};

export default GoalTracker;
