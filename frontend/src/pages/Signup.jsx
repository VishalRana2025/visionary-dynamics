import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    adminCode: "", // ✅ NEW
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const res = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/register`,
  formData

);
      console.log(res.data);

      // redirect to login
      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.message || "Signup failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">

        <h2 className="text-2xl font-bold text-center mb-6">
          Create an account
        </h2>

        {/* ERROR */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSignup}>

          {/* NAME */}
          <div className="mb-4">
            <label className="text-sm">Name</label>
            <input
              type="text"
              name="name"
               value={formData.name} 
              placeholder="Enter your name"
              className="w-full mt-1 px-4 py-2 border rounded-lg"
              onChange={handleChange}
              required
            />
          </div>

          {/* EMAIL */}
          <div className="mb-4">
            <label className="text-sm">Email</label>
            <input
              type="email"
              name="email"
               value={formData.email} 
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg"
              onChange={handleChange}
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-4">
            <label className="text-sm">Password</label>
            <input
              type="password"
              name="password"
               value={formData.password}
              placeholder="Enter password"
              className="w-full mt-1 px-4 py-2 border rounded-lg"
              onChange={handleChange}
              required
            />
          </div>

          {/* 🔐 ADMIN CODE */}
          {/* <div className="mb-6">
            <label className="text-sm">Admin Code (optional)</label>
            <input
              type="text"
              name="adminCode"
              value={formData.adminCode}
              placeholder="Enter admin code"
              className="w-full mt-1 px-4 py-2 border rounded-lg"
              onChange={handleChange}
            />
          </div> */}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg text-white ${
              loading
                ? "bg-blue-400"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        {/* LOGIN LINK */}
        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}