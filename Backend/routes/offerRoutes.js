const express = require("express");
const router = express.Router();

// Sample offers (you can move to DB later)
router.get("/", (req, res) => {
  res.json([
    { id: 1, title: "50% Off Accounting", price: 499 },
    { id: 2, title: "SEO Package", price: 999 },
    { id: 3, title: "Website Development", price: 1999 },
  ]);
});

module.exports = router;