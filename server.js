require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const path = require("path");

// DB
const connectDB = require("./config/db");

// Routes
const paymentRoutes = require("./routes/paymentRoutes");
const blogRoutes = require("./routes/blogRoutes");

// Auth
const session = require("express-session");
const passport = require("passport");
require("./config/passport");

const { SitemapStream, streamToPromise } = require("sitemap");
const routes = require("./config/routes");
const Blog = require("./models/Blog");

// ========================
// ✅ CONNECT DATABASE
// ========================
connectDB();

// ========================
// ✅ MIDDLEWARE
// ========================

// 🔥 FIXED CORS
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://visionarydynamicsas.com"
  ],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ========================
// 🔐 SESSION + PASSPORT
// ========================
app.use(
  session({
    secret: process.env.SESSION_SECRET || "super_secret_key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// ========================
// 📦 API ROUTES
// ========================
app.use("/api/blogs", blogRoutes);
app.use("/api/form", require("./routes/formRoutes"));
app.use("/api/testimonials", require("./routes/testimonialRoutes"));
app.use("/api/offers", require("./routes/offerRoutes"));
app.use("/api/payment", paymentRoutes);
app.use("/api", require("./routes/authRoutes"));

// ✅ TEST ROUTE (IMPORTANT)
app.get("/api", (req, res) => {
  res.send("API is running...");
});

// ========================
// 📸 STATIC FILES
// ========================
app.use("/uploads", express.static("uploads"));

const distPath = path.join(__dirname, "dist");
app.use(express.static(distPath));

// ========================
// 🧠 SITEMAP
// ========================
app.get("/sitemap.xml", async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: "https://visionarydynamicsas.com",
    });

    routes.forEach((route) => {
      smStream.write({
        url: route,
        changefreq: "weekly",
        priority: 0.8,
      });
    });

    const blogs = await Blog.find();

    blogs.forEach((blog) => {
      if (blog.slug) {
        smStream.write({
          url: `/blog/${blog.slug}`,
          lastmod: blog.updatedAt,
          changefreq: "weekly",
          priority: 0.7,
        });
      }
    });

    smStream.end();
    const sitemap = await streamToPromise(smStream);

    res.header("Content-Type", "application/xml");
    res.send(sitemap.toString());

  } catch (error) {
    console.error("Sitemap Error:", error);
    res.status(500).end();
  }
});

// ========================
// 🌐 FRONTEND ROUTE
// ========================
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api")) return next();
  res.sendFile(path.resolve(distPath, "index.html"));
});

// ========================
// 🚀 START SERVER
// ========================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});