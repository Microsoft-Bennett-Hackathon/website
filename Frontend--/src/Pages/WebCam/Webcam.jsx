
// // import React, { useEffect, useRef, useState } from "react";
// // import { Link } from "react-router-dom";
// // import io from "socket.io-client";
// // import "./Webcam.css";

// // const Webcam = () => {
// //   const videoRef = useRef(null); // Keep this for possible future extensions
// //   const containerRef = useRef(null);
// //   const [isWebcamOpen, setIsWebcamOpen] = useState(false);
// //   const [isFullscreen, setIsFullscreen] = useState(false);
// //   const [predictionData, setPredictionData] = useState({
// //     frame: null,
// //     class: "",
// //     probability: 0,
// //     count: 0,
// //   });

// //   const [socket, setSocket] = useState(null);

// //   // Set up WebSocket connection
// //   useEffect(() => {
// //     if (isWebcamOpen) {
// //       const newSocket = io("http://localhost:5003"); // Connect to Flask server
// //       setSocket(newSocket);

// //       newSocket.on("video_frame", (data) => {
// //         setPredictionData({
// //           frame: `data:image/jpeg;base64,${data.frame}`,
// //           class: data.class,
// //           probability: data.probability,
// //           count: data.count,
// //         });
// //       });

// //       // Request to start video processing
// //       newSocket.emit("start_video");

// //       return () => {
// //         newSocket.disconnect();
// //       };
// //     }
// //   }, [isWebcamOpen]);

// //   const handleOpenCamera = () => {
// //     setIsWebcamOpen(true);
// //   };

// //   const handleFullscreenToggle = () => {
// //     if (containerRef.current) {
// //       if (!isFullscreen) {
// //         containerRef.current.requestFullscreen();
// //       } else {
// //         document.exitFullscreen();
// //       }
// //       setIsFullscreen(!isFullscreen);
// //     }
// //   };

// //   return (
// //     <div ref={containerRef} className="webcam-container dark-theme">
// //       {/* Left Sidebar: Today's Exercise */}
// //       <div className="left-sidebar">
// //         <h3>Today's Exercise</h3>
// //         <ul>
// //           <li>Push-ups: 3 sets of 15</li>
// //           <li>Squats: 3 sets of 20</li>
// //           <li>Plank: 3 sets of 1 min</li>
// //           <li>Jumping Jacks: 3 sets of 30</li>
// //           <li>Burpees: 3 sets of 10</li>
// //         </ul>
// //       </div>

// //       {/* Open Camera Button */}
// //       {!isWebcamOpen && (
// //         <button onClick={handleOpenCamera} className="open-camera-btn">
// //           Open Camera
// //         </button>
// //       )}

// //       {/* Webcam and Prediction Data */}
// //       {isWebcamOpen && (
// //         <div className="webcam-wrapper">
// //           {/* Display the frame received from Flask */}
// //           {predictionData.frame ? (
// //             <img
// //               src={predictionData.frame}
// //               alt="Camera feed"
// //               className="webcam-video"
// //             />
// //           ) : (
// //             <p>Loading webcam feed...</p>
// //           )}
// //           <div className="prediction-info">
// //             <p>
// //               <strong>Pose:</strong> {predictionData.class}
// //             </p>
// //             <p>
// //               <strong>Probability:</strong> {predictionData.probability}
// //             </p>
// //             <p>
// //               <strong>Count:</strong> {predictionData.count}
// //             </p>
// //           </div>
// //           <button onClick={handleFullscreenToggle} className="fullscreen-btn">
// //             {isFullscreen ? "Exit Fullscreen" : "Go Fullscreen"}
// //           </button>
// //         </div>
// //       )}



