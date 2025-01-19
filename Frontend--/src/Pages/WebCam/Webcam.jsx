import { Link } from "react-router-dom";
import io from "socket.io-client";
import "./Webcam.css";
import React, { useEffect, useRef, useState } from "react";

const Webcam = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isWebcamOpen, setIsWebcamOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [predictionData, setPredictionData] = useState({
    frame: null,
    class: "",
    probability: 0,
    count: 0,
  });

  // const exercises = [
  //   { id: "squats", name: "squats", video: "/tuts/squats.mp4", duration: 15 },
  //   { id: "bicep", name: "bicep", video: "/tuts/bicep.mp4", duration: 20 },
  //   {
  //     id: "deadlift",
  //     name: "deadlift",
  //     video: "/tuts/deadlift.mp4",
  //     duration: 18,
  //   },
  //   {
  //     id: "pushups",
  //     name: "pushups",
  //     video: "/tuts/pushups.mp4",
  //     duration: 25,
  //   },
  //   {
  //     id: "pullups",
  //     name: "pullups",
  //     video: "/tuts/pullups.mp4",
  //     duration: 25,
  //   },
  // ];
  const exercises = [
    {
      id: "squats",
      name: "Squats",
      video: "/tuts/squats.mp4",
      duration: 15,
      instructions:
        "Stand with your feet shoulder-width apart, keep your back straight, bend your knees, and lower your hips as if sitting on a chair. Keep your chest up and knees behind your toes. Push through your heels to return to standing.",
    },
    {
      id: "bicep",
      name: "Bicep Curls",
      video: "/tuts/bicep.mp4",
      duration: 20,
      instructions:
        "Stand tall with a dumbbell in each hand, arms fully extended. Curl the weights towards your shoulders, keeping your elbows close to your body. Slowly lower the weights back to the starting position.",
    },
    {
      id: "deadlift",
      name: "Deadlifts",
      video: "/tuts/Deadlift.mp4",
      duration: 18,
      instructions:
        "Stand with your feet hip-width apart and a barbell in front of you. Bend at your hips and knees, grip the barbell, and lift the bar by extending your hips and knees. Keep your back straight throughout the movement.",
    },
    {
      id: "pushups",
      name: "Push-ups",
      video: "/tuts/pushups.mp4",
      duration: 25,
      instructions:
        "Start in a plank position with your hands placed slightly wider than shoulder-width apart. Lower your body towards the ground by bending your elbows, then push yourself back up to the starting position.",
    },
    {
      id: "pullups",
      name: "Pull-ups",
      video: "/tuts/pullups.mp4",
      duration: 25,
      instructions:
        "Grab the pull-up bar with your palms facing away from you. Hang with your arms fully extended, then pull your body upward by bending your elbows until your chin is above the bar. Lower your body back down slowly.",
    },
  ];

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (isWebcamOpen && selectedExercise) {
      fetch(`http://localhost:5003/${selectedExercise.id}`)
        .then(() => {
          const newSocket = io("http://localhost:5003");
          setSocket(newSocket);

          newSocket.on("video_frame", (data) => {
            setPredictionData({
              frame: `data:image/jpeg;base64,${data.frame}`,
              class: data.class,
              probability: data.probability,
              count: data.count,
            });
          });

          newSocket.emit("start_video", selectedExercise.id);

          return () => {
            newSocket.disconnect();
          };
        })
        .catch((err) => {
          console.error("Failed to load exercise model:", err);
          setIsWebcamOpen(false);
        });
    }
  }, [isWebcamOpen, selectedExercise]);

  const handleOpenCamera = () => {
    if (!selectedExercise) {
      alert("Please select an exercise first!");
      return;
    }
    setIsWebcamOpen(true);
  };

  const handleFullscreenToggle = () => {
    if (containerRef.current) {
      if (!isFullscreen && containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if (isFullscreen && document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  const handleExerciseSelect = (exerciseId) => {
    const exerciseObj = exercises.find((ex) => ex.id === exerciseId);
    setSelectedExercise(exerciseObj);
    setIsWebcamOpen(false); // Reset webcam state when changing exercise
  };

  return (
    <div ref={containerRef} className="webcam-container dark-theme">
      <div className="left-sidebar">
        <h3>Select Exercise</h3>
        <ul>
          {exercises.map((exercise) => (
            <li
              key={exercise.id}
              onClick={() => handleExerciseSelect(exercise.id)}
              className={`cursor-pointer ${
                selectedExercise?.id === exercise.id ? "selected" : ""
              }`}
            >
              {exercise.name}: {exercise.duration} minutes
            </li>
          ))}
        </ul>
      </div>

      {!isWebcamOpen && (
        <button
          onClick={handleOpenCamera}
          className="open-camera-btn"
          disabled={!selectedExercise}
        >
          {selectedExercise ? "Open Camera" : "Select an Exercise First"}
        </button>
      )}

      {isWebcamOpen && (
        <div className="webcam-wrapper">
          {predictionData.frame ? (
            <img
              src={predictionData.frame}
              alt="Camera feed"
              className="webcam-video"
            />
          ) : (
            <div className="loading-spinner"></div>
          )}
          <div className="prediction-info">
            <p>
              <strong>Exercise:</strong> {selectedExercise.name}
            </p>
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

      <div className="dashboard-components dashboard-right-bar bg-[#2D2D2D] h-full right-0 w-[450px] absolute border-2 border-black w-[550px]">
        <div className="right-bar-container flex flex-col px-[50px]">
          <div className="r-top flex flex-col gap-[30px] mt-[18px]">
            <h1 className="text-white font-semibold text-2xl">
              Today's Workout
            </h1>
            <div className="exercise-container flex flex-col px-[5px] shadow-sm shadow-slate-400 rounded-lg gap-[20px] mt-[5px]">
              {selectedExercise ? (
                <div
                  className="flex flex-col items-center"
                  style={{ height: "700px" }}
                >
                  <video
                    src={selectedExercise.video}
                    className="rounded-lg w-full object-cover"
                    style={{ height: "50%" }} // Increase the height of the video
                    controls
                    autoPlay
                    loop
                  />
                  <div className="flex flex-col px-[10px] my-[10px] text-center">
                    <span className="font-semibold text-white text-lg">
                      {selectedExercise.name}
                    </span>
                    <span className="font-medium text-white text-sm">
                      Duration: {selectedExercise.duration} minutes
                    </span>
                    <div className="mt-[20px] text-white">
                      <h4 className="font-semibold">Instructions:</h4>
                      <p className="text-sm">{selectedExercise.instructions}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-400 text-center">
                  Select an exercise to view the details
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webcam;
