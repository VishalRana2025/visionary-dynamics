const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    category: String,
    image: String,
    slug: { type: String, unique: true }, // ✅ slug added
  },
  { timestamps: true }
);

// ✅ Auto generate slug
blogSchema.pre("save", function (next) {
  if (this.title) {
    this.slug = this.title
      .toLowerCase()
      .trim()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }
  next();
});

module.exports = mongoose.model("Blog", blogSchema);