// //       {/* Right Sidebar: Workout and Diet */}
// //       <div className="dashboard-components dashboard-right-bar bg-[#2D2D2D] h-full right-0 w-[450px] absolute border-2 border-black">
// //         <div className="right-bar-container flex flex-col px-[50px]">
// //           <div className="r-top flex flex-col gap-[30px] mt-[18px]">
// //             <h1 className="text-white font-semibold text-2xl">Today's Workout</h1>
// //             <div className="flex flex-col px-[5px] shadow-sm shadow-slate-400 rounded-lg gap-[20px] mt-[5px]">
// //               <img src="/workout img.png" alt="" />
// //               <div className="flex flex-col px-[10px] my-[10px]">
// //                 <span className="font-semibold text-white">Shoulder exercise</span>
// //                 <span className="font-medium text-white">Week 1</span>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="r-bottom mt-[25px]">
// //             <h1 className="text-white font-semibold text-2xl">Today's Diet</h1>
// //             <div className="diet-details-container flex flex-col gap-[20px] mt-[15px]">
// //               <div className="w-full rounded-[20px] h-[60px] p-[10px] text-white flex flex-row items-center gap-[20px] px-3 hover:bg-[#404040] hover:scale-105 hover:shadow-sm hover:shadow-[#ff0000] transition-all duration-300 ease-in-out">
// //                 <img
// //                   src="breakfast.jpg"
// //                   className="w-[45px] h-[45px] rounded-full object-cover"
// //                 />
// //                 <div className="flex flex-col">
// //                   <span className="font-semibold text-white">Breakfast</span>
// //                   <div className="flex flex-row gap-[15px]">
// //                     <span className="text-sm font-normal text-white">
// //                       Calories: 1000 cal
// //                     </span>
// //                     <span className="text-sm font-normal text-white">
// //                       Protein: 20g
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="w-full rounded-[20px] h-[60px] p-[10px] text-white flex flex-row items-center gap-[20px] px-3 hover:bg-[#404040] hover:scale-105 hover:shadow-sm hover:shadow-[#ff0000] transition-all duration-300 ease-in-out">
// //                 <img
// //                   src="lunch.jpg"
// //                   className="w-[45px] h-[45px] rounded-full object-cover"
// //                 />
// //                 <div className="flex flex-col">
// //                   <span className="font-semibold text-white">Lunch</span>
// //                   <div className="flex flex-row gap-[15px]">
// //                     <span className="text-sm font-normal text-white">
// //                       Calories: 1000 cal
// //                     </span>
// //                     <span className="text-sm font-normal text-white">
// //                       Protein: 40g
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="w-full rounded-[20px] h-[60px] p-[10px] text-white flex flex-row items-center gap-[20px] px-3 hover:bg-[#404040] hover:scale-105 hover:shadow-sm hover:shadow-[#ff0000] transition-all duration-300 ease-in-out">
// //                 <img
// //                   src="dinner.jpg"
// //                   className="w-[45px] h-[45px] rounded-full object-cover"
// //                 />
// //                 <div className="flex flex-col">
// //                   <span className="font-semibold text-white">Dinner</span>
// //                   <div className="flex flex-row gap-[15px]">
// //                     <span className="text-sm font-normal text-white">
// //                       Calories: 1000 cal
// //                     </span>
// //                     <span className="text-sm font-normal text-white">
// //                       Protein: 60g
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Webcam;
// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import io from "socket.io-client";
// import "./Webcam.css";

// const Webcam = () => {
//   const videoRef = useRef(null);
//   const containerRef = useRef(null);
//   const [isWebcamOpen, setIsWebcamOpen] = useState(false);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [selectedExercise, setSelectedExercise] = useState('');
//   const [predictionData, setPredictionData] = useState({
//     frame: null,
//     class: "",
//     probability: 0,
//     count: 0,
//   });
//   const exercise = [
//     {
//       name: "Shoulder Exercise",
//       video: "/shoulder_exercise.mp4",
//       duration: 15,
//     },
//     {
//       name: "Leg Exercise",
//       video: "/leg_exercise.mp4",
//       duration: 20,
//     },
//     {
//       name: "Arm Exercise",
//       video: "/arm_exercise.mp4",
//       duration: 12,
//     },
//     {
//       name: "Back Exercise",
//       video: "/back_exercise.mp4",
//       duration: 18,
//     },
//     {
//       name: "Cardio",
//       video: "/cardio.mp4",
//       duration: 25,
//     },
//   ];

//   const [socket, setSocket] = useState(null);

//   const exercises = [
//     { id: 'squats', name: 'Squats', sets: '3 sets of 20' },
//     { id: 'bicep', name: 'Bicep Curls', sets: '3 sets of 15' },
//     { id: 'pushups', name: 'Push-ups', sets: '3 sets of 15' },
//     { id: 'pullups', name: 'Pull-ups', sets: '3 sets of 12' },
//     { id: 'deadlift', name: 'Deadlift', sets: '3 sets of 10' }
//   ];

//   useEffect(() => {
//     if (isWebcamOpen && selectedExercise) {
//       // First fetch the selected exercise model
//       fetch(`http://localhost:5003/${selectedExercise}`)
//         .then(() => {
//           // After model is loaded, set up WebSocket
//           const newSocket = io("http://localhost:5003");
//           setSocket(newSocket);

//           newSocket.on("video_frame", (data) => {
//             setPredictionData({
//               frame: `data:image/jpeg;base64,${data.frame}`,
//               class: data.class,
//               probability: data.probability,
//               count: data.count,
//             });
//           });

//           // Start video processing with selected exercise
//           newSocket.emit("start_video", selectedExercise);

//           return () => {
//             newSocket.disconnect();
//           };
//         })
//         .catch(err => {
//           console.error("Failed to load exercise model:", err);
//           setIsWebcamOpen(false);
//         });
//     }
//   }, [isWebcamOpen, selectedExercise]);

//   const handleOpenCamera = () => {
//     if (!selectedExercise) {
//       alert("Please select an exercise first!");
//       return;
//     }
//     setIsWebcamOpen(true);
//   };

//   const handleFullscreenToggle = () => {
//     if (containerRef.current) {
//       if (!isFullscreen) {
//         containerRef.current.requestFullscreen();
//       } else {
//         document.exitFullscreen();
//       }
//       setIsFullscreen(!isFullscreen);
//     }
//   };

