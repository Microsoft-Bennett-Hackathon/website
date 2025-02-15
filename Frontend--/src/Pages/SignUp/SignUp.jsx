import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";
import Modal from "./Modal";
import Carousel from "./Carousel";

const SignUpPage = () => {
  const [step, setStep] = useState(1); // Step tracker
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    weight: "",
    height: "",
    bodyFat: null, // Will be set via the Carousel component
    profilePic: null, // New field for profile picture
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePic: e.target.files[0] });
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSignUp = async () => {
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert(response.data.message || "Sign-up successful!");
      navigate("/login"); // Redirect to login page
    } catch (error) {
      alert(error.response?.data?.message || "Sign-up failed.");
    }
  };

  return (
    <div className="auth-container">
      {step === 1 && (
        <form className="auth-form">
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
          <button type="button" className="auth-button" onClick={handleNext}>
            Next
          </button>
        </form>
      )}

      {step === 2 && (
        <Modal onClose={handleBack}>
          <h2 className="modal-title">
            <span className="highlight">Enter</span> Additional Details
          </h2>
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="weight"
            placeholder="Weight (kg)"
            value={formData.weight}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="height"
            placeholder="Height (cm)"
            value={formData.height}
            onChange={handleChange}
            required
          />
          <button type="button" className="auth-button" onClick={handleNext}>
            Next
          </button>
        </Modal>
      )}

      {step === 3 && (
        <Carousel
          onSelect={(bodyFat) => setFormData({ ...formData, bodyFat })}
          onFinish={handleNext}
        />
      )}

      {step === 4 && (
        <Modal onClose={handleBack}>
          <h2 className="modal-title">
            <span className="highlight">Upload</span> Your Profile Picture
          </h2>
          <input
            type="file"
            name="profilePic"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
          <button type="button" className="auth-button" onClick={handleSignUp}>
            Sign Up
          </button>
        </Modal>
      )}
    </div>
  );
};

export default SignUpPage;
