const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/User");
const auth = require("../middleware/auth");
const roleMiddleware = require("../middleware/role"); // renamed to avoid conflict

const router = express.Router();


// 🔑 REGISTER
router.post("/register", async (req, res) => {
  try {
    console.log(req.body);

    const { name, email, password, adminCode } = req.body;

    const hashed = await bcrypt.hash(password, 10);

    let role = "user";

    // 🔐 Admin code check
    if (adminCode === "12345") {
      role = "admin";
    }

    const user = await User.create({
      name,
      email,
      password: hashed,
      role,
    });

    res.json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (err) {
    res.status(400).json({ message: "User already exists" });
  }
});


// 🔐 LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


// 👥 GET ALL USERS (ADMIN ONLY)
router.get("/users", auth, roleMiddleware("admin"), async (req, res) => {
  try {
    const users = await User.find().select("-password");

    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


// 🔴 GOOGLE LOGIN
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);


// 🔴 GOOGLE CALLBACK
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const token = jwt.sign(
      { id: req.user._id, role: req.user.role },
      process.env.JWT_SECRET
    );

    res.redirect(`http://localhost:5173/dashboard?token=${token}`);
  }
);


// 🔐 ADMIN TEST ROUTE
router.get("/admin", auth, roleMiddleware("admin"), (req, res) => {
  res.json({ message: "Admin only access" });
});


module.exports = router;