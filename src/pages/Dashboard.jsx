import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [offers, setOffers] = useState([]);
  const [payments, setPayments] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const decoded = jwtDecode(token);
    setUser(decoded);

    // 🔹 FETCH OFFERS
    axios
      .get("http://localhost:5000/api/offers")
      .then((res) => setOffers(res.data));

    // 🔹 FETCH PAYMENT HISTORY
    axios
      .get("http://localhost:5000/api/payment/history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setPayments(res.data));
  }, []);

  // 💳 PAYMENT FUNCTION
  const handlePayment = async (offer) => {
    try {
      alert("Simulated Payment Success ✅");

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

      // 🔄 refresh history
      const res = await axios.get(
        "http://localhost:5000/api/payment/history",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPayments(res.data);

    } catch (err) {
      alert("Payment failed ❌");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="p-10 space-y-10">

      {/* 👤 USER INFO */}
      <div className="bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold">
          Welcome {user?.role === "admin" ? "Admin 👑" : "User 👋"}
        </h1>

        <p className="text-gray-500 mt-2">
          Role: {user?.role}
        </p>

        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* 🎁 OFFERS */}
      <div>
        <h2 className="text-xl font-bold mb-4">Offers 🎁</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {offers.map((offer) => (
            <div key={offer.id} className="border p-4 rounded">
              <h3 className="font-semibold">{offer.title}</h3>
              <p className="text-gray-600">₹{offer.price}</p>

              <button
                onClick={() => handlePayment(offer)}
                className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 💳 PAYMENT HISTORY */}
      <div>
        <h2 className="text-xl font-bold mb-4">
          Payment History 💳
        </h2>

        {payments.length === 0 ? (
          <p>No payments yet</p>
        ) : (
          <div className="space-y-2">
            {payments.map((p) => (
              <div
                key={p._id}
                className="border p-3 rounded flex justify-between"
              >
                <span>{p.offer.title}</span>
                <span>₹{p.amount}</span>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}