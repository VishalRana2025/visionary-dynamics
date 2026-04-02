require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// 🔐 NEW IMPORTS
const session = require("express-session");
const passport = require("passport");

// 🔐 INIT PASSPORT CONFIG
require("./config/passport");

const app = express();

// Connect MongoDB
connectDB();

// Middleware
const allowedOrigins = [
  "http://localhost:5173",
  "https://visionary-dynamics-krvj9cdyu-visionary-dynamics-projects.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

// 🔐 SESSION (required for Google OAuth)
app.use(
  session({
    secret: "secret_key",
    resave: false,
    saveUninitialized: true,
  })
);

// 🔐 PASSPORT INIT
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/form", require("./routes/formRoutes"));
app.use("/api/offers", require("./routes/offerRoutes"));
app.use("/api/payment", require("./routes/paymentRoutes"));

// ✅ AUTH ROUTES (LOGIN + GOOGLE)
app.use("/api", require("./routes/authRoutes"));

// Test route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);