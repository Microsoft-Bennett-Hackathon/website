import React, { useEffect, useState } from "react";

const Weightloss = () => {
  const [schedules, setSchedules] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [goal, setGoal] = useState(""); // For storing the selected goal
  const [level, setLevel] = useState(""); // For storing the selected level

  useEffect(() => {
    fetch("http://localhost:5001/api/schedules")
      .then((response) => response.json())
      .then((data) => {
        const filteredSchedules = data.filter(
          (schedule) => schedule.goal === "weight loss"
        );
        setSchedules(filteredSchedules);
      })
      .catch((error) => {
        console.error("Error fetching schedules:", error);
      });
  }, []);

  const handlePlanClick = (goal, level) => {
    setGoal(goal); // Set goal from the clicked schedule
    setLevel(level); // Set level from the clicked schedule
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const handleUpdateDietPreferences = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const token = localStorage.getItem("token"); // Assuming the token is stored in localStorage
    if (!token) {
      alert("You must be logged in.");
      return;
    }

    // Get values from the form
    const lastWeight = document.getElementById("lastWeight").value;
    const targetWeight = document.getElementById("targetWeight").value;
    const dietaryPreference = document.getElementById("preferences").value;
    const workoutFrequency = document.getElementById("workoutFrequency").value;
    const email = localStorage.getItem("email"); // Assuming email is stored in localStorage

    if (!email) {
      alert("Email is required.");
      return;
    }

    const data = {
      lastWeight,
      targetWeight,
      dietaryPreference,
      workoutFrequency,
      goal,
      level,
      email,
    };

    try {
      const response = await fetch(
        "http://localhost:5001/api/update-diet-preferences",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include JWT token in the Authorization header
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert(result.message || "Failed to update preferences.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="dashboard-home-container flex flex-col p-[40px] overflow-scrolls">
      <div className="dh-top flex flex-col gap-[30px]">
        <div className="flex flex-row gap-[30px] flex-wrap">
          {schedules.map((schedule, index) => (
            <div
              key={index}
              className="bg-[#2d2d2d] w-[440px] h-[140px] rounded-lg flex flex-row items-center p-[10px] hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => handlePlanClick(schedule.goal, schedule.level)}
            >
              <img
                src="/workout img.png"
                alt={schedule.title}
                className="w-[150px] h-full rounded-lg object-cover"
              />
              <div className="ml-[15px] flex flex-col gap-2">
                <span className="text-white font-bold">{schedule.title}</span>

                <span className="text-sm font-thin text-slate-300">
                  Goal: {schedule.goal}
                </span>
                <span className="text-sm font-thin text-slate-300">
                  Duration: {schedule.days} days
                </span>
                <span className="text-sm font-thin text-slate-300">
                  Level: {schedule.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#2d2d2d] p-6 rounded-lg shadow-lg w-[400px] text-center relative">
            <h2 className="text-xl font-bold text-white mb-4">
              Build Your Diet Plan
            </h2>
            <form
              className="flex flex-col gap-4 text-left"
              onSubmit={handleUpdateDietPreferences}
            >
              {/* Last Recorded Weight */}
              <div>
                <label
                  className="block text-sm text-slate-300 mb-1"
                  htmlFor="lastWeight"
                >
                  Last Recorded Weight (kg)
                </label>
                <input
                  type="number"
                  id="lastWeight"
                  placeholder="Enter your last weight"
                  className="w-full px-3 py-2 rounded bg-[#3d3d3d] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Targeted Weight */}
              <div>
                <label
                  className="block text-sm text-slate-300 mb-1"
                  htmlFor="targetWeight"
                >
                  Targeted Weight (kg)
                </label>
                <input
                  type="number"
                  id="targetWeight"
                  placeholder="Enter your targeted weight"
                  className="w-full px-3 py-2 rounded bg-[#3d3d3d] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Dietary Preferences */}
              <div>
                <label
                  className="block text-sm text-slate-300 mb-1"
                  htmlFor="preferences"
                >
                  Dietary Preferences
                </label>
                <select
                  id="preferences"
                  className="w-full px-3 py-2 rounded bg-[#3d3d3d] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled selected>
                    Select preference
                  </option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="non-vegetarian">Non-Vegetarian</option>
                  <option value="vegan">Vegan</option>
                </select>
              </div>

              {/* How Often Do You Workout */}
              <div>
                <label
                  className="block text-sm text-slate-300 mb-1"
                  htmlFor="workoutFrequency"
                >
                  How Often Do You Workout
                </label>
                <select
                  id="workoutFrequency"
                  className="w-full px-3 py-2 rounded bg-[#3d3d3d] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled selected>
                    Select frequency
                  </option>
                  <option value="daily">Daily</option>
                  <option value="3-times-a-week">3 Times a Week</option>
                  <option value="4-times-a-week">4 Times a Week</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mr-auto ml-auto bg-[#ff0000] text-white py-2 rounded hover:bg-[#fa6060] focus:outline-none focus:ring-2 focus:ring-[#ff0000]"
              >
                Submit
              </button>
            </form>

            {/* Close Button */}
            <button
              className="text-white rounded bg-transparent hover:bg-[#ff0000] absolute top-0 right-0 px-4 py-2"
              onClick={closePopup}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weightloss;
