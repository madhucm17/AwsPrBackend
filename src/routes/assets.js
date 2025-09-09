const express = require('express');
const { Readable } = require('node:stream');
const router = express.Router();

// Simple image proxy using picsum.photos seeds by product id
router.get('/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const upstream = `https://picsum.photos/seed/${encodeURIComponent(productId)}/400`;
    const response = await fetch(upstream);
    if (!response.ok) return res.status(502).send('Bad gateway');
    res.set('Content-Type', response.headers.get('content-type') || 'image/jpeg');
    res.set('Cache-Control', 'public, max-age=3600');
    if (response.body && typeof response.body.getReader === 'function') {
      Readable.fromWeb(response.body).pipe(res);
    } else {
      const arrayBuffer = await response.arrayBuffer();
      res.end(Buffer.from(arrayBuffer));
    }
  } catch (e) {
    res.status(500).send('Asset error');
  }
});

module.exports = router;


