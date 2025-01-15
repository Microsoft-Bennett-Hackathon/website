import React, { useState } from "react";
import "./Carousel.css";

const images = [
  { src: "/body pic/1.jpeg", label: "8%" },
  { src: "/body pic/2.jpeg", label: "12%" },
  { src: "/body pic/3.jpeg", label: "15%" },
  { src: "/body pic/4.jpeg", label: "18%" },
  { src: "/body pic/5.jpeg", label: "20%" },
  { src: "/body pic/6.jpeg", label: "24%" },
];

const Carousel = ({ onSelect, onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleSelect = () => {
    setSelectedIndex(currentIndex);
    onSelect(images[currentIndex].label);
  };

  const handleContinue = () => {
    onFinish();
  };

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  return (
    <div className="carousel-container" onWheel={handleScroll}>
      <div className="carousel-wrapper">
        <div className="card-wrapper">
          <div
            className={`card ${selectedIndex === currentIndex ? "selected" : ""}`}
          >
            <img src={images[currentIndex].src} alt={`Card ${currentIndex}`} />
            <p className="card-label">{images[currentIndex].label}</p>
          </div>
        </div>
        <div className="navigation-wrapper">
          <button className="navigation-button left" onClick={handlePrev}>
            {"<"}
          </button>
          <button className="navigation-button right" onClick={handleNext}>
            {">"}
          </button>
        </div>
      </div>
      <button
        className={`auth-button ${selectedIndex === currentIndex ? "selected" : ""}`}
        onClick={handleSelect}
      >
        {selectedIndex === currentIndex ? "Selected" : "Select"}
      </button>
      <button className="auth-button continue-button" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

export default Carousel;
