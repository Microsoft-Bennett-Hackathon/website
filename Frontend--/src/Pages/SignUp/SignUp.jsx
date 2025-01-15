import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";

const SignUpPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", preference: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", formData);
      alert(response.data.message || "Sign-up successful!");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Sign-up failed.");
    }
  };

  
  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSignUp}>
        <h1 className="auth-title">Sign Up</h1>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {/* Preference Section */}
        <div className="preference-container">
          <label htmlFor="preference">Select your fitness preference:</label>
          <select
            name="preference"
            value={formData.preference}
            onChange={handleChange}
            required
          >
            <option value="">--Select--</option>
            <option value="bodybuilding">Bodybuilding</option>
            <option value="weightlifting">Weightlifting</option>
            <option value="cardio">Cardio</option>
            <option value="yoga">Yoga</option>
            <option value="crossfit">CrossFit</option>
            <option value="pilates">Pilates</option>
          </select>
        </div>

        {/* Age Section */}
        <div className="age-container">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            required
          />
        </div>

        {/* Weight Section */}
        <div className="weight-container">
          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Enter your weight in kg"
            required
          />
        </div>

        {/* Height Section */}
        <div className="height-container">
          <label htmlFor="height">Height (cm):</label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            placeholder="Enter your height in cm"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="auth-button">Sign Up</button>

        {/* Login Link */}
        <p className="auth-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
