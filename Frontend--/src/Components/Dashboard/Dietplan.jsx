// import React from "react";

// const Dietplan = () => {
//   return (
//     <div className="overflow-y-scroll h-[90vh] p-6  text-white rounded-lg shadow-lg">
//       <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">
//         Gym Athlete's Diet Plan
//       </h1>
//       <p className="text-lg text-gray-300 mb-6 text-center">
//         This diet plan is designed to support an active athlete with high energy
//         needs, helping build muscle and maintain peak performance.
//       </p>

//       <div className="space-y-8">
//         <div>
//           <h2 className="text-2xl font-semibold text-gray-200">
//             Meal 1: Breakfast
//           </h2>
//           <p className="text-md text-gray-400 mb-2">
//             <strong>Meal Type:</strong> High-protein, moderate carbs, healthy
//             fats
//           </p>
//           <ul className="list-disc pl-5 space-y-2 text-gray-300">
//             <li>4 egg whites, 2 whole eggs scrambled (protein)</li>
//             <li>
//               1 cup of oatmeal with almond butter (carbs and healthy fats)
//             </li>
//             <li>1 banana (natural sugars and potassium)</li>
//             <li>1 glass of water with lemon (hydration)</li>
//           </ul>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold text-gray-200">
//             Meal 2: Mid-Morning Snack
//           </h2>
//           <p className="text-md text-gray-400 mb-2">
//             <strong>Meal Type:</strong> Protein and healthy fats
//           </p>
//           <ul className="list-disc pl-5 space-y-2 text-gray-300">
//             <li>1 protein shake (20-30g protein)</li>
//             <li>Handful of almonds or mixed nuts (healthy fats)</li>
//             <li>1 apple (natural sugars and fiber)</li>
//           </ul>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold text-gray-200">
//             Meal 3: Lunch
//           </h2>
//           <p className="text-md text-gray-400 mb-2">
//             <strong>Meal Type:</strong> Lean protein, complex carbs, fiber
//           </p>
//           <ul className="list-disc pl-5 space-y-2 text-gray-300">
//             <li>Grilled chicken breast (6 oz) (protein)</li>
//             <li>Brown rice or quinoa (1 cup) (complex carbs)</li>
//             <li>Steamed broccoli or spinach (fiber, vitamins)</li>
//             <li>1 tablespoon of olive oil (healthy fats)</li>
//             <li>1 glass of water</li>
//           </ul>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold text-gray-200">
//             Meal 4: Pre-Workout Snack
//           </h2>
//           <p className="text-md text-gray-400 mb-2">
//             <strong>Meal Type:</strong> Simple carbs, moderate protein
//           </p>
//           <ul className="list-disc pl-5 space-y-2 text-gray-300">
//             <li>
//               1 slice of whole-grain bread with peanut butter (complex carbs,
//               healthy fats)
//             </li>
//             <li>1 protein shake (20g protein)</li>
//             <li>1 small orange (natural sugars, vitamins)</li>
//           </ul>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold text-gray-200">
//             Meal 5: Post-Workout Meal
//           </h2>
//           <p className="text-md text-gray-400 mb-2">
//             <strong>Meal Type:</strong> High-protein, fast-acting carbs
//           </p>
//           <ul className="list-disc pl-5 space-y-2 text-gray-300">
//             <li>1 scoop of whey protein (25-30g protein)</li>
//             <li>1 banana or rice cakes (fast-acting carbs)</li>
//             <li>1 glass of water</li>
//           </ul>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold text-gray-200">
//             Meal 6: Dinner
//           </h2>
//           <p className="text-md text-gray-400 mb-2">
//             <strong>Meal Type:</strong> Lean protein, fiber, healthy fats
//           </p>
//           <ul className="list-disc pl-5 space-y-2 text-gray-300">
//             <li>Salmon or tuna (6 oz) (protein and omega-3 fats)</li>
//             <li>Sweet potato (1 medium) (complex carbs)</li>
//             <li>Steamed asparagus or zucchini (fiber, antioxidants)</li>
//             <li>1 tablespoon of olive oil or coconut oil (healthy fats)</li>
//             <li>1 glass of water</li>
//           </ul>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold text-gray-200">
//             Meal 7: Evening Snack
//           </h2>
//           <p className="text-md text-gray-400 mb-2">
//             <strong>Meal Type:</strong> Light protein, healthy fats
//           </p>
//           <ul className="list-disc pl-5 space-y-2 text-gray-300">
//             <li>
//               Cottage cheese (1 cup) or Greek yogurt (protein and probiotics)
//             </li>
//             <li>1 tablespoon of chia seeds (omega-3 fatty acids)</li>
//             <li>Handful of walnuts or pistachios (healthy fats)</li>
//             <li>1 glass of water or herbal tea</li>
//           </ul>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold text-gray-200">
//             Hydration Tips
//           </h2>
//           <ul className="list-disc pl-5 space-y-2 text-gray-300">
//             <li>
//               Drink at least 3-4 liters of water throughout the day to stay
//               hydrated.
//             </li>
//             <li>
//               Consider drinking an electrolyte beverage after intense workouts.
//             </li>
//           </ul>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold text-gray-200">
//             Supplements (Optional)
//           </h2>
//           <ul className="list-disc pl-5 space-y-2 text-gray-300">
//             <li>Whey protein (for post-workout recovery)</li>
//             <li>Creatine (for muscle building and performance)</li>
//             <li>Branched-Chain Amino Acids (BCAAs) (for muscle recovery)</li>
//             <li>Multivitamins (for overall health and immunity)</li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-xl font-semibold text-gray-200">Notes:</h3>
//           <p className="text-md text-gray-400">
//             This diet is customizable depending on the athlete’s specific goals
//             (e.g., cutting or bulking), activity level, and body composition.
//             Always consult with a nutritionist or dietitian to ensure the plan
//             meets your specific needs.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dietplan;

