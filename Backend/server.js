require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

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
// ✅ BODY PARSER (MUST BE FIRST)
// ========================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ========================
// ✅ CORS CONFIG (FIXED)
// ========================
app.use(cors({
  origin: function (origin, callback) {
    if (
      !origin || // allow Postman / mobile apps
      origin.includes("vercel.app") || // ✅ allow ALL Vercel deployments
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
    saveUninitialized: false, // ✅ better for production
    cookie: {
      secure: false, // ⚠️ set true if using HTTPS only
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
// 📦 ROUTES
// ========================
app.use("/api/form", require("./routes/formRoutes"));
app.use("/api/offers", require("./routes/offerRoutes"));
app.use("/api/payment", require("./routes/paymentRoutes"));
app.use("/api", require("./routes/authRoutes"));


// ========================
// 🧪 TEST ROUTE
// ========================
app.get("/", (req, res) => {
  res.send("API Running...");
});


// ========================
// 🚀 START SERVER
// ========================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});