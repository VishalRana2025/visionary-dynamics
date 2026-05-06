import { useEffect, useState } from "react";
import axios from "axios";

export default function Offers() {
  const [offers, setOffers] = useState([]);

  // 💳 PAYMENT FUNCTION
  const handlePayment = async (offer) => {
    try {
      alert("Simulated Payment Success ✅");

      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/api/payment/save",
        {
          offer,
          razorpay_payment_id: "fake_payment_123",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Payment Saved ✅");

    } catch (err) {
      console.error(err);
      alert("Payment failed ❌");
    }
  };

  // 📦 FETCH OFFERS
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/offers")
      .then((res) => setOffers(res.data));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-6">Offers 🎁</h1>

      {offers.map((offer) => (
        <div key={offer.id} className="p-4 border mb-3 rounded">
          <h2>{offer.title}</h2>
          <p>${offer.price}</p>

          <button
            onClick={() => handlePayment(offer)}
            className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
}