import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import "./Webcam.css";

const WebCamCapture = () => {
  const videoRef = useRef(null); // Keep this for possible future extensions
  const containerRef = useRef(null);
  const [isWebcamOpen, setIsWebcamOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [predictionData, setPredictionData] = useState({
    frame: null,
    class: "",
    probability: 0,
    count: 0,
  });

  const [socket, setSocket] = useState(null);

  // Set up WebSocket connection
  useEffect(() => {
    if (isWebcamOpen) {
      const newSocket = io("http://localhost:5001"); // Connect to Flask server
      setSocket(newSocket);

      newSocket.on("video_frame", (data) => {
        setPredictionData({
          frame: `data:image/jpeg;base64,${data.frame}`,
          class: data.class,
          probability: data.probability,
          count: data.count,
        });
      });

      // Request to start video processing
      newSocket.emit("start_video");

      return () => {
        newSocket.disconnect();
      };
    }
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

      {/* Webcam and Prediction Data */}
      {isWebcamOpen && (
        <div className="webcam-wrapper">
          {/* Display the frame received from Flask */}
          {predictionData.frame ? (
            <img
              src={predictionData.frame}
              alt="Camera feed"
              className="webcam-video"
            />
          ) : (
            <p>Loading webcam feed...</p>
          )}
          <div className="prediction-info">
            <p>
              <strong>Pose:</strong> {predictionData.class}
            </p>
            <p>
              <strong>Probability:</strong> {predictionData.probability}
            </p>
            <p>
              <strong>Count:</strong> {predictionData.count}
            </p>
          </div>
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
