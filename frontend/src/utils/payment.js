import axios from "axios";

export const startPayment = async (plan) => {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/payment/create-checkout-session`,
      {
       plans: Array.isArray(plan) ? plan : [plan],
      }
    );
    console.log("API URL:", import.meta.env.VITE_API_URL);

    // 🔥 Redirect to Stripe Checkout Page
    window.location.href = data.url;

  } catch (err) {
    console.error("Payment Error:", err);
    alert("Payment failed");
  }
};