import {
  FaUserPlus,
  FaSignInAlt,
  FaCalculator,
  FaFilePdf,
  FaCheckCircle,
} from "react-icons/fa";

function RecentActivity() {
  const activities = [
    {
      icon: <FaUserPlus className="text-green-400" />,
      title: "Account Created",
      description:
        "Your account was successfully created and is ready to use.",
      time: "Today",
    },
    {
      icon: <FaSignInAlt className="text-blue-400" />,
      title: "Login Successful",
      description:
        "You successfully logged into Academic Performance Hub.",
      time: "Just Now",
    },
    {
      icon: <FaCalculator className="text-yellow-400" />,
      title: "SGPA Calculated",
      description:
        "Your latest SGPA calculation has been saved successfully.",
      time: "Recently",
    },
    {
      icon: <FaFilePdf className="text-red-400" />,
      title: "PDF Report",
      description:
        "Your academic report is ready for download anytime.",
      time: "Latest",
    },
    {
      icon: <FaCheckCircle className="text-cyan-400" />,
      title: "Profile Updated",
      description:
        "Your profile information has been updated successfully.",
      time: "Completed",
    },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl mb-10">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-3xl font-bold text-white">
            🕒 Recent Activity
          </h2>

          <p className="text-slate-400 mt-2">
            Your latest academic activities and achievements.
          </p>

        </div>

        <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm">
          Live Updates
        </span>

      </div>

      <div className="space-y-5">{activities.map((activity, index) => (

          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center gap-4 p-5 rounded-2xl bg-slate-800 border border-slate-700 hover:border-blue-500 hover:-translate-y-1 hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300"
          >

            <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-2xl">
              {activity.icon}
            </div>

            <div className="flex-1">

              <h3 className="text-lg font-bold text-white">
                {activity.title}
              </h3>

              <p className="text-slate-400 mt-1 leading-6">
                {activity.description}
              </p>

            </div>

            <span className="text-sm bg-slate-700 px-3 py-2 rounded-full text-slate-300 whitespace-nowrap">
              {activity.time}
            </span>

          </div>

        ))}

      </div>

      <div className="mt-8 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/20 rounded-2xl p-6">

        <h3 className="text-xl font-bold text-white mb-3">
          📊 Activity Summary
        </h3>

        <p className="text-slate-300 leading-7">
          Your recent academic activities, profile updates, calculations,
          and report generation are tracked here to help you monitor your
          overall progress. Continue using the application regularly to
          maintain a complete academic record.
        </p>

      </div>

    </div>
  );
}

export default RecentActivity;