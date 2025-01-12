import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="logo">
                <span className="dumbbell-icon">🏋️</span>
                FitAI
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
