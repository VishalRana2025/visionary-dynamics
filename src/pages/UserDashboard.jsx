import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [offers, setOffers] = useState([]);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    fetchOffers();
    fetchPayments();
  }, []);

  // 🔥 GET OFFERS
  const fetchOffers = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/offers`
      );

      setOffers(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Offers error:", err);
      setOffers([]);
    }
  };

  // 🔥 GET PAYMENTS (FIXED)
  const fetchPayments = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/payment/history`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("PAYMENTS:", res.data);

      setPayments(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Payment error:", err);
      setPayments([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-6">
        Welcome, {user?.name} 👋
      </h1>

      {/* OFFERS */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔥 Available Offers</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.length > 0 ? (
            offers.map((offer) => (
              <div key={offer._id} className="bg-white p-5 rounded-xl shadow">
                <h3 className="font-bold text-lg">{offer.title}</h3>
                <p className="text-gray-600">{offer.description}</p>
                <p className="text-green-600 font-semibold mt-2">
                  ₹ {offer.price}
                </p>
              </div>
            ))
          ) : (
            <p>No offers available</p>
          )}
        </div>
      </div>

      {/* PAYMENT HISTORY */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">💳 Payment History</h2>

        <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-2">Date</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>

            <tbody>
              {payments.length > 0 ? (
                payments.map((pay) => (
                  <tr key={pay._id} className="border-b">
                    <td className="p-2">
                      {new Date(pay.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-2">₹ {pay.amount}</td>
                    <td className="p-2 text-green-600">
                      {pay.status || "Paid"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-2">No payments found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}