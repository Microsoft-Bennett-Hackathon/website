// import React, { useEffect, useState } from "react";
// import ReactMarkdown from "react-markdown";

// const Dietplan = () => {
//   const [userPreferences, setUserPreferences] = useState(null);
//   const [generatedContent, setGeneratedContent] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Fetch user preferences using the native fetch API
//     const fetchUserPreferences = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:5001/api/user-preferences"
//         );
//         const data = await response.json();
//         setUserPreferences(data);
//       } catch (error) {
//         console.error("Error fetching user preferences:", error);
//       }
//     };

//     fetchUserPreferences();
//   }, []);

//   useEffect(() => {
//     // Automatically generate content once user preferences are fetched, only if content is not already generated
//     if (userPreferences && !generatedContent) {
//       handleGenerateContent();
//     }
//   }, [userPreferences, generatedContent]);

//   const generatePrompt = () => {
//     if (!userPreferences || userPreferences.length === 0) {
//       return "";
//     }

//     const {
//       goal,
//       level,
//       lastWeight,
//       targetWeight,
//       dietaryPreference,
//       workoutFrequency,
//     } = userPreferences[0];

//     return `Generate a personalized and detailed Diet plan with every single detail like macros and micros suggestion for someone who has the following details:
//       Goal: ${goal}
//       Level: ${level}
//       Last Weight: ${lastWeight}
//       Target Weight: ${targetWeight}
//       Dietary Preference: ${dietaryPreference}
//       Workout Frequency: ${workoutFrequency}`;
//   };

//   const handleGenerateContent = async () => {
//     const prompt = generatePrompt();
//     if (!prompt) {
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch(
//         "http://localhost:5001/api/generate-content",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ prompt }),
//         }
//       );
//       const data = await response.json();
//       setGeneratedContent(data.response);
//     } catch (error) {
//       console.error("Error generating content:", error);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="overflow-y-scroll h-[90vh] p-6 text-white rounded-lg shadow-lg ">
//       <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">
//         Generating Personalized Diet Plan
//       </h1>
//       {loading && (
//         <div className="text-lg text-gray-300 text-center">Generating...</div>
//       )}
//       {generatedContent && (
//         <div className="space-y-8">
//           <div className="bg-gray-700 bg-opacity-30 p-6 rounded-lg">
//             <ReactMarkdown className="text-gray-300">
//               {generatedContent}
//             </ReactMarkdown>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dietplan;

import React, { useEffect, useState } from "react";

const Dietplan = () => {
  const [userPreferences, setUserPreferences] = useState(null);
  const [generatedContent, setGeneratedContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch user preferences using the native fetch API
    const fetchUserPreferences = async () => {
      try {
        const response = await fetch(
          "http://localhost:5001/api/user-preferences"
        );
        const data = await response.json();
        setUserPreferences(data);
      } catch (error) {
        console.error("Error fetching user preferences:", error);
      }
    };

    fetchUserPreferences();
  }, []);

  useEffect(() => {
    // Automatically generate content once user preferences are fetched, only if content is not already generated
    if (userPreferences && !generatedContent) {
      handleGenerateContent();
    }
  }, [userPreferences, generatedContent]);

  const generatePrompt = () => {
    if (!userPreferences || userPreferences.length === 0) {
      return "";
    }

    const {
      goal,
      level,
      lastWeight,
      targetWeight,
      dietaryPreference,
      workoutFrequency,
    } = userPreferences[0];

    return `Generate a personalized and detailed Diet plan with every single detail like macros and micros suggestion for someone who has the following details:
      Goal: ${goal}
      Level: ${level}
      Last Weight: ${lastWeight}
      Target Weight: ${targetWeight}
      Dietary Preference: ${dietaryPreference}
      Workout Frequency: ${workoutFrequency}
      NOTE:generate in HTML. us this template <div class=" h-full p-6 text-white rounded-lg shadow-lg">
  <h1 class="text-3xl font-bold text-center text-blue-400 mb-6">Gym Athlete's Diet Plan</h1>
  <p class="text-lg text-gray-300 mb-6 text-center">This diet plan is designed to support an active athlete with high energy needs, helping build muscle and maintain peak performance.</p>

  <div class="space-y-8">
    <div>
      <h2 class="text-2xl font-semibold text-gray-200">Meal 1: Breakfast</h2>
      <p class="text-md text-gray-400 mb-2"><strong>Meal Type:</strong> High-protein, moderate carbs, healthy fats</p>
      <ul class="list-disc pl-5 space-y-2 text-gray-300">
        <li>4 egg whites, 2 whole eggs scrambled (protein)</li>
        <li>1 cup of oatmeal with almond butter (carbs and healthy fats)</li>
        <li>1 banana (natural sugars and potassium)</li>
        <li>1 glass of water with lemon (hydration)</li>
      </ul>
      <p class="text-md text-gray-400"><strong>Macronutrients:</strong> Protein: 30g, Carbs: 45g, Fats: 15g</p>
      <p class="text-md text-gray-400"><strong>Micronutrients:</strong> Vitamin A, Vitamin C, Potassium, Magnesium</p>
    </div>
    
    <!-- Repeat for other meals -->
    
    <div>
      <h2 class="text-2xl font-semibold text-gray-200">Supplements (Optional)</h2>
      <ul class="list-disc pl-5 space-y-2 text-gray-300">
        <li>Whey protein (for post-workout recovery)</li>
        <li>Creatine (for muscle building and performance)</li>
        <li>Branched-Chain Amino Acids (BCAAs) (for muscle recovery)</li>
        <li>Multivitamins (for overall health and immunity)</li>
      </ul>
    </div>

    <div>
      <h3 class="text-xl font-semibold text-gray-200">Notes:</h3>
      <p class="text-md text-gray-400">This diet is customizable depending on the athlete’s specific goals (e.g., cutting or bulking), activity level, and body composition. Always consult with a nutritionist or dietitian to ensure the plan meets personal needs and health conditions.</p>
    </div>
  </div>
</div>
Generate a gym athlete's diet plan with 7 meals, including breakfast, snacks, lunch, and dinner. For each meal, include the following:

Meal name (e.g., Breakfast, Snack, etc.)
Meal type (e.g., high-protein, complex carbs, healthy fats)
Ingredients (list of food items with their nutritional benefits)
Macronutrients breakdown (protein, carbs, fats)
Micronutrients breakdown (vitamins, minerals, etc.)
Hydration tips (e.g., recommended water intake)
Supplements (optional recommendations for enhancing performance, e.g., whey protein, creatine, etc.)
Additional notes (customization options, consultation with nutritionist, etc.)
NOTE : do not enter display html in the content
      `;
  };

  const handleGenerateContent = async () => {
    const prompt = generatePrompt();
    if (!prompt) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:5001/api/generate-content",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt }),
        }
      );
      const data = await response.json();
      setGeneratedContent(data.response); // Assuming the API response contains HTML content
    } catch (error) {
      console.error("Error generating content:", error);
    }
    setLoading(false);
  };

  return (
    <div className="overflow-y-scroll h-[90vh] p-6 text-white rounded-lg">
      <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">
        Generating Personalized Diet Plan
      </h1>
      {loading && (
        <div className="text-lg text-gray-300 text-center">Generating...</div>
      )}
      {generatedContent && (
        <div className="space-y-8">
          <div className="bg-gray-700 bg-opacity-30 p-6 rounded-lg">
            {/* Render the HTML content */}
            <div
              className="text-gray-300"
              dangerouslySetInnerHTML={{ __html: generatedContent }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Dietplan;
