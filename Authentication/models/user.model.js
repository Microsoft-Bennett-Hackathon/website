import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, default: null },
  weight: { type: Number, default: null },
  height: { type: Number, default: null },
  bodyFat: { type: String, default: null },
  targetExercise: { type: String, default: "" },

  selectedPlan: {
    title: { type: String, default: null },
    goal: { type: String, default: null },
    duration: { type: Number, default: null },
    level: { type: String, default: null },
  },
  dietPreferences: {
    dietaryPreference: { type: String, default: null },
    lastWeight: { type: Number, default: null },
    targetWeight: { type: Number, default: null },
    workoutFrequency: { type: String, default: null },
  },
});

// Hash the password before saving the user
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model("User", UserSchema);
