import express from "express";
import User from "../models/User.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

// Get user profile
router.get("/profile", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
    console.log("User profile fetched:", user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Update user profile
router.put("/profile", auth, async (req, res) => {
  try {
    const { firstName, lastName, phone, address } = req.body;
    console.log("Updating user profile:", req.body);
    const user = await User.findById(req.user.id);
    console.log("Updating user profile for:", user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.profile = {
      firstName,
      lastName,
      phone,
      address,
    };

    const updatedProfile = await user.save();
    console.log("User profile updated:", updatedProfile);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
