import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import collegeRoutes from './routes/collegeRoutes.js';
import authRoutes from './routes/authRoutes.js'; 
import adminRoutes from './routes/adminRoutes.js';
import userRoutes from './routes/userRoutes.js';
import './config/authConfig.js';
import { limiter } from './utils/helpers.js';

dotenv.config();

// Initialize express app
const app = express();

// Database connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('connected to mongodb!'))
.catch(err => console.log('not connected', err));

// Middleware
app.use(cors());
app.use(express.json());

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Load passport config


app.use(limiter);
// Routes
app.use('/api/colleges', collegeRoutes);
app.use('/auth', authRoutes);
app.use('/admin/auth',adminRoutes); 
app.use('/api/users', userRoutes);

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
