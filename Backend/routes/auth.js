import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js'; // Note the `.js` extension

const router = express.Router();
router.get('/test', (req, res) => {
  res.send('Server is up and running');
});

// Register a new user
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({ name, email, password });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({ token });
  } catch (error) {
    console.error('Error in register route:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Login a user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error in login route:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;