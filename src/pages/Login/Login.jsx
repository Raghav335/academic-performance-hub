import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGraduationCap, FaGoogle } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { loginUser, googleLogin } from "../../services/authService";

function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    const { email, password } = formData;

    if (!email || !password) {
      return toast.error("Please fill all fields");
    }

    try {
      setLoading(true);

      await loginUser(email, password);

      toast.success("Login Successful 🎉");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1200);

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();

      toast.success("Google Login Successful 🎉");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Toaster position="top-right" />

      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-10">

        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-4 rounded-2xl">
              <FaGraduationCap className="text-3xl text-white" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-center text-white">
            Welcome Back 👋
          </h1>

          <p className="text-slate-400 text-center mt-2">
            Login to Academic Performance Hub
          </p>

          {/* Email */}
          <div className="mt-8">
            <label className="text-slate-300 text-sm">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-2 p-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mt-5">
            <label className="text-slate-300 text-sm">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full mt-2 p-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-blue-500"
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end mt-3">
            <Link
              to="/forgot-password"
              className="text-blue-400 text-sm hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition mt-6 py-4 rounded-xl text-white font-semibold"
          >
            {loading ? "Logging In..." : "Login"}
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-slate-700"></div>
            <span className="px-4 text-slate-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-slate-700"></div>
          </div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="w-full border border-slate-700 hover:border-blue-500 transition py-4 rounded-xl text-white flex items-center justify-center gap-3"
          >
            <FaGoogle />
            Continue with Google
          </button>

          {/* Register */}
          <p className="text-center text-slate-400 mt-8">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-400 hover:underline"
            >
              Register
            </Link>
          </p>

        </div>

      </div>
    </>
  );
}

export default Login;