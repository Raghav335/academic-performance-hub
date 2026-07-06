import DashboardNavbar from "../../components/layout/DashboardNavbar";
import { Link } from "react-router-dom";

import {
  FaBrain,
  FaArrowTrendUp,
  FaBullseye,
  FaBookOpen,
  FaClock,
  FaMedal,
} from "react-icons/fa6";

function AIInsightsPage() {

  const insights = [

    {
      icon: <FaArrowTrendUp />,
      title: "Performance Analysis",
      description:
        "Your academic performance is improving consistently. Continue your current study routine to achieve even better results.",
      color: "from-green-500 to-emerald-500",
    },

    {
      icon: <FaBullseye />,
      title: "Target Recommendation",
      description:
        "Maintain an SGPA above 8.8 in upcoming semesters to achieve an excellent CGPA.",
      color: "from-blue-500 to-cyan-500",
    },

    {
      icon: <FaBookOpen />,
      title: "Subject Recommendation",
      description:
        "Focus more on Programming, DBMS, Data Structures and Operating Systems for better academic performance.",
      color: "from-purple-500 to-pink-500",
    },

    {
      icon: <FaClock />,
      title: "Weekly Study Plan",
      description:
        "Study 2–3 hours daily and revise every weekend to improve long-term retention.",
      color: "from-yellow-500 to-orange-500",
    },

    {
      icon: <FaMedal />,
      title: "Achievement",
      description:
        "Excellent! You're on the right track to graduate with a strong academic record.",
      color: "from-red-500 to-rose-500",
    },

  ];

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <DashboardNavbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="mb-10">

          <h1 className="text-5xl font-bold">
            🤖 AI Study Insights
          </h1>

          <p className="text-slate-400 mt-3 text-lg">
            Personalized AI recommendations to improve your academic performance.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-6">{insights.map((item, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300 shadow-xl"
            >

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-2xl text-white mb-5`}
              >
                {item.icon}
              </div>

              <h2 className="text-2xl font-bold mb-3">
                {item.title}
              </h2>

              <p className="text-slate-400 leading-7">
                {item.description}
              </p>

            </div>

          ))}

        </div>

        <div className="mt-10 bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            🎯 AI Smart Tips
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <div className="bg-slate-800 rounded-2xl p-5">
              ✅ Study consistently instead of studying only before exams.
            </div>

            <div className="bg-slate-800 rounded-2xl p-5">
              📚 Revise every subject at least once every week.
            </div>

            <div className="bg-slate-800 rounded-2xl p-5">
              💻 Practice programming daily for stronger coding skills.
            </div>

            <div className="bg-slate-800 rounded-2xl p-5">
              📝 Solve previous year question papers regularly.
            </div>

            <div className="bg-slate-800 rounded-2xl p-5">
              🎓 Maintain attendance above 75% throughout the semester.
            </div>

            <div className="bg-slate-800 rounded-2xl p-5">
              📈 Track SGPA and CGPA after every semester.
            </div>

          </div>

        </div><div className="mt-10 grid md:grid-cols-3 gap-6">

          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-6 text-center">
            <h3 className="text-lg font-semibold">
              AI Performance Score
            </h3>

            <h1 className="text-5xl font-bold mt-4">
              92%
            </h1>

            <p className="mt-3 text-sm">
              Excellent Progress
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl p-6 text-center">
            <h3 className="text-lg font-semibold">
              Target CGPA
            </h3>

            <h1 className="text-5xl font-bold mt-4">
              8.8+
            </h1>

            <p className="mt-3 text-sm">
              Stay Consistent
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl p-6 text-center">
            <h3 className="text-lg font-semibold">
              Weekly Goal
            </h3>

            <h1 className="text-5xl font-bold mt-4">
              15h
            </h1>

            <p className="mt-3 text-sm">
              Recommended Study Time
            </p>
          </div>

        </div>

        <div className="mt-10 bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">

          <h2 className="text-3xl font-bold text-cyan-400">
            🚀 Keep Improving Every Semester
          </h2>

          <p className="text-slate-300 mt-4 leading-8 max-w-3xl mx-auto">
            Small improvements every day create outstanding academic success.
            Keep practicing, revise consistently, and use Academic Performance
            Hub to monitor your progress.
          </p>

          <Link
            to="/dashboard"
            className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold transition"
          >
            ← Back to Dashboard
          </Link>

        </div>

      </div>

    </div>
  );
}

export default AIInsightsPage;