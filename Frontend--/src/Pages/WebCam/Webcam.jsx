
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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
      <div className="dashboard-components dashboard-left-bar bg-[#2D2D2D] h-full left-0 w-[80px] border-2 border-black absolute">
        <div className="left-bar-links flex flex-col gap-[30px] mt-[100px] justify-center items-center">
          <Link to="/">
            <img src="/dumble logo.png" alt="" className="w-[50px]" />
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="2"
            >
              <path
                strokeLinejoin="round"
                d="m21 6l-5.293 5.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 0-1.414 0L7 14"
              />
              <path d="M3 3v14.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 21 5.08 21 6.2 21H21" />
            </g>
          </svg>
          <Link to="/camera">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M20 4h-3.17L15 2H9L7.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 14H4V6h4.05l1.83-2h4.24l1.83 2H20zM12 7a5 5 0 0 0-5 5a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 8a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3a3 3 0 0 1-3 3"
              />
            </svg>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"
            />
          </svg>
        </div>
      </div>

      {/* Right Sidebar: Workout and Diet */}
      <div className="dashboard-components dashboard-right-bar bg-[#2D2D2D] h-full right-0 w-[450px] absolute border-2 border-black">
        <div className="right-bar-container flex flex-col px-[50px]">
          <div className="r-top flex flex-col gap-[30px] mt-[18px]">
            <h1 className="text-white font-semibold text-2xl">Today's Workout</h1>
            <div className="flex flex-col px-[5px] shadow-sm shadow-slate-400 rounded-lg gap-[20px] mt-[5px]">
              <img src="/workout img.png" alt="" />
              <div className="flex flex-col px-[10px] my-[10px]">
                <span className="font-semibold text-white">Shoulder exercise</span>
                <span className="font-medium text-white">Week 1</span>
              </div>
            </div>
          </div>
          <div className="r-bottom mt-[25px]">
            <h1 className="text-white font-semibold text-2xl">Today's Diet</h1>
            <div className="diet-details-container flex flex-col gap-[20px] mt-[15px]">
              <div className="w-full rounded-[20px] h-[60px] p-[10px] text-white flex flex-row items-center gap-[20px] px-3 hover:bg-[#404040] hover:scale-105 hover:shadow-sm hover:shadow-[#ff0000] transition-all duration-300 ease-in-out">
                <img
                  src="breakfast.jpg"
                  className="w-[45px] h-[45px] rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-white">Breakfast</span>
                  <div className="flex flex-row gap-[15px]">
                    <span className="text-sm font-normal text-white">
                      Calories: 1000 cal
                    </span>
                    <span className="text-sm font-normal text-white">
                      Protein: 20g
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-[20px] h-[60px] p-[10px] text-white flex flex-row items-center gap-[20px] px-3 hover:bg-[#404040] hover:scale-105 hover:shadow-sm hover:shadow-[#ff0000] transition-all duration-300 ease-in-out">
                <img
                  src="lunch.jpg"
                  className="w-[45px] h-[45px] rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-white">Lunch</span>
                  <div className="flex flex-row gap-[15px]">
                    <span className="text-sm font-normal text-white">
                      Calories: 1000 cal
                    </span>
                    <span className="text-sm font-normal text-white">
                      Protein: 40g
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-[20px] h-[60px] p-[10px] text-white flex flex-row items-center gap-[20px] px-3 hover:bg-[#404040] hover:scale-105 hover:shadow-sm hover:shadow-[#ff0000] transition-all duration-300 ease-in-out">
                <img
                  src="dinner.jpg"
                  className="w-[45px] h-[45px] rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-white">Dinner</span>
                  <div className="flex flex-row gap-[15px]">
                    <span className="text-sm font-normal text-white">
                      Calories: 1000 cal
                    </span>
                    <span className="text-sm font-normal text-white">
                      Protein: 60g
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebCamCapture;
