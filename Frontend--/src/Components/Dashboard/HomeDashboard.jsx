import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
        console.log(data);

        const randomDifficulty = getRandomDifficulty();

        const userResponse = await fetch(
          "http://localhost:5001/api/user-preferences"
        );
        const userData = await userResponse.json();

        const email = localStorage.getItem("email");

        const currentUserPreferences = userData.find(
          (pref) => pref.email === email
        );
        console.log(currentUserPreferences.goal);
        setUserPreferences(currentUserPreferences);

        const filteredExercises = {
          armsDay: data
            .filter(
              (exercise) =>
                exercise.TargetArea === "Arms" &&
                exercise.Difficulty === currentUserPreferences.level &&
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
        console.log(filteredExercises);

        setExercises(filteredExercises);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetchExercises();
  }, []);

  return (
    <>
      <div className="dashboard-home-container flex flex-col p-[40px]  ">
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
          <div className="bg-[#1f1f1f] w-full rounded-lg  py-[15px]">
            <div className="flex flex-row items-center">
              {/* Monday */}
              <div
                className="flex flex-col items-center border-r w-1/6 border-gray-700 px-[10px]  "
                onClick={() => handleDayClick("Arms")}
              >
                <div className="flex flex-col items-center mb-[30px]">
                  <Link to="/todaysworkoutmain?day=Monday">
                    <span className="text-white font-semibold mb-[8px] text-lg">
                      Monday
                    </span>
                  </Link>
                  <span className="text-sm text-gray-400 mb-[4px]">
                    Arms Day
                  </span>
                  <span className="text-xs text-gray-500 mb-[8px]">
                    6:00 AM - 7:00 AM
                  </span>
                </div>
                <div className="text-xs text-slate-300 flex flex-col items-start gap-[10px] space-y-1">
                  {exercises.armsDay.map((exercise, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 bg-opacity-35 border-[1px] border-gray-700 p-2 rounded-md  w-full"
                    >
                      <span className="text-gray-400">{exercise.Exercise}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tuesday */}
              <div className="flex flex-col items-center border-r w-1/6 border-gray-700 px-[10px]  ">
                <div className="flex flex-col items-center mb-[30px]">
                  <Link to="/todaysworkoutmain?day=Tuesday">
                    <span className="text-white font-semibold mb-[8px] text-lg">
                      Tuesday
                    </span>
                  </Link>
                  <span className="text-sm text-gray-400 mb-[4px]">
                    Legs Day
                  </span>
                  <span className="text-xs text-gray-500 mb-[8px]">
                    7:30 AM - 8:30 AM
                  </span>
                </div>
                <div className="text-xs text-slate-300 flex flex-col items-start gap-[10px] space-y-1">
                  {exercises.legsDay.map((exercise, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 bg-opacity-35 border-[1px] border-gray-700 p-2 rounded-md mb-[8px]  w-full"
                    >
                      <span className="text-gray-400">{exercise.Exercise}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Wednesday */}
              <div className="flex flex-col items-center border-r w-1/6 border-gray-700 px-[10px]  ">
                <div className="flex flex-col items-center mb-[30px]">
                  <Link to="/todaysworkoutmain?day=Wednesday">
                    <span className="text-white font-semibold mb-[8px] text-lg">
                      Wednesday
                    </span>
                  </Link>
                  <span className="text-sm text-gray-400 mb-[4px]">
                    Shoulder Day
                  </span>
                  <span className="text-xs text-gray-500 mb-[8px]">
                    6:00 AM - 7:00 AM
                  </span>
                </div>
                <div className="text-xs text-slate-300 flex flex-col items-start gap-[10px] space-y-1">
                  {exercises.shoulderDay.map((exercise, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 bg-opacity-35 border-[1px] border-gray-700 p-2 rounded-md  w-full"
                    >
                      <span className="text-gray-400">{exercise.Exercise}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Thursday */}
              <div className="flex flex-col items-center border-r w-1/6 border-gray-700 px-[10px]  ">
                <div className="flex flex-col items-center mb-[30px]">
                  <Link to="/todaysworkoutmain?day=Thursday">
                    <span className="text-white font-semibold mb-[8px] text-lg">
                      Thursday
                    </span>
                  </Link>
                  <span className="text-sm text-gray-400 mb-[4px]">
                    Chest Day
                  </span>
                  <span className="text-xs text-gray-500 mb-[8px]">
                    7:30 AM - 8:30 AM
                  </span>
                </div>
                <div className="text-xs text-slate-300 flex flex-col items-start gap-[10px] space-y-1">
                  {exercises.chestDay.map((exercise, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 bg-opacity-35 border-[1px] border-gray-700 p-2 rounded-md  w-full"
                    >
                      <span className="text-gray-400">{exercise.Exercise}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Friday */}
              <div className="flex flex-col items-center border-r w-1/6 border-gray-700 px-[10px]  ">
                <div className="flex flex-col items-center mb-[30px]">
                  <Link to="/todaysworkoutmain?day=Friday">
                    <span className="text-white font-semibold mb-[8px] text-lg">
                      Friday
                    </span>
                  </Link>
                  <span className="text-sm text-gray-400 mb-[4px]">
                    Back Day
                  </span>
                  <span className="text-xs text-gray-500 mb-[8px]">
                    6:00 AM - 7:00 AM
                  </span>
                </div>
                <div className="text-xs text-slate-300 flex flex-col items-start gap-[10px] space-y-1">
                  {exercises.backDay.map((exercise, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 bg-opacity-35 border-[1px] border-gray-700 p-2 rounded-md  w-full"
                    >
                      <span className="text-gray-400">{exercise.Exercise}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Saturday */}
              <div className="flex flex-col items-center w-1/6  ">
                <div className="flex flex-col items-center mb-[30px]">
                  <Link to="/todaysworkoutmain?day=Saturday">
                    <span className="text-white font-semibold mb-[8px] text-lg">
                      Sunday
                    </span>
                  </Link>
                  <span className="text-sm text-gray-400 mb-[4px]">
                    Full Body Day
                  </span>
                  <span className="text-xs text-gray-500 mb-[8px]">
                    8:00 AM - 9:00 AM
                  </span>
                </div>
                <div className="text-xs text-slate-300 flex flex-col items-start gap-[10px] space-y-1">
                  {[
                    "Dumbbell Bicep Curls",
                    "Deadlifts",
                    "Pull-Ups",
                    "Push-Ups",
                    "Bodyweight Squats",
                    "Dumbbell Bicep Curls",
                  ].map((exercise, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 bg-opacity-35 border-[1px] border-gray-700 p-2 rounded-md  w-full"
                    >
                      <span className="text-gray-400">{exercise}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDashboard;
