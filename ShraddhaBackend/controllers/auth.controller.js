import User from "../models/User.js";
import jwt from "jsonwebtoken";

// =============== SIGNUP ===============
export const signup = async (req, res) => {
  try {
    const {
      accountType,
      email,
      password,
      repeatPassword,
      fullName,
      fatherName,
      motherName,
      gender,
      dateOfBirth,
      mobileCode,
      mobileNumber,
      country,
      state,
      city,
      postalCode,
      streetAddress,
      termsAccepted,
      privacyAccepted
    } = req.body;

    if (!accountType || !email || !password || !repeatPassword || !fullName || !termsAccepted || !privacyAccepted) {
      return res.status(400).json({ success: false, message: "Please fill all required fields" });
    }

    if (password !== repeatPassword) {
      return res.status(400).json({ success: false, message: "Passwords do not match" });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ success: false, message: "User already exists" });
    }

    // ✅ Save raw password — hashing is handled by schema
    const user = await User.create({
      accountType,
      email,
      password,
      fullName,
      fatherName,
      motherName,
      gender,
      dateOfBirth,
      mobileCode,
      mobileNumber,
      country,
      state,
      city,
      postalCode,
      streetAddress,
      termsAccepted,
      privacyAccepted,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: { id: user._id, email: user.email, fullName: user.fullName },
    });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// =============== LOGIN ===============
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Please enter all fields" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: "User does not exist" });
    }

    // ✅ Compare password properly
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    // ✅ Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "mySuperSecretKey", {
      expiresIn: "1d",
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      user: {
        ...user._doc,
        dateOfBirth: user.dateOfBirth
          ? user.dateOfBirth.toISOString().split("T")[0]
          : null,
      },
    });
  } catch (error) {
    console.error("Get Profile Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};