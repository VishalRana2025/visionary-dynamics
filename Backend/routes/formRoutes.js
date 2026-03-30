const express = require("express");
const router = express.Router();
const Form = require("../models/Form");

// POST: Save form
router.post("/", async (req, res) => {
  try {
    const { type, name, email, phone, message } = req.body;

    const newForm = new Form({
      type,
      name,
      email,
      phone,
      message,
    });

    await newForm.save();

    res.status(200).json({ message: "Form saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error saving form" });
  }
});

// GET: Fetch all forms
router.get("/", async (req, res) => {
  try {
    const forms = await Form.find().sort({ createdAt: -1 });
    res.json(forms);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
});

module.exports = router;