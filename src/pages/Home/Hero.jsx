import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaChartLine,
  FaRobot,
  FaFilePdf,
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-950 text-white overflow-hidden flex items-center"
    >
      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <span className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-4 py-2 rounded-full text-sm text-cyan-300 mb-6">
              🎓 Academic Performance Hub
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

              Track Your

              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Academic Performance
              </span>

            </h1>

            <p className="mt-8 text-slate-300 text-lg leading-8 max-w-xl">

              Calculate your SGPA & CGPA, analyze academic progress,
              download professional PDF reports, and receive AI-powered
              study insights — all in one modern dashboard.

            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition duration-300"
              >
                🚀 Get Started
              </Link>

              <Link
                to="/login"
                className="border border-slate-600 hover:border-cyan-500 hover:text-cyan-400 px-8 py-4 rounded-xl font-semibold transition duration-300"
              >
                🔐 Login
              </Link>

            </div>

            <div className="flex flex-wrap gap-3 mt-10"><span className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700">
                <FaGraduationCap className="inline mr-2 text-cyan-400" />
                SGPA & CGPA
              </span>

              <span className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700">
                <FaChartLine className="inline mr-2 text-green-400" />
                Analytics
              </span>

              <span className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700">
                <FaRobot className="inline mr-2 text-purple-400" />
                AI Insights
              </span>

              <span className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700">
                <FaFilePdf className="inline mr-2 text-red-400" />
                PDF Reports
              </span>

            </div>

          

          {/* Right Side */}

          <div className="relative">

            <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl">

              <h2 className="text-2xl font-bold mb-8">
                📊 Dashboard Preview
              </h2>

              <div className="grid grid-cols-2 gap-5">

                <div className="bg-slate-800 rounded-2xl p-5">

                  <p className="text-slate-400 text-sm">
                    Current SGPA
                  </p>

                  <h2 className="text-4xl font-bold text-cyan-400 mt-2">
                    8.72
                  </h2>

                </div>

                <div className="bg-slate-800 rounded-2xl p-5">

                  <p className="text-slate-400 text-sm">
                    Current CGPA
                  </p>

                  <h2 className="text-4xl font-bold text-green-400 mt-2">
                    8.54
                  </h2>

                </div>

                <div className="bg-slate-800 rounded-2xl p-5">

                  <p className="text-slate-400 text-sm">
                    AI Score
                  </p>

                  <h2 className="text-4xl font-bold text-yellow-400 mt-2">
                    92%
                  </h2>

                </div>

                <div className="bg-slate-800 rounded-2xl p-5">

                  <p className="text-slate-400 text-sm">
                    Reports
                  </p>

                  <h2 className="text-4xl font-bold text-pink-400 mt-2">
                    PDF
                  </h2>

                </div>

              </div>

              <div className="mt-8 bg-blue-600/10 border border-blue-500/20 rounded-2xl p-5">

                <h3 className="font-bold text-cyan-300">
                  🤖 AI Recommendation
                </h3>

                <p className="text-slate-300 mt-2 leading-7">
                  Keep your SGPA above <strong>8.8</strong> for the next semesters
                  to graduate with an excellent CGPA.
                </p>

              </div></div><div className="grid grid-cols-3 gap-4 mt-8">

                <div className="text-center bg-slate-800 rounded-2xl p-4">
                  <h3 className="text-3xl font-bold text-cyan-400">
                    10K+
                  </h3>
                  <p className="text-slate-400 text-sm mt-2">
                    Students
                  </p>
                </div>

                <div className="text-center bg-slate-800 rounded-2xl p-4">
                  <h3 className="text-3xl font-bold text-green-400">
                    98%
                  </h3>
                  <p className="text-slate-400 text-sm mt-2">
                    Accuracy
                  </p>
                </div>

                <div className="text-center bg-slate-800 rounded-2xl p-4">
                  <h3 className="text-3xl font-bold text-purple-400">
                    AI
                  </h3>
                  <p className="text-slate-400 text-sm mt-2">
                    Powered
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;