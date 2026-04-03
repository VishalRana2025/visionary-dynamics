import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/login`,
      data
    );

     console.log("LOGIN RESPONSE FULL:", JSON.stringify(res.data, null, 2));

    // ✅ Save login
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
     navigate("/", { replace: true });
    // 🔥 REDIRECT TO HOME
    navigate("/", { replace: true });

  } catch (err) {
    console.error(err);
  }
};


  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-8">
        <div className="w-full max-w-md">

          <h2 className="text-3xl font-bold mb-2">Welcome Back !</h2>
          <p className="text-gray-500 mb-6">
            Please enter your details
          </p>

          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>

            {/* EMAIL */}
            <div className="mb-4">
              <label className="text-sm">Email Address</label>
              <input
                type="email"
                autoComplete="email"
                {...register("email", { required: "Email is required" })}
                className="w-full mt-1 px-4 py-2 border rounded-lg"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="mb-4">
              <label className="text-sm">Password</label>
              <input
                type="password"
                autoComplete="current-password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="w-full mt-1 px-4 py-2 border rounded-lg"
              />
              {errors.password && (
                <p className="text-red-500 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* OPTIONS */}
            <div className="flex justify-between text-sm mb-6">
              <label>
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <span className="text-blue-600 cursor-pointer">
                Forgot Password?
              </span>
            </div>
            
            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 flex justify-center"
            >
              {loading ? "Loading..." : "Login →"}
            </button>
          </form>

          <p className="text-sm text-center mt-6">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-600">
              Sign Up
            </a>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 items-center justify-center">
        <div className="text-white text-center px-10">

          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/man-working-on-laptop-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--office-employee-work-from-home-pack-people-illustrations-4337853.png"
            alt="illustration"
            className="w-80 mx-auto mb-6"
          />

          <h2 className="text-2xl font-semibold mb-2">
            Seamless work experience
          </h2>

          <p className="opacity-80">
            Everything you need in an easily customizable dashboard
          </p>
        </div>
      </div>
    </div>
  );
}