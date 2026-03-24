const express = require("express");
const router = express.Router();
const { submitForm, getForms } = require("../controllers/formController");

router.post("/submit", submitForm);
router.get("/all", getForms);

module.exports = router;