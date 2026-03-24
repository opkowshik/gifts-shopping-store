import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import API from '../api';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, total, clearCart } = useContext(CartContext);
    const { user } = useContext(AuthContext);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleCheckout = async () => {
        if (!user) {
            navigate('/login');
            return;
        }

        try {
            const token = localStorage.getItem('token');
            const products = cart.map(item => ({ productId: item._id, quantity: item.quantity }));
            
            await API.post('/orders', 
                { products, totalPrice: total },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setMessage('Order placed successfully!');
            clearCart();
        } catch (err) {
            setMessage('Checkout failed: ' + (err.response?.data?.message || err.message));
        }
    };

    if (cart.length === 0) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Your cart is empty.</h2>;

    return (
        <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Your Cart</h2>
            {message && <p style={{ textAlign: 'center', color: 'green', fontWeight: 'bold' }}>{message}</p>}
            
            <div>
                {cart.map(item => (
                    <div key={item._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', borderBottom: '1px solid #ddd' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <img src={item.image} alt={item.name} style={{ width: '60px', borderRadius: '4px' }} />
                            <div>
                                <h4>{item.name}</h4>
                                <p>${item.price} x {item.quantity}</p>
                            </div>
                        </div>
                        <button onClick={() => removeFromCart(item._id)} style={{ padding: '5px 10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Remove</button>
                    </div>
                ))}
            </div>

            <div style={{ textAlign: 'right', marginTop: '20px' }}>
                <h3>Total: ${total.toFixed(2)}</h3>
                <button onClick={handleCheckout} style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}>
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
