const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const Exercise = require("./models/exercise.model");
const Schedule = require("./models/schedule.model");
const DietPreferences = require("./models/dietPreferencesSchema.model");

dotenv.config();
app.use(express.json());

app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) =>
    console.error("Error connecting to MongoDB:", error.message)
  );

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/exercises", async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.status(200).json(exercises);
  } catch (error) {
    console.error("Error fetching exercises:", error);
    res
      .status(500)
      .json({ message: "Error fetching exercises", error: error.message });
  }
});

app.put("/api/update-diet-preferences", async (req, res) => {
  const {
    goal,
    level,
    lastWeight,
    targetWeight,
    dietaryPreference,
    workoutFrequency,
    email,
  } = req.body;

  // Check if the email exists in the database
  try {
    let dietPreference = await DietPreferences.findOne({ email });

    if (dietPreference) {
      // Update existing document
      dietPreference.goal = goal;
      dietPreference.level = level;
      dietPreference.lastWeight = lastWeight;
      dietPreference.targetWeight = targetWeight;
      dietPreference.dietaryPreference = dietaryPreference;
      dietPreference.workoutFrequency = workoutFrequency;

      await dietPreference.save(); // Save the updated document

      return res
        .status(200)
        .json({ message: "Diet preferences updated successfully" });
    } else {
      // Create new document if none exists
      const newDietPreference = new DietPreferences({
        goal,
        level,
        lastWeight,
        targetWeight,
        dietaryPreference,
        workoutFrequency,
        email,
      });

      await newDietPreference.save(); // Save the new document
      return res
        .status(201)
        .json({ message: "Diet preferences created successfully" });
    }
  } catch (error) {
    console.error("Error updating/creating diet preferences:", error);
    return res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
});

app.get("/api/user-preferences", async (req, res) => {
  try {
    const userPreferences = await DietPreferences.find();
    res.status(200).json(userPreferences);
  } catch (error) {
    console.error("Error fetching user preferences:", error);
    res.status(500).json({
      message: "Error fetching user preferences",
      error: error.message,
    });
  }
});

app.get("/api/schedules", async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.status(200).json(schedules);
  } catch (error) {
    console.error("Error fetching schedules:", error);
    res
      .status(500)
      .json({ message: "Error fetching schedules", error: error.message });
  }
});

const port = 5001;
app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}`);
});
