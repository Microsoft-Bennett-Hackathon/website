const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  schedule: {
    Monday: { type: String, required: true },
    Tuesday: { type: String, required: true },
    Wednesday: { type: String, required: true },
    Thursday: { type: String, required: true },
    Friday: { type: String, required: true },
    Saturday: { type: String, required: true },
  },
  goal: { type: String, required: true },
  days: { type: Number, required: true },
  level: { type: String, required: true },
});

const Schedule = mongoose.model("Schedule", scheduleSchema);
module.exports = Schedule;
