import {
  FaChartLine,
  FaUserGraduate,
  FaBrain,
  FaFilePdf,
} from "react-icons/fa";

function Analytics() {
  return (
    <section
      id="analytics"
      className="bg-slate-950 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">
            Academic Analytics
          </h2>

          <p className="text-slate-400 text-lg mt-4 max-w-3xl mx-auto">
            Monitor your academic performance with real-time insights,
            smart statistics and AI-powered recommendations.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 hover:border-blue-500 transition duration-300">

            <FaChartLine className="text-5xl text-blue-500 mb-6" />

            <h3 className="text-4xl font-bold text-white">
              98%
            </h3>

            <p className="text-slate-400 mt-3">
              Performance Accuracy
            </p>

          </div>

          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 hover:border-green-500 transition duration-300">

            <FaUserGraduate className="text-5xl text-green-500 mb-6" />

            <h3 className="text-4xl font-bold text-white">
              10K+
            </h3>

            <p className="text-slate-400 mt-3">
              Students Helped
            </p>

          </div>

          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 hover:border-purple-500 transition duration-300">

            <FaBrain className="text-5xl text-purple-500 mb-6" />

            <h3 className="text-4xl font-bold text-white">
              AI
            </h3>

            <p className="text-slate-400 mt-3">
              Smart Recommendations
            </p>

          </div>

          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 hover:border-red-500 transition duration-300">

            <FaFilePdf className="text-5xl text-red-500 mb-6" />

            <h3 className="text-4xl font-bold text-white">
              PDF
            </h3>

            <p className="text-slate-400 mt-3">
              Professional Reports
            </p>

          </div>

        </div><div className="mt-16 grid lg:grid-cols-2 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <h3 className="text-3xl font-bold text-white mb-6">
              📈 Performance Overview
            </h3>

            <div className="space-y-5">

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300">SGPA Progress</span>
                  <span className="text-cyan-400">90%</span>
                </div>

                <div className="w-full h-3 bg-slate-800 rounded-full">
                  <div className="h-3 w-[90%] bg-cyan-500 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300">CGPA Target</span>
                  <span className="text-green-400">85%</span>
                </div>

                <div className="w-full h-3 bg-slate-800 rounded-full">
                  <div className="h-3 w-[85%] bg-green-500 rounded-full"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-slate-300">Assignment Completion</span>
                  <span className="text-yellow-400">95%</span>
                </div>

                <div className="w-full h-3 bg-slate-800 rounded-full">
                  <div className="h-3 w-[95%] bg-yellow-500 rounded-full"></div>
                </div>
              </div>

            </div>

          </div>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8">

            <h3 className="text-3xl font-bold text-white">
              🤖 AI Prediction
            </h3>

            <p className="mt-5 text-blue-100 leading-8">

              Based on your academic performance, maintaining a consistent
              SGPA above <strong>8.8</strong> can help you graduate with
              an excellent CGPA.

            </p>

            <div className="mt-8 bg-white/10 rounded-2xl p-5">

              <h4 className="font-bold text-xl">
                💡 Smart Recommendation
              </h4>

              <p className="mt-3 text-blue-100 leading-7">
                Focus on Programming, DBMS and Data Structures while
                revising weekly to improve your academic performance.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Analytics;