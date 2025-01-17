
import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./HomePage.css";
import LoadingLogo from "./LoadingLogo";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import About from "../../Components/About/About"
import Footer from "../../Components/Footer/Footer";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const HomePage = () => {
  const navigate = useNavigate();
  const listRef = useRef(null);
  const handleLogin = () => {
    navigate('/login'); // Navigate to the login page
  };

  const handleSignup = () => {
    navigate('/signup'); // Navigate to the signup page
  };


  useEffect(() => {
    // Observer for feature items
    const featureObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    const featureItems = document.querySelectorAll(
      ".feature-item, .feature-image, .background-text"
    );
    featureItems.forEach((item) => featureObserver.observe(item));

    return () => {
      featureItems.forEach((item) => featureObserver.unobserve(item));
    };
  }, []);


  return (

    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Homepage Content */}
      <div className="homepage">

        {/* Hero Section */}
        {/* Hero Section */}
        <div className="hero-wrapper">
          <section className="hero">
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <h1>
                <span className="highlight">JUST</span> <span className="do-it-right">DO IT RIGHT</span>
              </h1>
              <p>
                Reach the next level with your personal AI Fitness Coach. When you reach excellence, your only goal is PERFECTION.
              </p>
              <div className="cta-buttons">
                <button
                  style={{ fontSize: "21px", display: "flex", alignItems: "center", gap: "8px" }}
                  className="cta-button"
                  onClick={() => navigate("/join")}
                >
                  GET STARTED
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="cta-svg"
                  >
                    <g
                      fill="none"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path
                        strokeDasharray="20"
                        strokeDashoffset="20"
                        d="M3 12h17.5"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.2s"
                          values="20;0"
                        />
                      </path>
                      <path
                        strokeDasharray="12"
                        strokeDashoffset="12"
                        d="M21 12l-7 7M21 12l-7-7"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.2s"
                          dur="0.2s"
                          values="12;0"
                        />
                      </path>
                    </g>
                  </svg>
                </button>

              </div>
            </div>
            <video autoPlay loop muted className="hero-video">
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          </section>
        </div>


        {/* Features Section */}
        <section className="features" id="features">
          <h2>Our Features</h2>
          <div className="feature-list" ref={listRef}>
            {/* First Feature */}
            <div className="feature-item fade-in  feature-item-first">
              <div className="feature-info-left">
                <div
                  className="background-text"
                // ref={backgroundRef1}

                >
                  Personalize
                </div>

                <h3 style={{ fontSize: "2.5rem", marginBottom: "22px" }}>
                  <span style={{ color: "red" }}>Personalized</span> Plans
                </h3>
                <p>
                  Our personalized workout plans are designed to match your specific
                  fitness goals, whether you're looking to build strength, lose weight,
                  or improve flexibility. These plans adapt to your fitness level,
                  providing gradual progressions to ensure safe and effective results.
                  Tailored recommendations help you achieve your goals faster while
                  staying motivated.
                </p>
              </div>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M3 12h17.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M21 12l-7 7M21 12l-7 -7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"/></path></g></svg> */}
              <div className="feature-card-right">
                <img
                  src="/Features/1.png"
                  alt="Personalized Plans"
                  className="feature-image"
                />
              </div>
            </div>

            {/* Second Feature */}
            <div className="feature-item fade-in feature-item-second">
              <div style={{ padding: '0 70px 0 70px' }} className="feature-card-left">
                <img
                  src="/Features/2.jpeg"
                  alt="Calorie Tracking"
                  className="feature-image"
                />
              </div>
              <div style={{ padding: '0 70px 0 70px' }} className="feature-info-right">
                <div
                  className="background-text"
                // ref={backgroundRef2}

                >
                  Calories
                </div>
                <h3 style={{ fontSize: "2.5rem", marginBottom: "22px" }}>
                  <span style={{ color: "red" }}>Calorie</span> Tracking
                </h3>
                <p>
                  Keep track of your daily calorie intake and maintain a balanced diet.
                  Our calorie tracking feature allows you to log meals, monitor
                  macronutrients, and set daily targets. By staying on top of your
                  nutrition, you can make informed choices that align with your fitness
                  goals and enhance overall well-being.
                </p>
              </div>
            </div>

            {/* Third Feature */}
            <div className="feature-item fade-in  feature-item-third">
              <div className="feature-info-left">
                <div
                  className="background-text"
                // ref={backgroundRef3}

                >
                  AIPOSE
                </div>

                <h3 style={{ fontSize: "2.5rem", marginBottom: "12px" }}>
                  <span style={{ color: "red" }}>AI Pose</span> Correction
                </h3>
                <p>
                  Get instant, AI-powered feedback on your workout form to ensure you're
                  performing exercises correctly. Our system analyzes your movements in
                  real time, providing corrective suggestions and guidance to help
                  prevent injuries and maximize the effectiveness of each exercise.
                  Whether you're a beginner or experienced, this feature helps you
                  perfect your technique and achieve better results.
                </p>
              </div>
              <div className="feature-card-right">
                <img
                  src="/Features/3.png"
                  alt="AI Pose Correction"
                  className="feature-image"
                />
              </div>
            </div>
          </div>
        </section>

        <About />

        {/* join us */}
        <section className="join-us-section" id="join">
          <h1 className="title">JOIN US</h1>
          <p className="description">
            Our app helps you achieve your fitness goals faster by combining personalized
            training plans, AI-powered feedback, and real-time progress tracking. Here's
            why our users love it!
          </p>
          <div className="button-container">
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
            <button className="signup-button" onClick={handleSignup}>
              Signup
            </button>
          </div>
        </section>


        {/* Contact Section */}
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
            <button
              type="submit"
              className="contact-button"
              style={{
                display: "block",
                margin: "0 auto",
              }}
            >
              Submit
            </button>
          </form>
        </section>


        <Footer />
      </div>


    </>
  );
};

export default HomePage;