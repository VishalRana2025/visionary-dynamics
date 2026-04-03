import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [offers, setOffers] = useState([]);
  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(0);
  const [analytics, setAnalytics] = useState({});

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    _id: null, // for edit
  });

  useEffect(() => {
    fetchOffers();
    fetchUsers();
    fetchAnalytics();
  }, []);

  // 👥 USER COUNT + USERS
  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/users`
      );
      setUsers(res.data);
      setUserCount(res.data.length);
    } catch (err) {
      console.error(err);
    }
  };

  // 📊 PAYMENT ANALYTICS
  const fetchAnalytics = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/payment/analytics`
      );
      setAnalytics(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // 🔥 OFFERS
  const fetchOffers = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/offers`
      );
      setOffers(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
      setOffers([]);
    }
  };

  // ➕ ADD / ✏️ EDIT OFFER
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (form._id) {
        // ✏️ EDIT
        await axios.put(
          `${import.meta.env.VITE_API_URL}/api/offers/${form._id}`,
          form
        );
      } else {
        // ➕ ADD
        await axios.post(
          `${import.meta.env.VITE_API_URL}/api/offers`,
          form
        );
      }

      setForm({ title: "", description: "", price: "", _id: null });
      fetchOffers();

    } catch (err) {
      console.error(err);
    }
  };

  // ✏️ LOAD INTO FORM
  const handleEdit = (offer) => {
    setForm(offer);
  };

  // ❌ DELETE
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/offers/${id}`
      );
      fetchOffers();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold mb-6">👑 Admin Dashboard</h1>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">

        <div className="bg-blue-500 text-white p-6 rounded-xl">
          <h2>Total Users</h2>
          <p className="text-2xl font-bold">{userCount}</p>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-xl">
          <h2>Total Revenue</h2>
          <p className="text-2xl font-bold">
            ₹ {analytics?.totalAmount || 0}
          </p>
        </div>

        <div className="bg-purple-500 text-white p-6 rounded-xl">
          <h2>Total Payments</h2>
          <p className="text-2xl font-bold">
            {analytics?.count || 0}
          </p>
        </div>

      </div>

      {/* ADD / EDIT OFFER */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow mb-6"
      >
        <h2 className="text-xl mb-4">
          {form._id ? "Edit Offer ✏️" : "Add Offer ➕"}
        </h2>

        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
          className="border p-2 w-full mb-3"
        />

        <input
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
          className="border p-2 w-full mb-3"
        />

        <input
          placeholder="Price"
          value={form.price}
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
          className="border p-2 w-full mb-3"
        />

        <button className="bg-green-500 text-white px-4 py-2 rounded">
          {form._id ? "Update Offer" : "Add Offer"}
        </button>
      </form>

      {/* OFFERS */}
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h2 className="text-xl mb-4">All Offers</h2>

        {offers.map((offer) => (
          <div
            key={offer._id}
            className="flex justify-between items-center border-b py-2"
          >
            <div>
              <p className="font-bold">{offer.title}</p>
              <p>₹ {offer.price}</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(offer)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(offer._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* USERS */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl mb-4">👥 Users</h2>

        {users.map((u) => (
          <div key={u._id} className="border-b py-2">
            {u.name} - {u.email} ({u.role})
          </div>
        ))}
      </div>

    </div>
  );
}