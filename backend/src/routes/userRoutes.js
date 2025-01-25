import express from 'express';
const router = express.Router();
import authenticateToken from '../middlewares/authMiddleware.js';
import User from '../models/User.js';

// GET all Users
router.post('/', authenticateToken, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;