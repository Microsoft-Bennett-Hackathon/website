import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import WebCam from './Pages/WebCam/Webcam';
import LoginPage from './Pages/Login/Login';
import SignUpPage from './Pages/SignUp/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';

// Authentication mock function for simplicity
const isAuthenticated = () => {
  // Check if the user is authenticated (e.g., token exists in localStorage)
  return localStorage.getItem('authToken') !== null;
};

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/camera" element={<WebCam />} />

          {/* Protected Route */}
          <Route
            path="/dashboard"
            element={
              isAuthenticated() ? <Dashboard /> : <Navigate to="/login" replace />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
