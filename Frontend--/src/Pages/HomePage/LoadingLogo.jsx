import React, { useState, useEffect } from "react";
import "./LoadingLogo.css"; // Define styles for the loading logo here.

const LoadingLogo = () => {
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    // Set timeout to change loading state after 4 seconds
    setTimeout(() => {
      setLoading(false); // Set loading to false after 4 seconds
    }, 4000); // 4000ms = 4 seconds
  }, []); // Empty dependency array to run the effect only once

  if (!loading) {
    return null; // Hide the loading logo once loading is complete
  }

  return (
    <div className="loading-overlay">
      <div className="loading-logo">
        {/* You can replace the text with your logo */}
        <span>FitAI❣️❣️</span>
        <div className="spinner"></div> {/* Loading spinner */}
      </div>
    </div>
  );
};

export default LoadingLogo;
