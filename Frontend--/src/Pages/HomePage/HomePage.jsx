
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../../Components/Navbar/Navbar";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="homepage">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">FitAI</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#features">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to FitAI</h1>
          <p>Your journey to fitness starts here. Personalized plans, AI-driven insights, and expert guidance.</p>
          <button className="cta-button" onClick={() => navigate("/signup")}>Sign Up</button>
          <button className="cta-button" onClick={() => navigate("/login")}>Login</button>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-image">
          <img
            src="https://images.pexels.com/photos/8436627/pexels-photo-8436627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Hero Background"
            className="hero-img"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2>Our Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <span className="feature-icon">🏃‍♂️</span>
            <h3>Personalized Plans</h3>
            <p>Workout plans tailored to your goals and fitness level.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">❤️</span>
            <h3>Calorie Tracking</h3>
            <p>Track your calories and stay on top of your nutrition.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">😊</span>
            <h3>AI Pose Correction</h3>
            <p>Receive real-time feedback to improve your form.</p>
          </div>
        </div>
      </section>
      {/* About page */}
      <section className="about" id="about">
        <h2>About FitAI</h2>
        <p>
          At FitAI, we believe in blending technology and fitness to provide you with the ultimate wellness experience. 
          Our AI-powered tools help you stay on track with your fitness journey while ensuring the best results.
        </p>
        <p>
          Whether you're a beginner or a pro, FitAI has something for everyone. Join us today and discover the difference!
        </p>
      </section>
      {/* Contact page */}
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="contact-button">Submit</button>
        </form>
      </section>
      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">FitAI</div>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#features">Features</a>
          </div>
          <p>&copy; 2025 FitAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
