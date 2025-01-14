import React from "react";
import "./LoadingLogo.css"; // We'll define the styles for the loading logo here.

const LoadingLogo = () => {
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
