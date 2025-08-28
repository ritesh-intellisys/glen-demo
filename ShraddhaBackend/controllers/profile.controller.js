import Profile from "../models/Profile.js";
import User from "../models/User.js";

export const saveProfile = async (req, res) => {
  try {
    const {
      email,
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
      accountName,
      bankAccount,
      bankAddress,
      swiftCode,
      bankName,
    } = req.body;

    // ✅ Get user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // ✅ Handle uploaded documents
    const panDocument = req.files?.panDocument
      ? req.files.panDocument[0].filename
      : null;
    const aadharFront = req.files?.aadharFront
      ? req.files.aadharFront[0].filename
      : null;
    const aadharBack = req.files?.aadharBack
      ? req.files.aadharBack[0].filename
      : null;

    // ✅ Upsert profile (create or update)
    const profile = await Profile.findOneAndUpdate(
      { user: user._id },
      {
        user: user._id,
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
        accountName,
        bankAccount,
        bankAddress,
        swiftCode,
        bankName,
        ...(panDocument && { panDocument }),
        ...(aadharFront && { aadharFront }),
        ...(aadharBack && { aadharBack }),
      },
      { upsert: true, new: true }
    );

    res.status(200).json({ success: true, message: "Profile saved successfully", profile });
  } catch (error) {
    console.error("Profile Save Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
