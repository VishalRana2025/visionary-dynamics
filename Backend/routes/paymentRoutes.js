// const express = require("express");
// const Razorpay = require("razorpay");
// const Payment = require("../models/Payment");
// const auth = require("../middleware/auth");

// const router = express.Router();

// 🔴 CREATE ORDER

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY,
//   key_secret: process.env.RAZORPAY_SECRET,
// });

// router.post("/create-order", async (req, res) => {
//   const { amount } = req.body;

//   const order = await razorpay.orders.create({
//     amount: amount * 100,
//     currency: "INR",
//   });

//   res.json(order);
// });


// ✅ SAVE PAYMENT (👉 YOUR CODE GOES HERE)
// router.post("/save", auth, async (req, res) => {
//   const payment = await Payment.create({
//     userId: req.user.id,
//     amount: req.body.offer.price,
//     offer: req.body.offer,
//     paymentId: req.body.razorpay_payment_id,
//   });

//   res.json(payment);
// });


// 📜 GET HISTORY
// router.get("/history", auth, async (req, res) => {
//   const payments = await Payment.find({ userId: req.user.id });
//   res.json(payments);
// });

// module.exports = router;



const express = require("express");
const router = express.Router();

const Payment = require("../models/Payment");
const auth = require("../middleware/auth");

// ✅ TEST ROUTE
router.get("/", (req, res) => {
  res.send("Payment route working ✅");
});


// 💾 SAVE PAYMENT
router.post("/save", auth, async (req, res) => {
  try {
    const payment = await Payment.create({
      userId: req.user.id,
      amount: req.body.offer.price,
      offer: req.body.offer,
      paymentId: req.body.razorpay_payment_id,
    });

    res.json(payment);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving payment" });
  }
});


// 📜 GET PAYMENT HISTORY
router.get("/history", auth, async (req, res) => {
  try {
    const payments = await Payment.find({ userId: req.user.id }).sort({ date: -1 });

    res.json(payments);

  } catch (err) {
    res.status(500).json({ message: "Error fetching history" });
  }
});

module.exports = router;