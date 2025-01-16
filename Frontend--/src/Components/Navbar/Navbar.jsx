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

  // Handle mouse movement near anchor elements
  const handleMouseMove = (e) => {
    const anchors = document.querySelectorAll(".nav-links a");
    anchors.forEach((anchor) => {
      const boundingBox = anchor.getBoundingClientRect();
      const buffer = 10; // Distance threshold around the anchor element
      if (
        e.clientX >= boundingBox.left - buffer &&
        e.clientX <= boundingBox.right + buffer &&
        e.clientY >= boundingBox.top - buffer &&
        e.clientY <= boundingBox.bottom + buffer
      ) {
        setHoveredElement(anchor);
      } else {
        if (hoveredElement === anchor) {
          setHoveredElement(null);
        }
      }
    });
  };

  // Adding mouse move event listener to track cursor position
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hoveredElement]);

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
          <a href="#about" className={hoveredElement === document.querySelector('[href="#about"]') ? "hovered" : ""}>
            About
          </a>
        </li>
        <li>
          <a href="#services" className={hoveredElement === document.querySelector('[href="#services"]') ? "hovered" : ""}>
            Services
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
