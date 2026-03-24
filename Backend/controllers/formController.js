const Form = require("../models/Form");

// Create Form
exports.submitForm = async (req, res) => {
  try {
    const data = await Form.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Forms
exports.getForms = async (req, res) => {
  try {
    const data = await Form.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};