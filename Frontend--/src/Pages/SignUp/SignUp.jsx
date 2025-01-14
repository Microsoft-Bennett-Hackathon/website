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
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
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
        <button type="submit" className="auth-button">Sign Up</button>
        <p className="auth-text">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
