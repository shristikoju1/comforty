// const express = require('express');
// const router = express.Router();
// const { register, login, verifyToken } = require('../controllers/authController'); // Correct import

// // Registration route
// router.post('/register', register);

// // Login route
// router.post('/login', login);

// // Protected route
// router.get('/protected', verifyToken, (req, res) => {
//     res.json({ message: "Protected content" });
// });

// module.exports = router;


// server.js or routes/auth.js
const express = require('express');
const User = require('./models/User'); // Assuming you have a User model defined
const router = express.Router();

// POST route for user registration
router.post('/user', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
