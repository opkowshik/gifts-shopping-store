import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', textAlign: 'center' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} />
            <h3>{product.name}</h3>
            <p style={{ color: '#555', fontSize: '14px' }}>{product.description}</p>
            <p style={{ fontWeight: 'bold' }}>${product.price}</p>
            <button onClick={() => addToCart(product)} style={{ padding: '8px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
