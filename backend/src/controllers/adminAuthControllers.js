
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';

// Register a new user
export const register = async (req, res) => {
  const { username, email, password, adminRole } = req.body;
  try {
    const existingUser = await Admin.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const user = new Admin({ username, email, password, adminRole });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login a user
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Admin.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user: { id: user._id, username: user.username, email: user.email, adminRole : user.adminRole} });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
