import React, { useState } from 'react';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            console.log('Logging in:', { email, password });
        } else {
            console.log('Registering:', { email, password });
        }
    };

    return (
        <div className="auth-container">
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">
                    {isLogin ? 'Login' : 'Register'}
                </button>
            </form>
            <p onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'New here? Register' : 'Already have an account? Login'}
            </p>
        </div>
    );
};

export default AuthForm;
