const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const Exercise = require("./models/exercise.model");
const Schedule = require("./models/schedule.model");
const User = require("../Authentication/models/user.model");

dotenv.config();
app.use(express.json());

app.use(cors());
console.log(User);
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
