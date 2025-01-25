import { Router } from 'express';
import passport from 'passport';
import { login, register } from '../controllers/authControllers.js';
import User from '../models/User.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) { return next(err); }
    res.redirect('/');
  });
});



export default router;
