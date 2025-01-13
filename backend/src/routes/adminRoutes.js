import { Router } from 'express';
import { login, register } from '../controllers/adminAuthControllers.js';
import Admin from '../models/Admin.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);

router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

router.get('/admins', async (req, res) => {
  try {
    const users = await Admin.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users', error: err });
  }
});

export default router;