//   const handleExerciseSelect = (exerciseId) => {
//     setSelectedExercise(exerciseId);
//     setIsWebcamOpen(false); // Reset webcam state when changing exercise
//   };

//   return (
//     <div ref={containerRef} className="webcam-container dark-theme">
//       {/* Left Sidebar: Exercise Selection */}
//       <div className="left-sidebar">
//         <h3>Select Exercise</h3>
//         <ul>
//           {exercises.map((exercise) => (
//             <li
//               key={exercise.id}
//               onClick={() => handleExerciseSelect(exercise.id)}
//               className={`cursor-pointer ${selectedExercise === exercise.id ? 'selected' : ''}`}
//             >
//               {exercise.name}: {exercise.sets}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Open Camera Button */}
//       {!isWebcamOpen && (
//         <button
//           onClick={handleOpenCamera}
//           className="open-camera-btn"
//           disabled={!selectedExercise}
//         >
//           {selectedExercise ? 'Open Camera' : 'Select an Exercise First'}
//         </button>
//       )}

//       {/* Webcam and Prediction Data */}
//       {isWebcamOpen && (
//         <div className="webcam-wrapper">
//           {predictionData.frame ? (
//             <img
//               src={predictionData.frame}
//               alt="Camera feed"
//               className="webcam-video"
//             />
//           ) : (
//             <div className="loading-spinner"></div>
//           )}
//           <div className="prediction-info">
//             <p>
//               <strong>Exercise:</strong> {selectedExercise}
//             </p>
//             <p>
//               <strong>Pose:</strong> {predictionData.class}
//             </p>
//             <p>
//               <strong>Probability:</strong> {predictionData.probability}
//             </p>
//             <p>
//               <strong>Count:</strong> {predictionData.count}
//             </p>
//           </div>
//           <button onClick={handleFullscreenToggle} className="fullscreen-btn">
//             {isFullscreen ? "Exit Fullscreen" : "Go Fullscreen"}
//           </button>
//         </div>
//       )}

//       <div className="dashboard-components dashboard-right-bar bg-[#2D2D2D] h-full right-0 w-[600px] absolute border-2 border-black">
//         <div className="right-bar-container flex flex-col px-[50px]">
//           <div className="r-top flex flex-col gap-[30px] mt-[18px]">
//             <h1 className="text-white font-semibold text-2xl">
//               Today's Workout
//             </h1>
//             <div className="exercise-container flex flex-col px-[5px] shadow-sm shadow-slate-400 rounded-lg gap-[20px] mt-[5px]">
//               {selectedExercise ? (
//                 <div className="flex flex-col items-center">
//                   <video
//                     src={selectedExercise.video}
//                     className="rounded-lg w-full object-cover"
//                     controls
//                     autoPlay
//                     loop
//                   />
//                   <div className="flex flex-col px-[10px] my-[10px] text-center">
//                     <span className="font-semibold text-white text-lg">
//                       {selectedExercise.name}
//                     </span>
//                     <span className="font-medium text-white text-sm">
//                       Duration: {selectedExercise.duration} minutes
//                     </span>
//                   </div>
//                 </div>
//               ) : (
//                 <p className="text-gray-400 text-center">Select an exercise to view the details</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Webcam;import React, { useEffect, useRef, useState } from "react";
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

  const exercises = [
    { id: "squats", name: "squats", video: "/squats.mp4", duration: 15 },
    { id: "bicep", name: "bicep", video: "/biceps.mp4", duration: 20 },
    { id: "deadlift", name: "deadlift", video: "/back_exercise.mp4", duration: 18 },
    { id: "pushups", name: "pushups", video: "/cardio.mp4", duration: 25 },
    { id: "pullups", name: "pullups", video: "/cardio.mp4", duration: 25 },
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
              className={`cursor-pointer ${selectedExercise?.id === exercise.id ? "selected" : ""}`}
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
            <img src={predictionData.frame} alt="Camera feed" className="webcam-video" />
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

      <div className="dashboard-components dashboard-right-bar bg-[#2D2D2D] h-full right-0 w-[450px] absolute border-2 border-black">
        <div className="right-bar-container flex flex-col px-[50px]">
          <div className="r-top flex flex-col gap-[30px] mt-[18px]">
            <h1 className="text-white font-semibold text-2xl">Today's Workout</h1>
            <div className="exercise-container flex flex-col px-[5px] shadow-sm shadow-slate-400 rounded-lg gap-[20px] mt-[5px]">
              {selectedExercise ? (
                <div className="flex flex-col items-center" style={{height:'700px'}}>
                  <video
                    src={selectedExercise.video}
                    className="rounded-lg w-full object-cover"
                    style={{ height: '70%' }} // Increase the height of the video
                    controls
                    autoPlay
                    loop
                  />
                  <div className="flex flex-col px-[10px] my-[10px] text-center">
                    <span className="font-semibold text-white text-lg">{selectedExercise.name}</span>
                    <span className="font-medium text-white text-sm">
                      Duration: {selectedExercise.duration} minutes
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-gray-400 text-center">Select an exercise to view the details</p>
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Webcam;
