import {
  FaBrain,
  FaArrowTrendUp,
  FaBullseye,
  FaBookOpen,
  FaClock,
  FaMedal,
} from "react-icons/fa6";

function AIInsights() {
  const insights = [
    {
      icon: <FaArrowTrendUp />,
      title: "Performance Analysis",
      description:
        "Your academic performance is steadily improving. Continue maintaining consistent study habits to achieve even better results.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaBullseye />,
      title: "Target Recommendation",
      description:
        "Aim for an SGPA above 8.8 in upcoming semesters to comfortably achieve an excellent final CGPA.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaBookOpen />,
      title: "Subject Focus",
      description:
        "Spend extra time on practical subjects such as Programming, DBMS and Data Structures to strengthen your overall academic performance.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaClock />,
      title: "Weekly Study Plan",
      description:
        "Study at least 2–3 hours daily with one revision session every weekend for long-term retention.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <FaMedal />,
      title: "Achievement Status",
      description:
        "You're making great progress. Stay consistent and you're on track for excellent academic results.",
      color: "from-red-500 to-rose-500",
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl mb-10">

      <div className="flex items-center gap-4 mb-8">

        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">

          <FaBrain className="text-3xl text-white" />

        </div>

        <div>

          <h2 className="text-3xl font-bold text-white">
            AI Study Insights
          </h2>

          <p className="text-slate-400 mt-1">
            Personalized recommendations to improve your academic performance.
          </p>

        </div>

      </div>

      <div className="grid lg:grid-cols-2 gap-6">{insights.map((item, index) => (

          <div
            key={index}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500 hover:-translate-y-2 hover:shadow-cyan-500/20 hover:shadow-xl transition-all duration-300"
          >

            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-2xl text-white shadow-lg mb-5`}
            >
              {item.icon}
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              {item.title}
            </h3>

            <p className="text-slate-400 leading-7">
              {item.description}
            </p>

            <div className="mt-5 inline-flex items-center rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-xs text-cyan-300">
              AI Recommendation
            </div>

          </div>

        ))}

      </div>

      <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">

        <h3 className="text-lg font-semibold text-cyan-300 mb-2">
          💡 Smart Tip
        </h3>

        <p className="text-slate-300 leading-7">
          Consistency is more effective than studying for long hours only before exams.
          Complete your assignments on time, revise weekly, and regularly calculate
          your SGPA to track your progress.
        </p>

      </div>

    </div>
  );
}

export default AIInsights;