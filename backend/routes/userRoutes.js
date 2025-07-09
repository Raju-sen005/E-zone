const express = require("express");
const router = express.Router();
const { signup, login, forgotPassword, resetPassword } = require("../controller/userController");

// router.post("/signup", signup);
// router.post("/login", login);
// router.post("/forgot-password", forgotPassword);
// router.post("/reset-password/:token", resetPassword);
// authRoutes.js
router.post("/register", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
  
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });
  
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  });
  
module.exports = router;
