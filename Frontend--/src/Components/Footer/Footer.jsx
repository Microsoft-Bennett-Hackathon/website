import React from "react";
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-background-text">IGNITE YOUR INNER STRENGTH</div>
      <div className="footer-content">
        <h1 className="footer-logo">FIT AI</h1>
        <nav className="footer-nav">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className="footer-copyright">© 2025 FitAI. All rights reserved.</p>
        <div className="footer-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/Footer/Insta.svg" alt="Instagram" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/Footer/Linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
            <img src="/Footer/Gmail.svg" alt="Mail" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
