/**
 * Main Express server entry for MERN Config Manager Backend
 * --------------------------------------------------------
 * - Connects to MongoDB
 * - Sets up API endpoints
 * - Handles CORS and JSON middleware
 * - Provides a health check endpoint
 */

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import configRoutes from './routes/configurations.js';

dotenv.config();
const app = express();

// ===== MIDDLEWARE =====
app.use(cors());
app.use(express.json());

// ===== HEALTH ENDPOINT =====
/**
 * @route   GET /api
 * @desc    Health check for API
 * @access  Public
 */
app.get('/api', (req, res) => {
  res.json({ status: 'ok', message: 'API is running ' });
});

// ===== MAIN ROUTES =====
app.use('/api/configurations', configRoutes);

// ===== MONGODB CONNECTION =====
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log(' MongoDB connected'))
  .catch(err => console.error(' MongoDB connection error:', err));

// ===== SERVER START =====
app.listen(process.env.PORT, () => console.log(` Server running on port ${process.env.PORT}`));
