// backend/routes/adminDashboard.js (protected route)

const express = require('express');
const authenticateAdmin = require('../middleware/authMiddleware');
const router = express.Router();

router.get("/admin-dashboard", authenticateAdmin, (req, res) => {
  res.json({ message: "Welcome to the Admin Dashboard" });
});

module.exports = router;
