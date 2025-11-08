// backend/routes/admin.js

const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin'); // Your Admin model
const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare entered password with stored password
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Create and sign JWT token
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token }); // Send the token to the frontend
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
