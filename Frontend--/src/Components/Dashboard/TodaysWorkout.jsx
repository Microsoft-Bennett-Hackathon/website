import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const TodaysWorkout = () => {
  const [exercises, setExercises] = useState([]);
  const [userPreferences, setUserPreferences] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 6;
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const day = params.get("day");

  // Map days to target areas
  const dayToTargetAreaMap = {
    Monday: "Arms",
    Tuesday: "Legs",
    Wednesday: "Shoulders",
    Thursday: "Chest",
    Friday: "Back",
    Saturday: "Full Body",
  };

  // Get the target area based on the selected day
  const targetAreaForDay = dayToTargetAreaMap[day] || "Full Body"; // Default to Full Body if day not found

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/exercises");
        const data = await response.json();
        console.log(data);
        setExercises(data);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    const fetchUserPreferences = async () => {
      try {
        const email = localStorage.getItem("email"); // Get the email from localStorage
        const response = await fetch(
          "http://localhost:5001/api/user-preferences"
        );
        const data = await response.json();
        const userPref = data.find((pref) => pref.email === email);
        console.log(userPref);
        setUserPreferences(userPref);
      } catch (error) {
        console.error("Error fetching user preferences:", error);
      }
    };

    fetchExercises();
    fetchUserPreferences();
  }, []);

  if (!userPreferences) {
    return <div>Loading...</div>; // Display a loading state until user preferences are fetched
  }

  const filteredExercises = exercises.filter(
    (exercise) =>
      exercise.TargetArea === targetAreaForDay &&
      exercise.goal === userPreferences.goal &&
      exercise.Difficulty === userPreferences.level
  );

  const totalPages = Math.ceil(filteredExercises.length / exercisesPerPage);

  const currentExercises = filteredExercises.slice(
    (currentPage - 1) * exercisesPerPage,
    currentPage * exercisesPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="dashboard-home-container flex flex-col p-[40px] overflow-scrolls">
        <div className="dh-top flex flex-col gap-[30px]">
          <div className="flex flex-row gap-[30px] flex-wrap">
            {currentExercises.map((exercise, index) => (
              <div
                key={index}
                className="bg-[#2d2d2d] w-[428px] h-[140px] rounded-lg flex flex-row items-center p-[10px] hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={exercise.url || "/bodybuilder.avif"} // Use exercise.url if available, else fallback to default
                  alt={exercise.Exercise}
                  className="w-[150px] h-full rounded-lg object-cover"
                />
                <div className="ml-[15px] flex flex-col">
                  <span className="text-white font-bold">
                    {exercise.Exercise}
                  </span>
                  <span className="text-sm font-normal">
                    {exercise.Description}
                  </span>
                  <span className="text-sm font-thin text-slate-300">
                    {exercise.Sets} Sets, {exercise.Reps} Reps
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Previous
            </button>
            <span className="self-center">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodaysWorkout;
