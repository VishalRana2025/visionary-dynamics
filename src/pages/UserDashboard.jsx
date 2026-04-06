import React from "react";
import { CreditCard, Gift, History } from "lucide-react";

const UserDashboard = () => {
  const offers = [
    { id: 1, title: "50% Off Premium Plan", expiry: "30 Apr 2026" },
    { id: 2, title: "Flat ₹500 Cashback", expiry: "15 May 2026" },
  ];

  const paymentMethods = [
    { id: 1, type: "Visa", last4: "4242" },
    { id: 2, type: "MasterCard", last4: "8899" },
  ];

  const paymentHistory = [
    { id: 1, date: "01 Apr 2026", amount: "₹999", status: "Success" },
    { id: 2, date: "20 Mar 2026", amount: "₹499", status: "Success" },
    { id: 3, date: "05 Mar 2026", amount: "₹199", status: "Failed" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* HEADER */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome Back 👋
          </h1>
          <p className="text-gray-500">Manage your account & payments</p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* OFFERS */}
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center gap-2 mb-4">
              <Gift className="text-blue-500" />
              <h2 className="text-lg font-semibold">Offers</h2>
            </div>

            {offers.map((offer) => (
              <div
                key={offer.id}
                className="border rounded-xl p-4 mb-3 hover:bg-gray-50 transition"
              >
                <p className="font-medium">{offer.title}</p>
                <p className="text-sm text-gray-500">
                  Expires: {offer.expiry}
                </p>
              </div>
            ))}
          </div>

          {/* PAYMENT METHODS */}
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="text-green-500" />
              <h2 className="text-lg font-semibold">Payment Methods</h2>
            </div>

            {paymentMethods.map((card) => (
              <div
                key={card.id}
                className="flex justify-between items-center border rounded-xl p-4 mb-3"
              >
                <div>
                  <p className="font-medium">{card.type}</p>
                  <p className="text-sm text-gray-500">
                    **** {card.last4}
                  </p>
                </div>
                <button className="text-red-500 text-sm">Remove</button>
              </div>
            ))}

            <button className="w-full mt-2 bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600">
              + Add Payment Method
            </button>
          </div>

          {/* PAYMENT HISTORY */}
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center gap-2 mb-4">
              <History className="text-purple-500" />
              <h2 className="text-lg font-semibold">Payment History</h2>
            </div>

            <div className="space-y-3">
              {paymentHistory.map((payment) => (
                <div
                  key={payment.id}
                  className="flex justify-between items-center border rounded-xl p-4"
                >
                  <div>
                    <p className="font-medium">{payment.amount}</p>
                    <p className="text-sm text-gray-500">
                      {payment.date}
                    </p>
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      payment.status === "Success"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {payment.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserDashboard;