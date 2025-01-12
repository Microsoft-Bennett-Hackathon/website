import React, { useRef, useState, useEffect } from 'react';
import './Webcam.css';

const WebCamCapture = () => {
  const videoRef = useRef(null);
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
    }

    return () => {
      if (videoRef.current) {
        const stream = videoRef.current.srcObject;
        if (stream) {
          stream.getTracks().forEach(track => track.stop());
        }
      }
    };
  }, [isWebcamOpen]); // Run effect when webcam is toggled

  const handleOpenCamera = () => {
    setIsWebcamOpen(true); // Open the webcam when button is clicked
  };

  return (
    <div className="webcam-container dark-theme">
      <button onClick={handleOpenCamera} className="open-camera-btn">
        Open Camera
      </button>
      {isWebcamOpen && (
        <video ref={videoRef} width="640" height="480" autoPlay></video>
      )}
    </div>
  );
};

export default WebCamCapture;
