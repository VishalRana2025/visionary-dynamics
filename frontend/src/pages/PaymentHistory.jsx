import { useEffect, useState } from "react";
import axios from "axios";

export default function PaymentHistory() {
  const [payments, setPayments] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get("http://localhost:5000/api/payment/history", {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => setPayments(res.data));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-6">Payment History 💳</h1>

      {payments.map(p => (
        <div key={p._id} className="p-4 border mb-3 rounded">
          <p>{p.offer.title}</p>
          <p>${p.amount}</p>
          <p>{new Date(p.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}