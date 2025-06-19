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

// ===== CORS CONFIGURATION =====
// Get allowed origins from environment variable or use defaults
const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',').map(origin => origin.trim())
  : [
      'https://config-manager-umber.vercel.app',
      'http://localhost:3000' // Default for development
    ];

// Get port from environment variable or use default 8080
const PORT = process.env.PORT || 8080;

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, postman)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'PUT', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

// ===== MIDDLEWARE =====
app.use(cors(corsOptions));
app.use(express.json());

// Add CORS pre-flight for all routes
app.options('*', cors(corsOptions));

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
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
