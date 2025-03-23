import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Screen Components
import HomeScreen from './screens/HomeScreen';
import DashboardScreen from './screens/DashboardScreen';
import TaxCalculator from './screens/TaxCalculator';

// Component Imports
import GoalTracker from './components/GoalTracker';

const App = () => (
    <Router>
        <Routes>
            {/* Main Screens */}
            <Route path="/" element={<HomeScreen />} />
            <Route path="/dashboard" element={<DashboardScreen />} />
            <Route path="/tax" element={<TaxCalculator />} />

            {/* Feature Components */}
            <Route path="/goals" element={<GoalTracker />} />

            {/* 404 Not Found Route (Recommended) */}
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
    </Router>
);

export default App;
