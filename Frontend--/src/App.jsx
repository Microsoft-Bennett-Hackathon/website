import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import WebCam from "./Pages/WebCam/Webcam";
import LoginPage from "./Pages/Login/Login";
import SignUpPage from "./Pages/SignUp/SignUp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import About from "./Components/About/About";
import WeightLossMain from "./Pages/Weightloss/WeightLossMain";
import MusclegainMain from "./Pages/Musclegain/MusclegainMain";
import DietplanMain from "./Pages/Dietplan/DietplanMain";
import AllworkoutsMain from "./Pages/Allworkouts/AllworkoutsMain";
import TodaysWorkoutMain from "./Pages/TodaysWorkout/TodaysWorkoutMain";
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
        <Route path="/advantages" element={<About />} />

        {/* Protected Route */}
        {/* <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/WeightlossMain" element={<WeightLossMain />} />
        <Route path="/MusclegainMain" element={<MusclegainMain />} />
        <Route path="/DietplanMain" element={<DietplanMain />} />
        <Route path="/AllworkoutsMain" element={<AllworkoutsMain />} />
        <Route path="/todaysworkoutmain" element={<TodaysWorkoutMain />} />
      </Routes>
    </Router>
  );
};

export default App;
