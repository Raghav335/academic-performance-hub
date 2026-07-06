import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { resetPassword } from "../../services/authService";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    if (!email) {
      return toast.error("Please enter your email.");
    }

    try {
      setLoading(true);

      await resetPassword(email);

      toast.success("Password reset link sent to your email!");

    } catch (error) {
      toast.error(error.message);

    } finally {
      setLoading(false);
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
            Forgot Password
          </h1>

          <p className="text-slate-400 text-center mt-2">
            Enter your registered email to receive a password reset link.
          </p>

          <div className="mt-8">

            <label className="text-slate-300 text-sm">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 p-4 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-blue-500"
            />

          </div><button
            onClick={handleReset}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition mt-7 py-4 rounded-xl text-white font-semibold disabled:opacity-50"
          >
            {loading ? "Sending Reset Link..." : "Send Reset Link"}
          </button>

          <p className="text-center text-slate-400 mt-8">
            Remember your password?{" "}
            <Link
              to="/login"
              className="text-blue-400 hover:underline"
            >
              Back to Login
            </Link>
          </p>

        </div>

      </div>

    </>
  );
}

export default ForgotPassword;