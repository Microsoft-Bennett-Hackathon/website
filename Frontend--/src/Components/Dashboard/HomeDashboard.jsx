import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeDashboard = () => {
  const [exercises, setExercises] = useState({
    armsDay: [],
    legsDay: [],
    shoulderDay: [],
    chestDay: [],
    backDay: [],
    fullBodyDay: [],
  });

  const [userPreferences, setUserPreferences] = useState(null);
  // Function to randomly pick difficulty
  const getRandomDifficulty = () => {
    const difficulties = ["Beginner", "Intermediate", "Advanced"];
    const randomIndex = Math.floor(Math.random() * difficulties.length);
    return difficulties[randomIndex];
  };

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/exercises");
        const data = await response.json();

        const randomDifficulty = getRandomDifficulty();

        const userResponse = await fetch(
          "http://localhost:5001/api/user-preferences"
        );
        const userData = await userResponse.json();

        const email = localStorage.getItem("email");

        const currentUserPreferences = userData.find(
          (pref) => pref.email === email
        );
        console.log(currentUserPreferences.level);
        setUserPreferences(currentUserPreferences);

        const filteredExercises = {
          armsDay: data
            .filter(
              (exercise) =>
                exercise.TargetArea === "Arms" &&
                exercise.Difficulty === currentUserPreferences.level &&
                exercise.goal === currentUserPreferences.goal &&
                exercise.goal === currentUserPreferences.goal
            )
            .slice(0, 6),
          legsDay: data
            .filter(
              (exercise) =>
                exercise.TargetArea === "Legs" &&
                exercise.Difficulty === currentUserPreferences.level &&
                exercise.goal === currentUserPreferences.goal
            )
            .slice(0, 6),
          shoulderDay: data
            .filter(
              (exercise) =>
                exercise.TargetArea === "Shoulders" &&
                exercise.Difficulty === currentUserPreferences.level &&
                exercise.goal === currentUserPreferences.goal
            )
            .slice(0, 6),
          chestDay: data
            .filter(
              (exercise) =>
                exercise.TargetArea === "Chest" &&
                exercise.Difficulty === currentUserPreferences.level &&
                exercise.goal === currentUserPreferences.goal
            )
            .slice(0, 6),
          backDay: data
            .filter(
              (exercise) =>
                exercise.TargetArea === "Back" &&
                exercise.Difficulty === currentUserPreferences.level &&
                exercise.goal === currentUserPreferences.goal
            )
            .slice(0, 6),
          fullBodyDay: data
            .filter(
              (exercise) =>
                exercise.TargetArea === "Full Body" &&
                exercise.Difficulty === currentUserPreferences.level &&
                exercise.goal === currentUserPreferences.goal
            )
            .slice(0, 6),
        };

        setExercises(filteredExercises);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetchExercises();
  }, []);

  return (
    <>
      <div className="dashboard-home-container flex flex-col p-[40px] overflow-scrolls">
        <div className="dh-top flex flex-col gap-[30px]">
          <div className="flex flex-row gap-[30px]">
            <div className="bg-[#2d2d2d] w-1/2 h-[140px] rounded-lg flex flex-row items-center p-[10px] hover:scale-105 transition-transform duration-300">
              <img
                src="/workout img.png"
                alt=""
                className="w-[150px] h-full rounded-lg object-cover"
              />
              <div className="ml-[15px] flex flex-col gap-2">
                <Link to="/WeightlossMain">
                  <span className="text-white font-bold">
                    Weight Loss Workout
                  </span>
                </Link>
                <span className="text-sm font-normal">
                  By default, Tailwind provides two grow utilities. You can
                  customize these values.{" "}
                </span>
                <span className="text-sm font-thin text-slate-300">
                  11:30 - 1:00
                </span>
              </div>
            </div>
            <div className="bg-[#2d2d2d] w-1/2 h-[140px] rounded-lg flex flex-row items-center p-[10px] hover:scale-105 transition-transform duration-300">
              <img
                src="/bodybuilder.avif"
                alt=""
                className="w-[150px] h-full rounded-lg object-cover"
              />
              <div className="ml-[15px] flex flex-col gap-2">
                <span className="text-white font-bold">
                  <Link to="/MusclegainMain">Muscle Gain</Link>
                </span>
                <span className="text-sm font-normal">
                  By default, Tailwind provides two grow utilities. You can
                  customize these values.{" "}
                </span>
                <span className="text-sm font-thin text-slate-300">
                  11:30 - 1:00
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[30px]">
            <div className="bg-[#2d2d2d] w-1/2 h-[140px] rounded-lg flex flex-row items-center p-[10px] hover:scale-105 transition-transform duration-300">
              <img
                src="/dinner bw.jpg"
                alt=""
                className="w-[150px] h-full rounded-lg object-cover"
              />
              <div className="ml-[15px] flex flex-col gap-2">
                <span className="text-white font-bold">
                  <Link to="/DietplanMain">Diet Plan</Link>
                </span>
                <span className="text-sm font-normal">
                  By default, Tailwind provides two grow utilities. You can
                  customize these values.{" "}
                </span>
                <span className="text-sm font-thin text-slate-300">
                  11:30 - 1:00
                </span>
              </div>
            </div>
            <div className="bg-[#2d2d2d] w-1/2 h-[140px] rounded-lg flex flex-row items-center p-[10px] hover:scale-105 transition-transform duration-300">
              <img
                src="/body.jpg"
                alt=""
                className="w-[150px] h-full rounded-lg object-cover"
              />
              <div className="ml-[15px] flex flex-col gap-2">
                <span className="text-white font-bold">
                  <Link to="/AllworkoutsMain">All Exercises</Link>
                </span>
                <span className="text-sm font-normal">
                  By default, Tailwind provides two grow utilities. You can
                  customize these values.{" "}
                </span>
                <span className="text-sm font-thin text-slate-300">
                  11:30 - 1:00
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="dh-bottom flex mt-[40px]">
          <div className="bg-[#2d2d2d] w-full rounded-lg px-[10px]">
            <div className="flex flex-row items-center py-4">
              {/* Monday */}
              <div className="flex flex-col items-center border-r w-1/6 border-gray-500 pr-[10px]">
                <span className="text-white font-bold mb-[10px]">Monday</span>
                <span className="text-sm text-slate-300">Arms Day</span>
                <span className="text-[10px] text-slate-400 ">
                  6:00 AM - 7:00 AM
                </span>
                <ul className="text-xs text-slate-300 flex flex-col items-center">
                  {exercises.armsDay.map((exercise, index) => (
                    <span key={index}>{exercise.Exercise}</span>
                  ))}
                </ul>
              </div>
              {/* Tuesday */}
              <div className="flex flex-col items-center border-r w-1/6 border-gray-500 pr-[10px]">
                <span className="text-white font-bold mb-[10px]">Tuesday</span>
                <span className="text-sm text-slate-300">Legs Day</span>
                <span className="text-[10px] text-slate-400 ">
                  7:30 AM - 8:30 AM
                </span>
                <ul className="text-xs text-slate-300 flex flex-col items-center">
                  {exercises.legsDay.map((exercise, index) => (
                    <span key={index}>{exercise.Exercise}</span>
                  ))}
                </ul>
              </div>
              {/* Wednesday */}
              <div className="flex flex-col items-center border-r w-1/6 border-gray-500 pr-[10px]">
                <span className="text-white font-bold mb-[10px]">
                  Wednesday
                </span>
                <span className="text-sm text-slate-300">Shoulder Day</span>
                <span className="text-[10px] text-slate-400 ">
                  6:00 AM - 7:00 AM
                </span>
                <ul className="text-xs text-slate-300 flex flex-col items-center">
                  {exercises.shoulderDay.map((exercise, index) => (
                    <span key={index}>{exercise.Exercise}</span>
                  ))}
                </ul>
              </div>
              {/* Thursday */}
              <div className="flex flex-col items-center border-r w-1/6 border-gray-500 pr-[10px]">
                <span className="text-white font-bold mb-[10px]">Thursday</span>
                <span className="text-sm text-slate-300">Chest Day</span>
                <span className="text-[10px] text-slate-400 ">
                  7:30 AM - 8:30 AM
                </span>
                <ul className="text-xs text-slate-300 flex flex-col items-center">
                  {exercises.chestDay.map((exercise, index) => (
                    <span key={index}>{exercise.Exercise}</span>
                  ))}
                </ul>
              </div>
              {/* Friday */}
              <div className="flex flex-col items-center border-r w-1/6 border-gray-500 pr-[10px]">
                <span className="text-white font-bold mb-[10px]">Friday</span>
                <span className="text-sm text-slate-300">Back Day</span>
                <span className="text-[10px] text-slate-400 ">
                  6:00 AM - 7:00 AM
                </span>
                <ul className="text-xs text-slate-300 flex flex-col items-center">
                  {exercises.backDay.map((exercise, index) => (
                    <span key={index}>{exercise.Exercise}</span>
                  ))}
                </ul>
              </div>
              {/* Saturday */}
              <div className="flex flex-col items-center w-1/6">
                <span className="text-white font-bold mb-[10px]">Saturday</span>
                <span className="text-sm text-slate-300">Full Body Day</span>
                <span className="text-[10px] text-slate-400 ">
                  8:00 AM - 9:00 AM
                </span>

                <ul className="text-xs text-slate-300 flex flex-col items-center">
                  {exercises.armsDay.map((exercise, index) => (
                    <span key={index}>{exercise.Exercise}</span>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDashboard;
