import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const { cart } = useContext(CartContext);

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 30px', backgroundColor: '#333', color: '#fff' }}>
            <h2><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>GiftStore</Link></h2>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
                <Link to="/products" style={{ color: '#fff', textDecoration: 'none' }}>Products</Link>
                <Link to="/cart" style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <ShoppingCart size={20} /> ({cart.length})
                </Link>
                {user ? (
                    <>
                        <span>Welcome, {user.name}</span>
                        <button onClick={logout} style={{ padding: '5px 10px', cursor: 'pointer' }}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
                        <Link to="/register" style={{ color: '#fff', textDecoration: 'none' }}>Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
