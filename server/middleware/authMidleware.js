// backend/middleware/authMiddleware.js

const jwt = require('jsonwebtoken');

const authenticateAdmin = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded; // Attach the decoded admin info to the request
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = authenticateAdmin;
