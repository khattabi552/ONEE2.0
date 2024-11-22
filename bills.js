const express = require('express');
const router = express.Router();
const db = require('../database/db');

// Fetch bill data
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const query = 'SELECT * FROM Bills WHERE UserID = ?';
  db.query(query, [userId], (err, results) => {
    if (err) return res.status(500).json({ success: false, error: err.message });
    res.json(results);
  });
});

module.exports = router;
