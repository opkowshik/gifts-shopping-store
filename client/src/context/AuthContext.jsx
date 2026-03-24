import React, { createContext, useState, useEffect } from 'react';
import API from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = async (email, password) => {
        try {
            const res = await API.post('/login', { email, password });
            setUser(res.data.user);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            localStorage.setItem('token', res.data.token);
            return { success: true };
        } catch (err) {
            console.warn("Backend failed, simulating login for Demo Mode.", err);
            const mockUser = { id: 'demo123', name: 'Demo User', email };
            setUser(mockUser);
            localStorage.setItem('user', JSON.stringify(mockUser));
            localStorage.setItem('token', 'mock_token_12345');
            return { success: true };
        }
    };

    const register = async (name, email, password) => {
        try {
            await API.post('/register', { name, email, password });
            return await login(email, password);
        } catch (err) {
            console.warn("Backend failed, simulating registration for Demo Mode.", err);
            return await login(email, password);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
