const express = require("express");
const router = express.Router();
const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/create-checkout-session", async (req, res) => {
  try {
    const { plans } = req.body;

    // ✅ Validation
    if (!plans || !Array.isArray(plans)) {
      return res.status(400).json({ error: "Invalid plans data" });
    }

    const line_items = plans.map((plan) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: plan.name || "Service",
        },
        unit_amount: Math.round(plan.price * 100),
      },
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,

      // ✅ FIXED LIVE URLS
      success_url: "https://visionarydynamicsas.com/success",
      cancel_url: "https://visionarydynamicsas.com/cancel",
    });

    res.json({ url: session.url });

  } catch (error) {
    console.error("Stripe Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;