import React from "react";
import "./HomePage.css";

const HomePage = () => {
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
                    <button className="cta-button">Get Started</button>
                </div>
                <div className="hero-image">
                    <img
                        // src="https://images.pexels.com/photos/3822727/pexels-photo-3822727.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Hero Background"
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
        </div>
    );
};

export default HomePage;
