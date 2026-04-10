require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

// DB
const connectDB = require("./config/db");

// Routes
const paymentRoutes = require("./Backend/routes/paymentRoutes");
const blogRoutes = require("./Backend/routes/blogRoutes");

// Auth
const session = require("express-session");
const passport = require("passport");
require("./config/passport");

const app = express();

// ========================
// ✅ CONNECT DATABASE
// ========================
connectDB();

// ========================
// ✅ CORS (MUST BE FIRST)
// ========================
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));


// ========================
// ✅ BODY PARSER
// ========================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ========================
// 🔐 SESSION
// ========================
app.use(
  session({
    secret: process.env.SESSION_SECRET || "super_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
    },
  })
);

// ========================
// 🔐 PASSPORT
// ========================
app.use(passport.initialize());
app.use(passport.session());

// ========================
// 📦 ROUTES
// ========================
app.use("/api/blogs", blogRoutes);   // ✅ ONLY ONCE
app.use("/api/form", require("./Backend/routes/formRoutes"));
app.use("/api/offers", require("./Backend/routes/offerRoutes"));
app.use("/api/payment", paymentRoutes);
app.use("/api", require("./Backend/routes/authRoutes"));
app.use("/uploads", express.static("uploads"));

// ========================
// 📸 STATIC UPLOADS
// ========================
app.use("/uploads", express.static("uploads"));

// ========================
// 🌐 SERVE FRONTEND
// ========================
const distPath = path.join(__dirname, "dist");

app.use(express.static(distPath));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// ========================
// 🚀 START SERVER
// ========================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});