import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AdminPage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // 🔥 FETCH USERS FROM BACKEND
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/users",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUsers(res.data);
      } catch (err) {
        console.log("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, []);

  // 📊 CHART DATA
  const chartData = [
    {
      name: "Users",
      value: users.filter((u) => u.role === "user").length,
    },
    {
      name: "Admins",
      value: users.filter((u) => u.role === "admin").length,
    },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* SIDEBAR */}
      <div className="w-64 bg-indigo-600 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Panel 👑</h2>

        <ul className="space-y-4">
          <li>Dashboard</li>
          <li>Users</li>
          <li>Analytics</li>
        </ul>

        <button
          onClick={handleLogout}
          className="mt-10 bg-red-500 px-4 py-2 rounded w-full"
        >
          Logout
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold mb-6">
          Admin Dashboard 👑
        </h1>

        {/* 📊 STATS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3>Total Users</h3>
            <p className="text-2xl font-bold">{users.length}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3>Admins</h3>
            <p className="text-2xl font-bold">
              {users.filter((u) => u.role === "admin").length}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3>Normal Users</h3>
            <p className="text-2xl font-bold">
              {users.filter((u) => u.role === "user").length}
            </p>
          </div>

        </div>

        {/* 📊 BAR CHART */}
        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">
            User Analytics 📊
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 👥 USERS TABLE */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            All Users 👥
          </h2>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-b">
                  <td className="py-2">{user.name}</td>
                  <td>{user.email}</td>
                  <td
                    className={
                      user.role === "admin"
                        ? "text-purple-600 font-semibold"
                        : "text-gray-600"
                    }
                  >
                    {user.role}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}