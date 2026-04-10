// models/Blog.js
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    category: String,
    image: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);