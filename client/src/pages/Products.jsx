import React, { useEffect, useState } from 'react';
import API from '../api';
import ProductCard from '../components/ProductCard';

const fallbackProducts = [
    { _id: '1', name: 'Teddy Bear', price: 20, image: 'https://images.unsplash.com/photo-1559458925-5e608660882e?w=400', description: 'A cute soft teddy bear', category: 'Toys' },
    { _id: '2', name: 'Smart Watch', price: 150, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', description: 'A modern smart watch', category: 'Electronics' },
    { _id: '3', name: 'Perfume Set', price: 60, image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400', description: 'Luxury perfume set', category: 'Fashion' },
    { _id: '4', name: 'Photo Frame', price: 15, image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400', description: 'Wooden photo frame', category: 'Decor' },
    { _id: '5', name: 'Bluetooth Speaker', price: 45, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400', description: 'Portable bluetooth speaker', category: 'Electronics' },
    { _id: '6', name: 'Coffee Mug', price: 10, image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400', description: 'Ceramic coffee mug', category: 'Kitchen' }
];

const Products = () => {
    // Start instantly with fallback products so the UI is never empty!
    const [products, setProducts] = useState(fallbackProducts);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Try requesting from the backend with a 2 second timeout
                const res = await API.get('/products', { timeout: 2000 });
                if (res.data && res.data.length > 0) {
                    setProducts(res.data);
                }
            } catch (err) {
                console.error("Backend fetch timeout/error. Continuing to use fallback data.", err);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div style={{ padding: '40px 20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Our Gift Collection</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
                {products.length > 0 ? products.map(product => (
                    <ProductCard key={product._id} product={product} />
                )) : <p style={{textAlign: 'center', width: '100%'}}>Loading products...</p>}
            </div>
        </div>
    );
};

export default Products;
