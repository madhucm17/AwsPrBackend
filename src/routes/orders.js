const express = require('express');
const router = express.Router();

// In-memory orders storage for practice purposes
const orders = [];

router.post('/', (req, res) => {
  const { items, customer } = req.body;
  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: 'Order must include items' });
  }
  const id = `o_${Date.now()}`;
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const order = { id, items, customer: customer || null, total, createdAt: new Date().toISOString() };
  orders.push(order);
  res.status(201).json(order);
});

router.get('/', (req, res) => {
  res.json(orders);
});

module.exports = router;


