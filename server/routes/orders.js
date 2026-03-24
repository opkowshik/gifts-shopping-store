const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const auth = require('../middleware/auth');

// POST /api/orders
router.post('/orders', auth, async (req, res) => {
    try {
        const { products, totalPrice } = req.body;
        
        const newOrder = new Order({
            userId: req.user.id,
            products,
            totalPrice
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET /api/orders
router.get('/orders', auth, async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.user.id }).populate('products.productId');
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
