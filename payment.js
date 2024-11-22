const express = require('express');
const router = express.Router();
const db = require('../database/db');

// Handle payment
router.post('/pay', (req, res) => {
  const { billId } = req.body;
  const query = 'UPDATE Bills SET Paid = 1 WHERE BillID = ?';
  db.query(query, [billId], (err, results) => {
    if (err) return res.status(500).json({ success: false, error: err.message });
    res.json({ success: true, message: 'Payment successful' });
  });
});

module.exports = router;
