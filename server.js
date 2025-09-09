const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const productsRouter = require('./src/routes/products');
const assetsRouter = require('./src/routes/assets');
const ordersRouter = require('./src/routes/orders');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'ecommerce-backend' });
});

app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/assets', assetsRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend listening on http://localhost:${PORT}`);
});


