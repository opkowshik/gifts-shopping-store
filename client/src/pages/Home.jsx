import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('Male');
    const [occasion, setOccasion] = useState('Birthday');
    const [budget, setBudget] = useState('');
    const [recommendation, setRecommendation] = useState('');

    const getRecommendation = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5001/predict', {
                Age: age,
                Gender: gender,
                Occasion: occasion,
                Budget: budget
            });
            setRecommendation(res.data.recommended_gift);
        } catch (err) {
            console.error('Error fetching recommendation', err);
        }
    };

    return (
        <div>
            {/* Hero Section */}
            <header style={{ textAlign: 'center', padding: '50px 20px', backgroundColor: '#e9ecef' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Welcome to Gift Shopping Store!</h1>
                <p style={{ fontSize: '1.2rem', color: '#555' }}>Find the perfect gift for every occasion.</p>
                <Link to="/products" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
                    Shop Now
                </Link>
            </header>

            {/* AI Recommendation Section */}
            <section style={{ padding: '40px 20px', maxWidth: '600px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>🤖 AI Gift Recommendation</h2>
                <form onSubmit={getRecommendation} style={{ display: 'flex', flexDirection: 'column', gap: '15px', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
                    <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required style={{ padding: '10px' }} />
                    <select value={gender} onChange={(e) => setGender(e.target.value)} style={{ padding: '10px' }}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <select value={occasion} onChange={(e) => setOccasion(e.target.value)} style={{ padding: '10px' }}>
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Valentine">Valentine</option>
                        <option value="Graduation">Graduation</option>
                        <option value="Retirement">Retirement</option>
                    </select>
                    <input type="number" placeholder="Budget ($)" value={budget} onChange={(e) => setBudget(e.target.value)} required style={{ padding: '10px' }} />
                    <button type="submit" style={{ padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Get Recommendation</button>
                    
                    {recommendation && (
                        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e2e3e5', color: '#383d41', borderRadius: '5px', textAlign: 'center' }}>
                            <strong>Recommended Gift: </strong> {recommendation}
                        </div>
                    )}
                </form>
            </section>
        </div>
    );
};

export default Home;
