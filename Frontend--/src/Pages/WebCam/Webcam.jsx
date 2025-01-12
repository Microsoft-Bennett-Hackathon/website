import React, { useEffect, useRef, useState } from 'react';
import './Webcam.css';

const WebCamCapture = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isWebcamOpen, setIsWebcamOpen] = useState(false); // State to toggle webcam

  // Set up the webcam and process each frame
  useEffect(() => {
    if (isWebcamOpen) {
      const setupWebcam = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        } catch (error) {
          console.error('Error accessing webcam:', error);
        }
      };

      setupWebcam();

      // Enter fullscreen mode
      if (containerRef.current && containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    }

    return () => {
      if (videoRef.current) {
        const stream = videoRef.current.srcObject;
        if (stream) {
          stream.getTracks().forEach(track => track.stop());
        }
      }

      // Exit fullscreen if open
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    };
  }, [isWebcamOpen]); // Run effect when webcam is toggled

  const handleOpenCamera = () => {
    setIsWebcamOpen(true); // Open the webcam when button is clicked
  };

  return (
    <div ref={containerRef} className="webcam-container dark-theme">
      {!isWebcamOpen && (
        <button onClick={handleOpenCamera} className="open-camera-btn">
          Open Camera
        </button>
      )}
      {isWebcamOpen && (
        <video ref={videoRef} width="100%" height="100%" autoPlay></video>
      )}
    </div>
  );
};

export default WebCamCapture;
