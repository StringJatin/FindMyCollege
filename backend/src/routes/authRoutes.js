import { Router } from 'express';
import passport from 'passport';
import User from '../models/User.js';

const router = Router();

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect to dashboard.
    res.redirect('/dashboard');
  }
);

router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) { return next(err); }
    res.redirect('/');
  });
});


//to get all users
router.get('/users', async (req, res) => {
    try {
      const users = await User.find(); // Fetch all users from the database
      res.json(users); // Respond with the list of users
    } catch (err) {
      res.status(500).json({ message: 'Error fetching users', error: err });
    }
  });

export default router;
