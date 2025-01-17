import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js"; // Note the `.js` extension
import bcrypt from "bcryptjs"; // Import bcrypt to hash passwords

const router = express.Router();

router.post("/signup", async (req, res) => {
  const {
    name,
    email,
    password,
    age,
    weight,
    height,
    bodyFat,
    targetExercise = "",
  } = req.body;

  try {
    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).send({ message: "User already exists" });
    }

    // Create the new user
    const user = new User({
      name,
      email,
      password, // No need to hash here as it's done in pre-save middleware
      age,
      weight,
      height,
      bodyFat,
      targetExercise,
    });

    // Save the user to the database
    await user.save();

    res.status(201).send({ message: "User created successfully", user });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send({ message: "Error creating user" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    // Compare provided password with hashed password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).send({ message: "Invalid credentials" });
    }

    // Create and send JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.send({ token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send({ message: "Server error" });
  }
});

export default router;
