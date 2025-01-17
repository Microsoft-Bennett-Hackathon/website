
import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./HomePage.css";
import LoadingLogo from "./LoadingLogo";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const HomePage = () => {
  const navigate = useNavigate();
  const backgroundRef1 = useRef(null);
  const backgroundRef2 = useRef(null);
  const backgroundRef3 = useRef(null);
  const intersectionObserver1 = useRef(null);
  const intersectionObserver2 = useRef(null);
  const intersectionObserver3 = useRef(null);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const listRef = useRef(null);



  useEffect(() => {
    // Observer for advantage items
    const advantageObserver = new IntersectionObserver(
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
    advantageItems.forEach((item) => advantageObserver.observe(item));

    return () => {
      advantageItems.forEach((item) => advantageObserver.unobserve(item));
    };
  }, []);

  useEffect(() => {
    // Observer for feature items
    const featureObserver = new IntersectionObserver(
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
    featureItems.forEach((item) => featureObserver.observe(item));

    return () => {
      featureItems.forEach((item) => featureObserver.unobserve(item));
    };
  }, []);
  const createIntersectionObserver = (ref, setIsVisible) => {
    return new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          ref.current.style.transform = "translateY(-50%) translateX(0)";
          ref.current.style.opacity = 1;
          setIsVisible(true);
        } else {
          ref.current.style.transform = "translateY(-50%) translateX(-150%)";
          ref.current.style.opacity = 0;
          setIsVisible(false);
        }
      });
    }, { threshold: 0.1 });
  };

  // Function to start the observers when refs are ready
  const startObservers = () => {
    if (backgroundRef1.current) {
      intersectionObserver1.current = createIntersectionObserver(backgroundRef1, setIsVisible1);
      intersectionObserver1.current.observe(backgroundRef1.current);
    }

    if (backgroundRef2.current) {
      intersectionObserver2.current = createIntersectionObserver(backgroundRef2, setIsVisible2);
      intersectionObserver2.current.observe(backgroundRef2.current);
    }

    if (backgroundRef3.current) {
      intersectionObserver3.current = createIntersectionObserver(backgroundRef3, setIsVisible3);
      intersectionObserver3.current.observe(backgroundRef3.current);
    }
  };

  // Ensure observers are set up once component is mounted
  useEffect(() => {
    // Delay observer setup to ensure refs are ready and component is fully rendered
    const timeoutId = setTimeout(() => {
      requestAnimationFrame(startObservers);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      // Cleanup observers
      if (intersectionObserver1.current && backgroundRef1.current) {
        intersectionObserver1.current.unobserve(backgroundRef1.current);
      }
      if (intersectionObserver2.current && backgroundRef2.current) {
        intersectionObserver2.current.unobserve(backgroundRef2.current);
      }
      if (intersectionObserver3.current && backgroundRef3.current) {
        intersectionObserver3.current.unobserve(backgroundRef3.current);
      }
    };
  }, []);
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (listRef.current) {
        listRef.current.scrollLeft += 2; // Adjust the scroll speed here
        if (
          listRef.current.scrollLeft >=
          listRef.current.scrollWidth - listRef.current.clientWidth
        ) {
          listRef.current.scrollLeft = 0; // Reset to the beginning
        }
      }
    }, 20); // Adjust the interval here (lower = smoother scroll)

    return () => clearInterval(scrollInterval); // Cleanup on component unmount
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
                  style={{ fontSize: "21px" }}
                  className="cta-button"
                  onClick={() => navigate("/signup")}
                >
                       GET STARTED
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
          <div  className="feature-list">
            {/* First Feature */}
            <div className="feature-item fade-in  feature-item-first">
              <div className="feature-info-left">
                <div
                  className="background-text"
                  ref={backgroundRef1}

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
              <div style ={{padding:'0 70px 0 70px'}} className="feature-card-left">
                <img
                  src="/Features/2.jpeg"
                  alt="Calorie Tracking"
                  className="feature-image"
                />
              </div>
              <div style ={{padding:'0 70px 0 70px'}} className="feature-info-right">
                <div
                  className="background-text"
                  ref={backgroundRef2}

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
                  ref={backgroundRef3}

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

        <section className="advantages" id="advantages">
      <h2 className="advantages-heading">Why Choose Our App?</h2>
      <div className="advantages-list" ref={listRef}>
        <div className="advantage-item">
          <div className="advantage-info-left">
            <p>
              Achieve your fitness goals faster with personalized training
              plans, AI feedback, and real-time tracking.
            </p>
          </div>
          <div className="advantage-card-right">
            <span className="advantage-icon">⚡</span>
            <h3 className="h3">Faster Results</h3>
          </div>
        </div>

        <div className="advantage-item">
          <div className="advantage-info-left">
            <p>
              Continuous motivation with insights to adjust your workouts and
              diet for optimal performance.
            </p>
          </div>
          <div className="advantage-card-right">
            <span className="advantage-icon">📊</span>
            <h3 className="h3">Data-Driven Insights</h3>
          </div>
        </div>

        <div className="advantage-item">
          <div className="advantage-info-left">
            <p>
              Visualize your progress with interactive and easy-to-understand
              graphs.
            </p>
          </div>
          <div className="advantage-card-right">
            <span className="advantage-icon">📈</span>
            <h3 className="h3">Graphical Insights</h3>
          </div>
        </div>

        <div className="advantage-item">
          <div className="advantage-info-left">
            <p>
              Seamless integration with your favorite fitness devices and
              applications.
            </p>
          </div>
          <div className="advantage-card-right">
            <span className="advantage-icon">📱</span>
            <h3 className="h3">Device Integration</h3>
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