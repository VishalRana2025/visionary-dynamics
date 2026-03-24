const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  phone: String,
  company: String,
  service: String,
  message: String,
}, { timestamps: true });

module.exports = mongoose.model("Form", formSchema);