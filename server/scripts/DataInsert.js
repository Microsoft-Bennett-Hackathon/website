const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const fs = require("fs");
const path = require("path");
const Exercise = require("../models/exercise.model");
const Schedule = require("../models/schedule.model");

const MONGO_URI =
  "";

console.log(MONGO_URI);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const exercisesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/Exercises.json"), "utf-8")
);

const schedulesData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/Schedules.json"), "utf-8")
);

const insertData = async () => {
  try {
    await Exercise.insertMany(exercisesData);
    await Schedule.insertMany(schedulesData);
    console.log("Data inserted successfully!");
    mongoose.disconnect();
  } catch (error) {
    console.error("Error inserting data:", error);
    mongoose.disconnect();
  }
};

insertData();
