// import React, { useEffect, useState } from "react";

// const Sidebar = () => {
//   const [dietPreferences, setDietPreferences] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentDay, setCurrentDay] = useState("");

//   const dayToTargetAreaMap = {
//     Monday: "Arms",
//     Tuesday: "Legs",
//     Wednesday: "Shoulders",
//     Thursday: "Chest",
//     Friday: "Back",

//     Sunday: "FullBody",
//   };

//   useEffect(() => {
//     const fetchDietPreferences = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:5001/api/user-preferences"
//         );
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const userData = await response.json();
//         const email = localStorage.getItem("email");
//         const currentUserPreferences = userData.find(
//           (pref) => pref.email === email
//         );
//         setDietPreferences(currentUserPreferences);
//       } catch (err) {
//         console.error("Error fetching user preferences:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDietPreferences();

//     const today = new Date().toLocaleString("en-us", { weekday: "long" });
//     setCurrentDay(today);
//   }, []);

//   const calculateNutrition = (userPreferences) => {
//     if (!userPreferences) return null;

//     const { lastWeight, workoutFrequency, goal } = userPreferences;
//     const height = 170;
//     const age = 30;

//     const bmr = 10 * lastWeight + 6.25 * height - 5 * age + 5;
//     let maintenanceCalories = bmr;

//     let activityMultiplier = 1.2;
//     if (workoutFrequency === "3-times-a-week") {
//       activityMultiplier = 1.375;
//     }
//     maintenanceCalories *= activityMultiplier;

//     let targetCalories = maintenanceCalories;
//     if (goal === "weight loss") {
//       targetCalories *= 0.8;
//     } else if (goal === "weight gain") {
//       targetCalories *= 1.2;
//     }

//     const proteinCalories = targetCalories * 0.3;
//     const fatCalories = targetCalories * 0.25;
//     const carbCalories = targetCalories * 0.45;

//     const proteinGrams = proteinCalories / 4;
//     const fatGrams = fatCalories / 9;
//     const carbGrams = carbCalories / 4;

//     return {
//       targetCalories,
//       proteinGrams,
//       fatGrams,
//       carbGrams,
//     };
//   };

//   const nutrition = calculateNutrition(dietPreferences);
//   const targetWorkout = dayToTargetAreaMap[currentDay];
//   const workoutImage = `/images/${targetWorkout.toLowerCase()}.png`;

