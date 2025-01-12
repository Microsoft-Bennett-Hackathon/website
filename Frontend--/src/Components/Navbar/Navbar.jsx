import React from "react";
import "./Navbar.css";

const Navbar = () => {
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