import { useEffect, useState } from "react";
import {
  FaGraduationCap,
  FaPercentage,
  FaAward,
  FaBookOpen,
} from "react-icons/fa";

import { getCalculations } from "../../services/localStorageService";

function StatsCards() {
  const [stats, setStats] = useState([
    {
      title: "Latest SGPA",
      value: "0.00",
      icon: <FaGraduationCap size={28} />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Average Percentage",
      value: "0%",
      icon: <FaPercentage size={28} />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Best Grade",
      value: "-",
      icon: <FaAward size={28} />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Total Calculations",
      value: "0",
      icon: <FaBookOpen size={28} />,
      color: "from-purple-500 to-pink-500",
    },
  ]);

  useEffect(() => {
    const loadStats = () => {
      const history = getCalculations();

      if (history.length === 0) return;

      const latest = history[0];

      const average = (
        history.reduce(
          (sum, item) => sum + Number(item.percentage || 0),
          0
        ) / history.length
      ).toFixed(2);

      const gradeOrder = [
        "F",
        "D",
        "C",
        "B",
        "B+",
        "A",
        "A+",
        "O",
      ];

      let bestGrade = history[0].grade || "F";

      history.forEach((item) => {
        if (
          gradeOrder.indexOf(item.grade) >
          gradeOrder.indexOf(bestGrade)
        ) {
          bestGrade = item.grade;
        }
      });

      setStats([
        {
          title: "Latest SGPA",
          value: latest.sgpa,
          icon: <FaGraduationCap size={28} />,
          color: "from-blue-500 to-cyan-500",
        },
        {
          title: "Average Percentage",
          value: average + "%",
          icon: <FaPercentage size={28} />,
          color: "from-green-500 to-emerald-500",
        },
        {
          title: "Best Grade",
          value: bestGrade,
          icon: <FaAward size={28} />,
          color: "from-yellow-500 to-orange-500",
        },
        {
          title: "Total Calculations",
          value: history.length,
          icon: <FaBookOpen size={28} />,
          color: "from-purple-500 to-pink-500",
        },
      ]);
    };

    loadStats();

    window.addEventListener("storage", loadStats);

    return () => {
      window.removeEventListener("storage", loadStats);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">{stats.map((item, index) => (

        <div
          key={index}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2 hover:border-blue-500 transition-all duration-300"
        >

          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white mb-5 shadow-lg`}
          >
            {item.icon}
          </div>

          <p className="text-slate-400 text-sm font-medium">
            {item.title}
          </p>

          <h2 className="text-4xl font-bold mt-3 text-white">
            {item.value}
          </h2>

        </div>

      ))}

    </div>
  );
}

export default StatsCards;