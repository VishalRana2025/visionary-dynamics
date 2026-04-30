const express = require("express");
const Blog = require("../models/Blog");
const multer = require("multer");
const path = require("path");
const slugify = require("slugify");

const router = express.Router();

// ========================
// 📸 MULTER CONFIG
// ========================
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = /jpg|jpeg|png|webp/;
  const valid = allowed.test(path.extname(file.originalname).toLowerCase());
  valid ? cb(null, true) : cb(new Error("Only images allowed"));
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 },
});

// ========================
// 📸 IMAGE UPLOAD (SAFE)
// ========================
router.post("/upload", upload.single("image"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const baseUrl = `${req.protocol}://${req.get("host")}`;

    res.json({
      imageUrl: `${baseUrl}/uploads/${req.file.filename}`,
    });

  } catch (err) {
    console.error("UPLOAD ERROR:", err);
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
      return res.status(400).json({ message: "Topic required" });
    }

    const content = `
# ${topic}

## Introduction
This blog explains ${topic} in a simple way.

## Key Points
- Point 1
- Point 2
- Point 3

## Conclusion
Now you understand ${topic}.
`;

    res.json({ content });

  } catch (err) {
    console.error("AI GENERATE ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

// ========================
// ➕ CREATE BLOG (FIXED)
// ========================
router.post("/", async (req, res) => {
  try {
    const { title, content, category, image, metaTitle, metaDescription, imageAlt } = req.body;

    // ✅ Validation
    if (!title || !content) {
      return res.status(400).json({
        message: "Title and content are required",
      });
    }

    // ✅ Unique slug (prevents duplicate error)
   const slug = slugify(title, {
  lower: true,
  strict: true,
});

const existing = await Blog.findOne({ slug });

if (existing) {
  return res.status(400).json({
    message: "Blog with same title already exists",
  });
}

// 🔥 AUTO FORMAT CONTENT TO MARKDOWN
const lines = content.split("\n").map(l => l.trim()).filter(Boolean);

// First line = intro
const intro = lines[0] || "";

// Next lines = key points
const points = lines.slice(1, 6);

// Remaining = detailed
const rest = lines.slice(6).join(" ");

const formattedContent = `
# ${title}

## Introduction
${intro}

## Key Points
${points.map(p => `- ${p}`).join("\n")}

## Details
${rest}

## Conclusion
This concludes ${title}.
`;

const blog = await Blog.create({
  title,
  slug,
  content,
  category,
  image,
  metaTitle,
  metaDescription,
  imageAlt,
  excerpt: content.slice(0, 150),
});
    res.status(201).json(blog);

  } catch (err) {
    console.error("CREATE BLOG ERROR:", err); // 🔥 Important
    res.status(500).json({ message: err.message });
  }
});

// ========================
// 📖 READ ALL BLOGS (WITH PAGINATION)
// ========================
router.get("/", async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = 6;

    const blogs = await Blog.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Blog.countDocuments();

    res.json({
      blogs,
      totalPages: Math.ceil(total / limit),
    });

  } catch (err) {
    console.error("GET BLOGS ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

// ========================
// 📖 READ SINGLE BLOG (BY SLUG)
// ========================
router.get("/slug/:slug", async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(blog);

  } catch (err) {
    console.error("GET SINGLE BLOG ERROR:", err);
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
    console.error("UPDATE BLOG ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

// ========================
// ❌ DELETE BLOG
// ========================
router.delete("/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });

  } catch (err) {
    console.error("DELETE BLOG ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;