import React from "react";

const Dietplan = () => {
  return (
    <div className="overflow-y-scroll h-[90vh] p-6 text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">
        Gym Athlete's Diet Plan
      </h1>
      <p className="text-lg text-gray-300 mb-6 text-center">
        This diet plan is designed to support an active athlete with high energy
        needs, helping build muscle and maintain peak performance.
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-200">
            Meal 1: Breakfast
          </h2>
          <p className="text-md text-gray-400 mb-2">
            <strong>Meal Type:</strong> High-protein, moderate carbs, healthy
            fats
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>4 egg whites, 2 whole eggs scrambled (protein)</li>
            <li>
              1 cup of oatmeal with almond butter (carbs and healthy fats)
            </li>
            <li>1 banana (natural sugars and potassium)</li>
            <li>1 glass of water with lemon (hydration)</li>
          </ul>
          <p className="text-md text-gray-400">
            <strong>Macronutrients:</strong> Protein: 30g, Carbs: 45g, Fats: 15g
          </p>
          <p className="text-md text-gray-400">
            <strong>Micronutrients:</strong> Vitamin A, Vitamin C, Potassium,
            Magnesium
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-200">
            Meal 2: Mid-Morning Snack
          </h2>
          <p className="text-md text-gray-400 mb-2">
            <strong>Meal Type:</strong> Protein and healthy fats
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>1 protein shake (20-30g protein)</li>
            <li>Handful of almonds or mixed nuts (healthy fats)</li>
            <li>1 apple (natural sugars and fiber)</li>
          </ul>
          <p className="text-md text-gray-400">
            <strong>Macronutrients:</strong> Protein: 25g, Carbs: 20g, Fats: 15g
          </p>
          <p className="text-md text-gray-400">
            <strong>Micronutrients:</strong> Vitamin E, Vitamin C, Calcium, Iron
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-200">
            Meal 3: Lunch
          </h2>
          <p className="text-md text-gray-400 mb-2">
            <strong>Meal Type:</strong> Lean protein, complex carbs, fiber
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Grilled chicken breast (6 oz) (protein)</li>
            <li>Brown rice or quinoa (1 cup) (complex carbs)</li>
            <li>Steamed broccoli or spinach (fiber, vitamins)</li>
            <li>1 tablespoon of olive oil (healthy fats)</li>
            <li>1 glass of water</li>
          </ul>
          <p className="text-md text-gray-400">
            <strong>Macronutrients:</strong> Protein: 35g, Carbs: 50g, Fats: 20g
          </p>
          <p className="text-md text-gray-400">
            <strong>Micronutrients:</strong> Vitamin A, Vitamin K, Folate, Iron
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-200">
            Meal 4: Pre-Workout Snack
          </h2>
          <p className="text-md text-gray-400 mb-2">
            <strong>Meal Type:</strong> Simple carbs, moderate protein
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>
              1 slice of whole-grain bread with peanut butter (complex carbs,
              healthy fats)
            </li>
            <li>1 protein shake (20g protein)</li>
            <li>1 small orange (natural sugars, vitamins)</li>
          </ul>
          <p className="text-md text-gray-400">
            <strong>Macronutrients:</strong> Protein: 25g, Carbs: 40g, Fats: 18g
          </p>
          <p className="text-md text-gray-400">
            <strong>Micronutrients:</strong> Vitamin C, Vitamin B6, Potassium
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-200">
            Meal 5: Post-Workout Meal
          </h2>
          <p className="text-md text-gray-400 mb-2">
            <strong>Meal Type:</strong> High-protein, fast-acting carbs
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>1 scoop of whey protein (25-30g protein)</li>
            <li>1 banana or rice cakes (fast-acting carbs)</li>
            <li>1 glass of water</li>
          </ul>
          <p className="text-md text-gray-400">
            <strong>Macronutrients:</strong> Protein: 30g, Carbs: 40g, Fats: 5g
          </p>
          <p className="text-md text-gray-400">
            <strong>Micronutrients:</strong> Vitamin C, Potassium
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-200">
            Meal 6: Dinner
          </h2>
          <p className="text-md text-gray-400 mb-2">
            <strong>Meal Type:</strong> Lean protein, fiber, healthy fats
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Salmon or tuna (6 oz) (protein and omega-3 fats)</li>
            <li>Sweet potato (1 medium) (complex carbs)</li>
            <li>Steamed asparagus or zucchini (fiber, antioxidants)</li>
            <li>1 tablespoon of olive oil or coconut oil (healthy fats)</li>
            <li>1 glass of water</li>
          </ul>
          <p className="text-md text-gray-400">
            <strong>Macronutrients:</strong> Protein: 35g, Carbs: 40g, Fats: 25g
          </p>
          <p className="text-md text-gray-400">
            <strong>Micronutrients:</strong> Omega-3, Vitamin A, Vitamin C, Iron
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-200">
            Meal 7: Evening Snack
          </h2>
          <p className="text-md text-gray-400 mb-2">
            <strong>Meal Type:</strong> Light protein, healthy fats
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>
              Cottage cheese (1 cup) or Greek yogurt (protein and probiotics)
            </li>
            <li>1 tablespoon of chia seeds (omega-3 fatty acids)</li>
            <li>Handful of walnuts or pistachios (healthy fats)</li>
            <li>1 glass of water or herbal tea</li>
          </ul>
          <p className="text-md text-gray-400">
            <strong>Macronutrients:</strong> Protein: 15g, Carbs: 12g, Fats: 20g
          </p>
          <p className="text-md text-gray-400">
            <strong>Micronutrients:</strong> Omega-3, Calcium, Magnesium, Zinc
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-200">
            Hydration Tips
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>
              Drink at least 3-4 liters of water throughout the day to stay
              hydrated.
            </li>
            <li>
              Consider drinking an electrolyte beverage after intense workouts.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-200">
            Supplements (Optional)
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Whey protein (for post-workout recovery)</li>
            <li>Creatine (for muscle building and performance)</li>
            <li>Branched-Chain Amino Acids (BCAAs) (for muscle recovery)</li>
            <li>Multivitamins (for overall health and immunity)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-200">Notes:</h3>
          <p className="text-md text-gray-400">
            This diet is customizable depending on the athlete’s specific goals
            (e.g., cutting or bulking), activity level, and body composition.
            Always consult with a nutritionist or dietitian to ensure the plan
            meets personal needs and health conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dietplan;
