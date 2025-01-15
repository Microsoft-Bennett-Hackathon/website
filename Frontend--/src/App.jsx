import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import WebCam from "./Pages/WebCam/Webcam";
import LoginPage from "./Pages/Login/Login";
import SignUpPage from "./Pages/SignUp/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";

// Mock authentication check
const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null;
};

// Protected Route component
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
       
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/camera" element={<WebCam />} />

        {/* Protected Route */}
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
      </Routes>
      
    </Router>
  );
};

export default App;
