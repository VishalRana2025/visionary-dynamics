import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function AdminPage() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = token ? jwtDecode(token) : null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* SIDEBAR */}
      <div className="w-64 bg-indigo-600 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

        <ul className="space-y-4">
          <li className="hover:text-gray-200 cursor-pointer">Dashboard</li>
          <li className="hover:text-gray-200 cursor-pointer">Users</li>
          <li className="hover:text-gray-200 cursor-pointer">Settings</li>
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
          Welcome Admin 👑
        </h1>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Total Users</h3>
            <p className="text-2xl font-bold">120</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Active Sessions</h3>
            <p className="text-2xl font-bold">32</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-gray-500">Revenue</h3>
            <p className="text-2xl font-bold">$4,200</p>
          </div>

        </div>

        {/* USERS TABLE */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Users</h2>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Vishal Rana</td>
                <td>vishal@email.com</td>
                <td className="text-blue-600">Admin</td>
              </tr>
              <tr>
                <td className="py-2">John Doe</td>
                <td>john@email.com</td>
                <td>User</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}