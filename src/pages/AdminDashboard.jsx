import React from "react";

export default function AdminDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard 👑
      </h1>

      {/* STATS */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-500 text-white p-6 rounded-xl shadow">
          <h2>Total Users</h2>
          <p className="text-2xl font-bold">120</p>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-xl shadow">
          <h2>Revenue</h2>
          <p className="text-2xl font-bold">$8,500</p>
        </div>

        <div className="bg-purple-500 text-white p-6 rounded-xl shadow">
          <h2>Orders</h2>
          <p className="text-2xl font-bold">75</p>
        </div>

        <div className="bg-red-500 text-white p-6 rounded-xl shadow">
          <h2>Issues</h2>
          <p className="text-2xl font-bold">3</p>
        </div>
      </div>

      {/* USER MANAGEMENT */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">User Management</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>User</td>
            </tr>

            <tr>
              <td>Admin</td>
              <td>admin@example.com</td>
              <td>Admin</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}