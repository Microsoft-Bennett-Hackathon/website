import React, { useEffect, useState } from "react";
import "./Userbg.css";

const Userbg = () => {
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
      <div style ={{padding:'0 70px 0 70px'}} className="logo">
        <span className="fit">FIT</span>
        <span className="ai">AI</span>
      </div>
      <ul style ={{padding:'0 70px 0 70px'}} className="nav-links">
        <li>
          <a href="/" className={hoveredElement === document.querySelector('[href="#home"]') ? "hovered" : ""}>
            Home
          </a>
        </li>
        <li>
          <a href="/dashboard" className={hoveredElement === document.querySelector('[href="#about"]') ? "hovered" : ""}>
            Dashboard
          </a>
        </li>
        <li>
          <a href="/DietplanMain" className={hoveredElement === document.querySelector('[href="#features"]') ? "hovered" : ""}>
            DietPlans
          </a>
        </li>
        <li>
          <a href="/camera" className={hoveredElement === document.querySelector('[href="#contact"]') ? "hovered" : ""}>
            Posture Correction
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Userbg;
