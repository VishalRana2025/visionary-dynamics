const express = require("express");
const router = express.Router();

const Payment = require("../models/Payment");
const auth = require("../middleware/auth");

// 💾 SAVE PAYMENT
router.post("/save", auth, async (req, res) => {
  try {
    const payment = await Payment.create({
      userId: req.user.id,
      amount: req.body.offer.price,
      offer: req.body.offer,
      paymentId: req.body.razorpay_payment_id,
      status: "Paid",
    });

    res.json(payment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving payment" });
  }
});

// 📜 GET HISTORY
router.get("/history", auth, async (req, res) => {
  try {
    const payments = await Payment.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: "Error fetching history" });
  }
});

// 📊 ANALYTICS
router.get("/analytics", async (req, res) => {
  try {
    const result = await Payment.aggregate([
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$amount" },
          count: { $sum: 1 },
        },
      },
    ]);

    res.json(result[0] || { totalAmount: 0, count: 0 });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching analytics" });
  }
});

module.exports = router;