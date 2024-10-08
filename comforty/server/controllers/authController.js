const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Register function
const register = async (req, res) => {
    // Your registration logic
};

// Login function
const login = async (req, res) => {
    // Your login logic
};

// Verify Token function
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ error: "Token is required" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: "Invalid token" });
        }
        req.user = user;
        next();
    });
};

// Export functions
module.exports = { register, login, verifyToken };
