require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

// 🔐 AUTH / SESSION
const session = require("express-session");
const passport = require("passport");

// 🔐 INIT PASSPORT CONFIG
require("./config/passport");

const app = express();

// ========================
// ✅ CONNECT DATABASE
// ========================
connectDB();

// ========================
// ✅ BODY PARSER
// ========================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ========================
// ✅ CORS CONFIG (FIXED)
// ========================
app.use(cors({
  origin: function (origin, callback) {
    if (
      !origin ||
      origin.includes("vercel.app") ||
      origin.includes("azurewebsites.net") || // ✅ ADD THIS FOR AZURE
      origin === "http://localhost:5173"
    ) {
      callback(null, true);
    } else {
      console.log("❌ Blocked by CORS:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

// ========================
// 🔐 SESSION CONFIG
// ========================
app.use(
  session({
    secret: process.env.SESSION_SECRET || "super_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // ⚠️ Azure uses HTTPS → can set true later
      httpOnly: true,
    },
  })
);

// ========================
// 🔐 PASSPORT INIT
// ========================
app.use(passport.initialize());
app.use(passport.session());

// ========================
// 📦 API ROUTES
// ========================
app.use("/api/form", require("./routes/formRoutes"));
app.use("/api/offers", require("./routes/offerRoutes"));
app.use("/api/payment", require("./routes/paymentRoutes"));
app.use("/api", require("./routes/authRoutes"));

// ========================
// 🌐 SERVE FRONTEND (IMPORTANT)
// ========================
app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// ========================
// 🚀 START SERVER
// ========================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});