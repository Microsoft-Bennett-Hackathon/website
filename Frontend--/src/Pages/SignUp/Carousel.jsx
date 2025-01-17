// import React, { useState } from "react";
// import "./Carousel.css";

// const images = [
//   { src: "/body pic/1.jpeg", label: "8%" },
//   { src: "/body pic/2.jpeg", label: "12%" },
//   { src: "/body pic/3.jpeg", label: "15%" },
//   { src: "/body pic/4.jpeg", label: "18%" },
//   { src: "/body pic/5.jpeg", label: "20%" },
//   { src: "/body pic/6.jpeg", label: "24%" },
// ];

// const Carousel = ({ onSelect, onFinish }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [selectedIndex, setSelectedIndex] = useState(null);

//   const handleChange = (e) => {
//     const index = Number(e.target.value);
//     setCurrentIndex(index);
//   };

//   const handleSelect = () => {
//     setSelectedIndex(currentIndex);
//     onSelect(images[currentIndex].label);
//   };

//   const handleSignup = () => {
//     onFinish();
//   };

//   const handleScroll = (e) => {
//     if (e.deltaY > 0 && currentIndex < images.length - 1) {
//       setCurrentIndex((prevIndex) => prevIndex + 1);
//     } else if (e.deltaY < 0 && currentIndex > 0) {
//       setCurrentIndex((prevIndex) => prevIndex - 1);
//     }
//   };

//   return (
//     <div className="carousel-container" onWheel={handleScroll}>
//       <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
//         <span style={{ color: "red" }}>SELECT</span> YOUR BODY-FAT %
//       </h1>

//       <div className="carousel-wrapper">
//         <div className="card-wrapper">
//           <div
//             className={`card ${
//               selectedIndex === currentIndex ? "selected" : ""
//             }`}
//           >
//             <img src={images[currentIndex].src} alt={`Card ${currentIndex}`} />
//             <p className="card-label">{images[currentIndex].label}</p>
//           </div>
//         </div>
//         <div className="slider-wrapper">
//           <input
//             type="range"
//             min="0"
//             max={images.length - 1}
//             value={currentIndex}
//             onChange={handleChange}
//             className="carousel-slider"
//           />
//         </div>
//       </div>
//       <button
//         className={` ${selectedIndex === currentIndex ? "selected" : ""}`}
//         onClick={handleSelect}
//       >
//         {selectedIndex === currentIndex ? "Selected" : "Select"}
//       </button>
//       <button className=" signup-button" onClick={handleSignup}>
//         Sign Up
//       </button>
//     </div>
//   );
// };

// export default Carousel;
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

  const handleChange = (e) => {
    const index = Number(e.target.value);
    setCurrentIndex(index);
  };

  const handleSelect = () => {
    setSelectedIndex(currentIndex);
    onSelect(images[currentIndex].label);
  };

  const handleSignup = () => {
    onFinish();
  };

  const handleScroll = (e) => {
    if (e.deltaY > 0 && currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="carousel-container" onWheel={handleScroll}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
        <span style={{ color: "red" }}>SELECT</span> YOUR BODY-FAT %
      </h1>

      <div className="carousel-wrapper">
        <div className="card-wrapper">
          <div
            className={`card ${
              selectedIndex === currentIndex ? "selected" : ""
            }`}
          >
            <img src={images[currentIndex].src} alt={`Card ${currentIndex}`} />
            <p className="card-label">{images[currentIndex].label}</p>
          </div>
        </div>
        <div className="slider-wrapper">
          <div className="scale-slider-container">
            <div className="scale-marks">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`scale-mark ${
                    index === currentIndex ? "active" : ""
                  }`}
                  style={{ left: `${(index / (images.length - 1)) * 100}%` }}
                >
                  <div className="mark-line"></div>
                  <span className="mark-label">{image.label}</span>
                </div>
              ))}
            </div>
            <input
              type="range"
              min="0"
              max={images.length - 1}
              value={currentIndex}
              onChange={handleChange}
              className="carousel-slider"
              step="1"
            />
          </div>
        </div>
      </div>
      <button
        className={`${selectedIndex === currentIndex ? "selected" : ""}`}
        onClick={handleSelect}
      >
        {selectedIndex === currentIndex ? "Selected" : "Select"}
      </button>
      <button className="signup-button" onClick={handleSignup}>
        Sign Up
      </button>
    </div>
  );
};

export default Carousel;