//   return (
//     <div className="dashboard-components dashboard-right-bar bg-[#2D2D2D] h-full right-0 w-[450px] absolute border-2 border-black">
//       <div className="right-bar-container flex flex-col px-[50px]">
//         <div className="r-top flex flex-col gap-[30px] mt-[18px]">
//           <h1 className="text-white font-semibold text-2xl">Today's Workout</h1>
//           <div className="flex flex-col px-[5px] shadow-sm shadow-slate-400 rounded-lg gap-[20px] mt-[5px]">
//             <img src={workoutImage} alt={targetWorkout} />
//             <div className="flex flex-col px-[10px] my-[10px]">
//               <span className="font-semibold text-white">
//                 {targetWorkout} Exercise
//               </span>
//               <span className="font-medium text-white">Week 1</span>
//             </div>
//           </div>
//         </div>
//         <div className="r-bottom mt-[25px] bg-[#1E1E1E] p-[20px] rounded-lg shadow-lg">
//           {loading && <p className="text-white text-center">Loading...</p>}
//           {error && <p className="text-red-500 text-center">Error: {error}</p>}
//           {dietPreferences && nutrition && (
//             <div className="text-white">
//               <h2 className="font-semibold text-2xl mb-4">
//                 Daily Nutritional Needs
//               </h2>
//               <div className="flex flex-col gap-2">
//                 <p className="flex justify-between">
//                   <span>Calories:</span>
//                   <span>{nutrition.targetCalories.toFixed(0)} kcal</span>
//                 </p>
//                 <p className="flex justify-between">
//                   <span>Protein:</span>
//                   <span>{nutrition.proteinGrams.toFixed(1)} g</span>
//                 </p>
//                 <p className="flex justify-between">
//                   <span>Fats:</span>
//                   <span>{nutrition.fatGrams.toFixed(1)} g</span>
//                 </p>
//                 <p className="flex justify-between">
//                   <span>Carbs:</span>
//                   <span>{nutrition.carbGrams.toFixed(1)} g</span>
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [dietPreferences, setDietPreferences] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentDay, setCurrentDay] = useState("");

  // Manually mapping days to target areas and images
  const dayToTargetAreaMap = {
    Monday: { targetArea: "Arms", image: "/images/arms.jpg" },
    Tuesday: { targetArea: "Legs", image: "/images/legs.jpg" },
    Wednesday: { targetArea: "Shoulders", image: "/images/shoulders.jpg" },
    Thursday: { targetArea: "Chest", image: "/images/chest.jpg" },
    Friday: { targetArea: "Back", image: "/images/back.jpg" },
    Sunday: { targetArea: "FullBody", image: "/images/fullbody.jpg" },
    Saturday: { targetArea: "Rest", image: "/images/rest.jpg" }, // Add image for rest day if needed
  };

  useEffect(() => {
    const fetchDietPreferences = async () => {
      try {
        const response = await fetch(
          "http://localhost:5001/api/user-preferences"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const userData = await response.json();
        const email = localStorage.getItem("email");
        const currentUserPreferences = userData.find(
          (pref) => pref.email === email
        );
        setDietPreferences(currentUserPreferences);
      } catch (err) {
        console.error("Error fetching user preferences:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDietPreferences();

    const today = new Date().toLocaleString("en-us", { weekday: "long" });
    setCurrentDay(today);
  }, []);

  const calculateNutrition = (userPreferences) => {
    if (!userPreferences) return null;

    const { lastWeight, workoutFrequency, goal } = userPreferences;
    const height = 170;
    const age = 30;

    const bmr = 10 * lastWeight + 6.25 * height - 5 * age + 5;
    let maintenanceCalories = bmr;

    let activityMultiplier = 1.2;
    if (workoutFrequency === "3-times-a-week") {
      activityMultiplier = 1.375;
    }
    maintenanceCalories *= activityMultiplier;

    let targetCalories = maintenanceCalories;
    if (goal === "weight loss") {
      targetCalories *= 0.8;
    } else if (goal === "weight gain") {
      targetCalories *= 1.2;
    }

    const proteinCalories = targetCalories * 0.3;
    const fatCalories = targetCalories * 0.25;
    const carbCalories = targetCalories * 0.45;

    const proteinGrams = proteinCalories / 4;
    const fatGrams = fatCalories / 9;
    const carbGrams = carbCalories / 4;

    return {
      targetCalories,
      proteinGrams,
      fatGrams,
      carbGrams,
    };
  };

  const nutrition = calculateNutrition(dietPreferences);

  // Ensure currentDay is valid and exists in the map
  const targetWorkout = dayToTargetAreaMap[currentDay];

  if (!targetWorkout) {
    return (
      <div className="error-message">
        <p className="text-red-500 text-center">
          Invalid day of the week: {currentDay}
        </p>
      </div>
    );
  }

  return (
    <div className="dashboard-components dashboard-right-bar bg-[#2D2D2D] h-full right-0 w-[450px] absolute border-2 border-black">
      <div className="right-bar-container flex flex-col px-[50px]">
        <div className="r-top flex flex-col gap-[30px] mt-[18px]">
          <h1 className="text-white font-semibold text-2xl">Today's Workout</h1>
          <div className="flex flex-col px-[5px] shadow-sm shadow-slate-400 rounded-lg gap-[20px] mt-[5px]">
            <img
              src={targetWorkout.image}
              alt={targetWorkout.targetArea}
              className="rounded-xl"
            />
            <div className="flex flex-col px-[10px] my-[10px]">
              <span className="font-semibold text-white">
                {targetWorkout.targetArea} Exercise
              </span>
              <span className="font-medium text-white">Week 1</span>
            </div>
          </div>
        </div>
        <div className="r-bottom mt-[25px] bg-[#1E1E1E] p-[20px] rounded-lg shadow-lg">
          {loading && <p className="text-white text-center">Loading...</p>}
          {error && <p className="text-red-500 text-center">Error: {error}</p>}
          {dietPreferences && nutrition && (
            <div className="text-white">
              <h2 className="font-semibold text-2xl mb-4">
                Daily Nutritional Needs
              </h2>
              <div className="flex flex-col gap-2">
                <p className="flex justify-between">
                  <span>Calories:</span>
                  <span>{nutrition.targetCalories.toFixed(0)} kcal</span>
                </p>
                <p className="flex justify-between">
                  <span>Protein:</span>
                  <span>{nutrition.proteinGrams.toFixed(1)} g</span>
                </p>
                <p className="flex justify-between">
                  <span>Fats:</span>
                  <span>{nutrition.fatGrams.toFixed(1)} g</span>
                </p>
                <p className="flex justify-between">
                  <span>Carbs:</span>
                  <span>{nutrition.carbGrams.toFixed(1)} g</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
