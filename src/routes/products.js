const express = require('express');
const router = express.Router();

const products = [
  { id: 'p1', name: 'Wireless Headphones', price: 59.99, imageUrl: 'https://picsum.photos/seed/p1/400', description: 'Comfortable over-ear wireless headphones with noise isolation.' },
  { id: 'p2', name: 'Smart Watch', price: 129.0, imageUrl: 'https://picsum.photos/seed/p2/400', description: 'Fitness tracking, notifications, and long battery life.' },
  { id: 'p3', name: 'Mechanical Keyboard', price: 89.5, imageUrl: 'https://picsum.photos/seed/p3/400', description: 'Tactile switches and customizable RGB lighting.' },
  { id: 'p4', name: '4K Monitor', price: 299.99, imageUrl: 'https://picsum.photos/seed/p4/400', description: 'Ultra HD resolution with vibrant colors and slim bezels.' },
  { id: 'p5', name: 'USB-C Hub', price: 24.99, imageUrl: 'https://picsum.photos/seed/p5/400', description: 'Expand your connectivity with multiple ports.' },
  { id: 'p6', name: 'Gaming Mouse', price: 39.99, imageUrl: 'https://picsum.photos/seed/p6/400', description: 'Ergonomic design with adjustable DPI and RGB.' },
  { id: 'p7', name: 'Portable SSD 1TB', price: 119.99, imageUrl: 'https://picsum.photos/seed/p7/400', description: 'Fast NVMe storage in a compact enclosure.' },
  { id: 'p8', name: 'Bluetooth Speaker', price: 49.99, imageUrl: 'https://picsum.photos/seed/p8/400', description: 'Water-resistant with deep bass.' },
  { id: 'p9', name: 'Webcam 1080p', price: 34.99, imageUrl: 'https://picsum.photos/seed/p9/400', description: 'Clear video and dual microphones.' },
  { id: 'p10', name: 'Laptop Stand', price: 27.99, imageUrl: 'https://picsum.photos/seed/p10/400', description: 'Aluminum adjustable stand for better ergonomics.' },
  { id: 'p11', name: 'USB-C Charger 65W', price: 29.99, imageUrl: 'https://picsum.photos/seed/p11/400', description: 'GaN charger with multiple ports.' },
  { id: 'p12', name: 'Noise Cancelling Earbuds', price: 79.99, imageUrl: 'https://picsum.photos/seed/p12/400', description: 'Active noise cancellation and long battery life.' },
  { id: 'p13', name: 'Smart Lamp', price: 22.99, imageUrl: 'https://picsum.photos/seed/p13/400', description: 'Touch control with multiple color temperatures.' },
  { id: 'p14', name: 'Action Camera 4K', price: 149.99, imageUrl: 'https://picsum.photos/seed/p14/400', description: 'Stabilized 4K video with wide angle lens.' },
  { id: 'p15', name: 'Wireless Charger', price: 18.99, imageUrl: 'https://picsum.photos/seed/p15/400', description: 'Fast charging pad with LED indicator.' },
];

router.get('/', (req, res) => {
  res.json(products);
});

router.get('/:id', (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

module.exports = router;


