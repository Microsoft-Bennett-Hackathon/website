import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Import your database connection
import authRoutes from './routes/auth.js'; // Import authentication routes
import cors from 'cors'; // Import CORS middleware

dotenv.config();

connectDB();

const app = express();

// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from your React frontend
}));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to handle file uploads
app.use(fileUpload());

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));