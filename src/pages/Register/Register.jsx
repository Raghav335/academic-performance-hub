import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGraduationCap, FaGoogle } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { registerUser, googleLogin } from "../../services/authService";

function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      return toast.error("Please fill all fields");
    }

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      setLoading(true);

      await registerUser(name, email, password);

      // Save user info locally
      localStorage.setItem("userName", name);
      localStorage.setItem("userEmail", email);

      toast.success("Account Created Successfully!");

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      const user = await googleLogin();

      localStorage.setItem(
        "userName",
        user?.displayName || "Student"
      );

      localStorage.setItem(
        "userEmail",
        user?.email || ""
      );

      toast.success("Google Login Successful");

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

          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-4 rounded-2xl">
              <FaGraduationCap className="text-3xl text-white" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-center text-white">
            Create Account 🚀
          </h1>

          <p className="text-slate-400 text-center mt-2">
            Join Academic Performance Hub
          </p>

          <div className="mt-8">

            <label className="text-slate-300 text-sm">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full mt-2 p-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-blue-500"
            />

          </div>

          <div className="mt-5">

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

          <div className="mt-5">

            <label className="text-slate-300 text-sm">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create password"
              className="w-full mt-2 p-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-blue-500"
            />

          </div>

          <div className="mt-5"><label className="text-slate-300 text-sm">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="w-full mt-2 p-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-blue-500"
            />

          </div>

          <button
            onClick={handleRegister}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition mt-7 py-4 rounded-xl text-white font-semibold disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-slate-700"></div>
            <span className="px-4 text-slate-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-slate-700"></div>
          </div>

          <button
            onClick={handleGoogleRegister}
            className="w-full border border-slate-700 hover:border-blue-500 transition py-4 rounded-xl text-white flex items-center justify-center gap-3"
          >
            <FaGoogle />
            Continue with Google
          </button>

          <p className="text-center text-slate-400 mt-8">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-400 hover:underline"
            >
              Login
            </Link>
          </p>

        </div>

      </div>
    </>
  );
}

export default Register;