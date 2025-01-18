const mongoose = require("mongoose");

const dietPreferencesSchema = new mongoose.Schema({
  lastWeight: { type: Number, required: true },
  targetWeight: { type: Number, required: true },
  dietaryPreference: {
    type: String,
    enum: ["vegetarian", "non-vegetarian", "vegan"],
    required: true,
  },
  workoutFrequency: {
    type: String,
    enum: ["daily", "3-times-a-week", "4-times-a-week"],
    required: true,
  },
  goal: { type: String, required: true },
  level: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const DietPreferences = mongoose.model(
  "DietPreferences",
  dietPreferencesSchema
);

module.exports = DietPreferences;
