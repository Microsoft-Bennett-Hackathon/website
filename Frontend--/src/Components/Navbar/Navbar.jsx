import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(null); // Track hovered element

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  // Adding mouse move event listener to track cursor position
  

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <span className="fit">FIT</span>
        <span className="ai">AI</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home" className={hoveredElement === document.querySelector('[href="#home"]') ? "hovered" : ""}>
            Home
          </a>
        </li>
        <li>
          <a href="#advantages" className={hoveredElement === document.querySelector('[href="#about"]') ? "hovered" : ""}>
            About
          </a>
        </li>
        <li>
          <a href="#features" className={hoveredElement === document.querySelector('[href="#features"]') ? "hovered" : ""}>
            features
          </a>
        </li>
        <li>
          <a href="#contact" className={hoveredElement === document.querySelector('[href="#contact"]') ? "hovered" : ""}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
