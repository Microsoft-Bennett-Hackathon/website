import React, { useEffect, useRef, useState } from "react";
import "./Webcam.css";

const WebCamCapture = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isWebcamOpen, setIsWebcamOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Set up the webcam and process each frame
  useEffect(() => {
    if (isWebcamOpen) {
      const setupWebcam = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        } catch (error) {
          console.error("Error accessing webcam:", error);
        }
      };

      setupWebcam();
    }

    return () => {
      if (videoRef.current) {
        const stream = videoRef.current.srcObject;
        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
        }
      }
    };
  }, [isWebcamOpen]);

  const handleOpenCamera = () => {
    setIsWebcamOpen(true);
  };

  const handleFullscreenToggle = () => {
    if (containerRef.current) {
      if (!isFullscreen) {
        containerRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  return (
    <div ref={containerRef} className="webcam-container dark-theme">
      {/* Left Sidebar: Today's Exercise */}
      <div className="left-sidebar">
        <h3>Today's Exercise</h3>
        <ul>
          <li>Push-ups: 3 sets of 15</li>
          <li>Squats: 3 sets of 20</li>
          <li>Plank: 3 sets of 1 min</li>
          <li>Jumping Jacks: 3 sets of 30</li>
          <li>Burpees: 3 sets of 10</li>
        </ul>
      </div>

      {/* Open Camera Button */}
      {!isWebcamOpen && (
        <button onClick={handleOpenCamera} className="open-camera-btn">
          Open Camera
        </button>
      )}

      {/* Webcam */}
      {isWebcamOpen && (
        <div className="webcam-wrapper">
          <video ref={videoRef} className="webcam-video" autoPlay></video>
          <button onClick={handleFullscreenToggle} className="fullscreen-btn">
            {isFullscreen ? "Exit Fullscreen" : "Go Fullscreen"}
          </button>
        </div>
      )}

      {/* Right Sidebar: Floating Content */}
      <div className="floating-sidebar">
        <div className="scrolling-content">
          <h3>Pose Correction Tips</h3>
          <p>1. Align your shoulders.</p>
          <p>2. Keep your back straight.</p>
          <p>3. Ensure proper knee placement.</p>
          <p>4. Balance your weight evenly.</p>
          <p>5. Practice consistency.</p>
        </div>
      </div>
    </div>
  );
};

export default WebCamCapture;
