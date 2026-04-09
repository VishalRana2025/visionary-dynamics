import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const UserDashboard = () => {
  const [payments, setPayments] = useState([]);
  const [offers, setOffers] = useState([]);
  const [selectedPlans, setSelectedPlans] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  // 🔐 Protect route
  if (!user) {
    return <Navigate to="/login" />;
  }

  // 📊 Fetch payments
  useEffect(() => {
    if (user?._id) {
      axios
        .get(`http://localhost:5000/api/payment/history/${user._id}`)
        .then((res) => setPayments(res.data))
        .catch(console.log);
    }
  }, [user]);

  // 🎁 Offers
  useEffect(() => {
    axios.get("http://localhost:5000/api/offers")
      .then((res) => {
        if (res.data.length === 0) {
          setOffers([
            { _id: 1, title: "🔥 50% OFF", description: "Use SAVE50" },
            { _id: 2, title: "🎁 New User", description: "₹200 OFF" },
          ]);
        } else {
          setOffers(res.data);
        }
      });
  }, []);

  // 🛒 Toggle plans
  const togglePlan = (plan) => {
    if (selectedPlans.find((p) => p.id === plan.id)) {
      setSelectedPlans(selectedPlans.filter((p) => p.id !== plan.id));
    } else {
      setSelectedPlans([...selectedPlans, plan]);
    }
  };

  // 💰 Total
  const totalAmount = selectedPlans.reduce((sum, p) => sum + p.price, 0);

  // 💳 Multi-payment
const handleMultiPayment = async () => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/payment/create-checkout-session",
      {
        plans: selectedPlans.map((p) => ({
          name: p.name,
          price: Number(p.price), // ✅ FIX
        })),
        userId: user._id,
      }
    );

    window.location.href = res.data.url;
  } catch (err) {
    console.log("❌ Payment Error:", err.response?.data || err.message);
  }
};

  // 📊 Chart data
  const chartData = payments.map((p) => ({
    date: new Date(p.createdAt).toLocaleDateString(),
    amount: p.amount,
  }));

  const totalSpent = payments.reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1F3A] to-black p-6 text-white">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* HEADER */}
        <div className="bg-white/10 p-6 rounded-2xl">
          <h1 className="text-3xl font-bold">Welcome {user.name}</h1>
          <p>Total Spent: ₹{totalSpent}</p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* 🎁 OFFERS */}
          <div className="bg-white/10 p-6 rounded-2xl">
            <h2 className="mb-4">Offers 🎁</h2>

            {offers.map((offer) => (
              <div key={offer._id} className="bg-yellow-400 text-black p-3 mb-2 rounded">
                <p>{offer.title}</p>
                <p>{offer.description}</p>
              </div>
            ))}
          </div>

          {/* 📊 HISTORY */}
          <div className="bg-white/10 p-6 rounded-2xl">
            <h2 className="mb-4">History</h2>

            {payments.map((p) => (
              <div key={p._id} className="flex justify-between mb-2">
                <span>₹{p.amount}</span>
                <span>{p.status}</span>
              </div>
            ))}
          </div>

        </div>

        {/* 📈 CHART */}
        <div className="bg-white/10 p-6 rounded-2xl">
          <h2 className="mb-4">Analytics</h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="date" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Bar dataKey="amount" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

export default UserDashboard;