const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  Category: { type: String, required: true },
  TargetArea: { type: String, required: true },
  Equipment: { type: String, required: true },
  Level: { type: Number, required: true },
  Intensity: { type: Number, required: true },
  Difficulty: { type: String, required: true },
  Exercise: { type: String, required: true },
  Sets: { type: Number, required: true },
  Reps: { type: String, required: true },
  Description: { type: String, required: true },
  goal: { type: String, required: true },
  url: { type: String, required: false },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;
