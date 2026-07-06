import {
  FaCalculator,
  FaFilePdf,
  FaHistory,
  FaRobot,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { downloadPDF } from "../Calculator/PDFReport";
import { getLatestCalculation } from "../../services/localStorageService";

function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Calculate CGPA",
      desc: "Calculate SGPA & CGPA instantly",
      icon: <FaCalculator size={24} />,
      color: "from-blue-500 to-cyan-500",
      action: "calculator",
    },
    {
      title: "Download PDF",
      desc: "Generate your academic report",
      icon: <FaFilePdf size={24} />,
      color: "from-red-500 to-pink-500",
      action: "pdf",
    },
    {
      title: "History",
      desc: "View all saved calculations",
      icon: <FaHistory size={24} />,
      color: "from-green-500 to-emerald-500",
      action: "history",
    },
    {
      title: "AI Insights",
      desc: "View AI recommendations",
      icon: <FaRobot size={24} />,
      color: "from-purple-500 to-indigo-500",
      action: "insights",
    },
  ];

  const handleAction = (item) => {

    if (item.action === "calculator") {
      navigate("/calculator");
      return;
    }

    if (item.action === "history") {
      navigate("/history");
      return;
    }

    if (item.action === "insights") {
  navigate("/insights");
  return;
}
    if (item.action === "pdf") {

      const latest = getLatestCalculation();

      if (!latest) {
        toast.error("Please calculate SGPA first.");
        navigate("/calculator");
        return;
      }

      downloadPDF({
        sgpa: latest.sgpa,
        percentage: latest.percentage,
        grade: latest.grade,
        totalCredits: latest.totalCredits,
      });

      toast.success("PDF Downloaded Successfully!");
      return;
    }
  };

  return (
    <div className="mb-10">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold">
          ⚡ Quick Actions
        </h2>

        <span className="text-sm text-slate-400">
          One-click shortcuts
        </span>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">{actions.map((item, index) => (

          <button
            key={index}
            onClick={() => handleAction(item)}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-left shadow-xl hover:-translate-y-2 hover:border-blue-500 hover:shadow-blue-500/20 transition-all duration-300"
          >

            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white mb-5 shadow-lg`}
            >
              {item.icon}
            </div>

            <h3 className="text-xl font-bold text-white">
              {item.title}
            </h3>

            <p className="text-slate-400 mt-2 text-sm leading-6">
              {item.desc}
            </p>

            <div className="mt-5 text-blue-400 font-medium text-sm">
              Open →
            </div>

          </button>

        ))}

      </div>

    </div>
  );
}

export default QuickActions;