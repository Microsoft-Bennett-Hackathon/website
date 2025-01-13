import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Import your database connection
import authRoutes from './routes/auth.js'; // Import authentication routes
import cors from 'cors'; // Import CORS middleware

dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Use CORS middleware to allow requests from your React frontend
app.use(cors({
  origin: 'http://localhost:5173', // Ensure this matches your frontend's address
}));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes); // Handle authentication routes

// Test route
app.get('/test', (req, res) => {
  res.send('Server is up and running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));