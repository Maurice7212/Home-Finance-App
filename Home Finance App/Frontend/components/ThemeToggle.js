import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const ThemeToggle = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="theme-toggle">
            <label className="switch">
                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={toggleTheme}
                />
                <span className="slider round"></span>
            </label>
            <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
        </div>
    );
};

export default ThemeToggle;
