
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./HomePage.css";
import LoadingLogo from "./LoadingLogo";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show"); // Remove class when out of view
          }
        });
      },
      { threshold: 0.2 } // Trigger animation when 20% of the item is visible
    );
  
    const advantageItems = document.querySelectorAll(".advantage-item");
    advantageItems.forEach((item) => observer.observe(item));
  
    return () => {
      advantageItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show"); // Remove class when out of view
          }
        });
      },
      { threshold: 0.2 } // Trigger animation when 20% of the card is visible
    );

    const featureItems = document.querySelectorAll(".feature-item");
    featureItems.forEach((item) => observer.observe(item));

    return () => {
      featureItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  
  return (
    <>
      {/* Navbar Component */}
     
      <Navbar />

      {/* Homepage Content */}
      <div className="homepage">

        {/* Hero Section */}
        <section className="hero">

          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>JUST DO IT RIGHT</h1>
            <p>
              Reach the next level with your personal AI Fitness Coach. When
              you reach excellence, your only goal is PERFECTION.
            </p>
            <div className="cta-buttons">
              <button   style={{ fontSize: "21px" }} 
 className="cta-button" onClick={() => navigate("/signup")}>
               GET STARTED
              </button>
              <button  style={{ fontSize: "21px" }}  className="cta-button" onClick={() => navigate("/login")}>
              LOGIN 💪
              </button>
             
            </div>
          </div>
          <video autoPlay loop muted className="hero-video">
            <source src="/kk.mp4" type="video/mp4" />
          </video>
        </section>

        {/* Features Section */}
        <section className="features" id="features">
          <h2>Our Features</h2>
          <div className="feature-list">
            <div className="feature-item fade-in">
              <div className="feature-card-left">
                <span className="feature-icon">🏃‍♂️</span>
                <h3 className="h3">Personalized Plans</h3>
              </div>
              <div className="feature-info-right">
                <p>Our personalized workout plans are designed to match your specific fitness goals, whether you're looking to build strength, lose weight, or improve flexibility. These plans adapt to your fitness level, providing gradual progressions to ensure safe and effective results. Tailored recommendations help you achieve your goals faster while staying motivated.</p>
              </div>

            </div>

            <div className="feature-item fade-in">
              <div className="feature-info-left">
                <p>Keep track of your daily calorie intake and maintain a balanced diet. Our calorie tracking feature allows you to log meals, monitor macronutrients, and set daily targets. By staying on top of your nutrition, you can make informed choices that align with your fitness goals and enhance overall well-being.</p>
              </div>
              <div className="feature-card-right">
                <span className="feature-icon">❤️</span>
                <h3 className="h3">Calorie Tracking</h3>
              </div>
            </div>

            <div className="feature-item fade-in">
              <div className="feature-card-left">
                <span className="feature-icon">😊</span>
                <h3 className="h3">AI Pose Correction</h3>
              </div>
              <div className="feature-info-right">
                <p>Get instant, AI-powered feedback on your workout form to ensure you're performing exercises correctly. Our system analyzes your movements in real time, providing corrective suggestions and guidance to help prevent injuries and maximize the effectiveness of each exercise. Whether you're a beginner or experienced, this feature helps you perfect your technique and achieve better results.</p>

              </div>
            </div>
          </div>
        </section>
        <section className="advantages" id="advantages">
          <h2 className="advantages-heading">Why Choose Our App?</h2>
          <div className="advantages-list">
            <div className="advantage-item fade-in">
              <div className="advantage-info-left">
                <p>Our app helps you achieve your fitness goals faster by combining personalized training plans, AI-powered feedback, and real-time progress tracking. Here’s why our users love it!</p>
              </div>
              <div className="advantage-card-right">
                <span className="advantage-icon">⚡</span>
                <h3 className="h3">Faster Results</h3>
              </div>
            </div>

            <div className="advantage-item fade-in">
              <div className="advantage-info-left">
                <p>Our users experience continuous motivation and improved results. With easy-to-understand data insights, you can adjust your workouts and diet for optimal performance.</p>
              </div>
              <div className="advantage-card-right">
                <span className="advantage-icon">📊</span>
                <h3 className="h3">Data-Driven Insights</h3>
              </div>
            </div>

            <div className="advantage-item fade-in">
              <div className="advantage-info-left">
              </div>
              <div className="advantage-card-right">
                <span className="advantage-icon">📈</span>
                <h3 className="h3">Graphical Insights</h3>
              </div>
            </div>
          </div>
        </section>



        {/* Contact Section */}
        <section className="contact" id="contact">
          <h2 className="contact-heading">Contact Us</h2>

          <div className="contact-content">
            {/* Contact Form */}
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
              <button type="submit" className="contact-button">
                Submit
              </button>
            </form>

            {/* Additional Section with Animations */}
            <div className="contact-info">
              <p className="contact-text fade-in">We would love to hear from you! Drop your queries or suggestions.</p>
              <div className="social-icons fade-in">
                <img src="/Website/Frontend--/public/contact -section/1.png" alt="facebook" className="social-icon" />
                <img src="/Website/Frontend--/public/contact -section/2.png" alt="twitter" className="social-icon" />
                <img src="/Website/Frontend--/public/contact -section/3.png" alt="instagram" className="social-icon" />
              </div>
            </div>
          </div>
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


    </>
  );
};

export default HomePage;
