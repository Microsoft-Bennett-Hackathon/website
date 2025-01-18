import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5000/api/auth/login", {
//         email,
//         password,
//       });

//       // Save token to localStorage (if needed)
//       localStorage.setItem("authToken", response.data.token);

//       // Navigate to Dashboard
//       alert("Login successful!");
//       navigate("/dashboard");
//     } catch (error) {
//       alert(error.response?.data?.message || "Login failed.");
//     }
//   };
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // Save token to localStorage
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("email", email);

      // Navigate to Dashboard
      alert("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed.");
    }
  };
  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h1 className="auth-title">Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="auth-button">
          Login
        </button>
        <p className="auth-text">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
