// routes/blogRoutes.js
const express = require("express");
const Blog = require("../models/Blog");
const multer = require("multer");
const path = require("path");

const router = express.Router();


// ========================
// 📸 MULTER CONFIG
// ========================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

// 🔒 FILE FILTER (ONLY IMAGES)
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpg|jpeg|png|webp/;
  const isValid = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );

  if (isValid) cb(null, true);
  else cb(new Error("Only images are allowed"));
};

// 📦 LIMIT SIZE (2MB)
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 },
});


// ========================
// 📸 IMAGE UPLOAD
// ========================
router.post("/upload", upload.single("image"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    res.json({
      imageUrl: `http://localhost:5000/uploads/${req.file.filename}`,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// ========================
// 🤖 AI GENERATE
// ========================
router.post("/generate", async (req, res) => {
  try {
    const { topic } = req.body;

    if (!topic) {
      return res.status(400).json({ message: "Topic is required" });
    }

    const content = `✨ AI Generated Blog:

Title: ${topic}

This is a professional blog about ${topic}.
- Introduction
- Key Points
- Conclusion`;

    res.json({ content });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// ========================
// ➕ CREATE BLOG
// ========================
router.post("/", async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// ========================
// 📖 READ ALL BLOGS
// ========================
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// ========================
// 📖 READ SINGLE BLOG
// ========================
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// ========================
// ✏️ UPDATE BLOG
// ========================
router.put("/:id", async (req, res) => {
  try {
    const updated = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// ========================
// ❌ DELETE BLOG
// ========================
router.delete("/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;