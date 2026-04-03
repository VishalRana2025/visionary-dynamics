const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
});

module.exports = mongoose.model("Offer", offerSchema);