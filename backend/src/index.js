import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import collegeRoutes from './routes/collegeRoutes.js';
import authRoutes from './routes/authRoutes.js'; 
import adminRoutes from './routes/adminRoutes.js';

dotenv.config();

// Initialize express app
const app = express();

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
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
import './config/authConfig.js';

// Routes
app.use('/api/colleges', collegeRoutes);
app.use('/auth', authRoutes);
app.use('/admin/auth',adminRoutes); 

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
