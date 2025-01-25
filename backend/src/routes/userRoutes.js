import express from 'express';
const router = express.Router();
import authenticateToken from '../middlewares/authMiddleware.js';
import User from '../models/User.js';

// GET all Users
router.get('/', authenticateToken, async (req, res) => {
  try {
    const colleges = await User.find();
    res.json(colleges);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;