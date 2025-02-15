import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Charts.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Sample progress data for progress cards
const progressData = [
  { label: "Weight Loss (kg)", value: 5, goal: 10 },
  { label: "Running Distance (km)", value: 30, goal: 50 },
  { label: "Workouts Completed", value: 15, goal: 20 },
];

// Steps tracker values
const stepsTaken = 7500;
const stepGoal = 10000;
const stepPercentage = (stepsTaken / stepGoal) * 100;

// Generate chart data for 30 days: x-axis is Day, y-axis is Calorie Streak
const chartDataArray = Array.from({ length: 30 }, (_, i) => ({
  day: `${i + 1}`,
  calories: Math.floor(Math.random() * 300) + 100, // calorie streak between 100 and 400
}));

// Prepare data for the Area Chart (notice fill: true)
const data = {
  labels: chartDataArray.map((d) => d.day),
  datasets: [
    {
      label: "Calorie Streak",
      data: chartDataArray.map((d) => d.calories),
      borderColor: "red",
      backgroundColor: "rgba(255, 0, 0, 0.5)",
      fill: true, // This makes it an Area Chart
      tension: 0.4,
      pointRadius: 4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Calorie Streak Area Chart" },
  },
  scales: {
    x: { title: { display: true, text: "" } },
    y: { title: { display: true, text: "Calorie Streak" } },
  },
};

const Charts = () => {
  return (
    <div className="chartsDashboard">
      {/* Fitness Tracker Section */}
      <div className="trackerWrapper">
        <h1 className="trackerTitle">🏋️ Fitness Progress Tracker</h1>
        <div className="horizontalTracker">
          {/* Progress Cards */}
          <div className="progressCardsContainer">
            {progressData.map((item, index) => (
              <div key={index} className="progressCard">
                <p className="cardLabel">{item.label}</p>
                <div className="cardProgressBar">
                  <div
                    className="cardProgressFill"
                    style={{
                      "--target-width": `${(item.value / item.goal) * 100}%`,
                    }}
                  ></div>
                </div>
                <p className="cardProgressText">
                  {item.value} / {item.goal}
                </p>
              </div>
            ))}
          </div>
          {/* Steps Tracker (Circular) */}
          <div className="stepsTrackerContainer">
            <h2 className="stepsTitle">🚶 Steps Taken</h2>
            <svg className="stepsCircleSvg" viewBox="0 0 120 120">
              {/* Background circle */}
              <circle
                className="stepsCircleBackground"
                cx="60"
                cy="60"
                r="50"
              />
              {/* Progress circle; uses CSS variable for target steps */}
              <circle
                className="stepsCircleProgress"
                cx="60"
                cy="60"
                r="50"
                style={{ "--target-steps": `${stepPercentage}` }}
              />
              {/* Centered text */}
              <text
                x="60"
                y="60"
                textAnchor="middle"
                dominantBaseline="middle"
                className="stepsCircleText"
              >
                {stepsTaken} / {stepGoal}
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* Calorie Chart Section as an Area Chart */}
      <div className="calorieChartSection" style={{padding:'0 70px 0 70px'}}>
        <h2 className="calorieChartTitle">🔥 Calorie Streak Area Chart</h2>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Charts;
