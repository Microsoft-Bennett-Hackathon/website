import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Large faint background text */}
      <div className="footer-background-text">
        IGNITE YOUR
        <br />
        INNER STRENGTH
      </div>

      <div className="footer-content">
        {/* Main heading at the top-left */}
        <h1 className="footer-ignite">
          IGNITE YOUR <br />
          INNER STRENGTH
        </h1>

        {/* Bottom row: left (Fit AI), center (nav), right (icons) */}
        <div className="footer-bottom">
          <div className="footer-left">
            <h1 className="footer-fitai">FIT AI</h1>

          </div>

          <div className="footer-center">
            <nav className="footer-nav">
              <a href="#features">Features</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
            <br />
            <p className="footer-copyright" style={{fontSize:"1.2rem" }}>© 2025 FitAI. All rights reserved.</p>
          </div>

          <div className="footer-right">
            <div className="footer-icons">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/Footer/Insta.svg" alt="Instagram" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/Footer/Linkedin.svg" alt="LinkedIn" />
              </a>
              <a
                href="https://mail.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/Footer/Gmail.svg" alt="Mail" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
