import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js"; // Note the `.js` extension
import bcrypt from "bcryptjs"; // Import bcrypt to hash passwords

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  // Check if the user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).send({ message: "User already exists" });
  }

  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = new User({ name, email, password: password });
    await user.save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error creating user" });
  }
});

// Login Route
// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }

    console.log("User password from DB:", user.password); // Log the hashed password stored in DB
    console.log("Password provided:", password); // Log the password provided during login

    const match = await bcrypt.compare(password, user.password);
    console.log("Password match:", match);
    if (!match) {
      return res.status(400).send({ message: "Invalid credentials" });
    }

    // Create JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.send({ token });
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).send({ message: "Server error" });
  }
});

export default router;