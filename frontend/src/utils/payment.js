import axios from "axios";

export const startPayment = async (plan) => {
  try {
    const { data } = await axios.post(
      "https://visionarydynamicsas.com/api/payment/create-checkout-session",
      {
        plans: Array.isArray(plan) ? plan : [plan],
      }
    );

    // 🔥 Redirect to Stripe Checkout
    window.location.href = data.url;

  } catch (err) {
    console.error("Payment Error:", err);
    alert("Payment failed ❌");
  }
};