import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token') || null);

    // Auto-login with stored token
    useEffect(() => {
        if (token) {
            axios.get('/auth/protected', {
                headers: { Authorization: `Bearer ${token}` }
            }).then(response => {
                setUser(response.data.message);
            }).catch(() => {
                logout();
            });
        }
    }, [token]);

    // Login
    const login = async (email, password) => {
        try {
            const response = await axios.post('/auth/login', { email, password });
            const newToken = response.data.token;
            localStorage.setItem('token', newToken);
            setToken(newToken);
            return true;
        } catch (error) {
            return false;
        }
    };

    // Register
    const register = async (username, email, password) => {
        try {
            await axios.post('/auth/register', { username, email, password });
            return true;
        } catch (error) {
            return false;
        }
    };

    // Logout
    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
