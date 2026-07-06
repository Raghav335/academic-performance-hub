import { useEffect, useMemo, useState } from "react";
import DashboardNavbar from "../../components/layout/DashboardNavbar";

import {
  getCalculations,
  deleteCalculation,
  clearHistory,
} from "../../services/localStorageService";

function History() {
  const [history, setHistory] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = () => {
    setHistory(getCalculations());
  };

  const filteredHistory = useMemo(() => {
    return history.filter((item) =>
      JSON.stringify(item)
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [history, search]);

  const handleDelete = (id) => {
    deleteCalculation(id);
    loadHistory();
  };

  const handleClear = () => {
    if (window.confirm("Clear all history?")) {
      clearHistory();
      loadHistory();
    }
  };

  const highestSGPA =
    history.length > 0
      ? Math.max(...history.map((item) => Number(item.sgpa || 0))).toFixed(2)
      : "0.00";

  const averageSGPA =
    history.length > 0
      ? (
          history.reduce(
            (sum, item) => sum + Number(item.sgpa || 0),
            0
          ) / history.length
        ).toFixed(2)
      : "0.00";

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <DashboardNavbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6 mb-8">

          <div>

            <h1 className="text-4xl font-bold">
              📜 Calculation History
            </h1>

            <p className="text-slate-400 mt-2">
              View and manage all your saved academic calculations.
            </p>

          </div>

          <button
            onClick={handleClear}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold transition"
          >
            🗑 Clear History
          </button>

        </div>

        <input
          type="text"
          placeholder="🔍 Search by SGPA, Grade, Percentage or Date..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 mb-8 outline-none focus:border-blue-500"
        />

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6">
            <p className="text-slate-400">Total Records</p>
            <h2 className="text-4xl font-bold mt-3">
              {history.length}
            </h2>
          </div>

          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6">
            <p className="text-slate-400">Highest SGPA</p>
            <h2 className="text-4xl font-bold text-green-400 mt-3">
              {highestSGPA}
            </h2>
          </div>

          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6">
            <p className="text-slate-400">Average SGPA</p>
            <h2 className="text-4xl font-bold text-blue-400 mt-3">
              {averageSGPA}
            </h2>
          </div>

        </div>{filteredHistory.length === 0 ? (

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center">

            <h2 className="text-3xl font-bold">
              📂 No History Found
            </h2>

            <p className="text-slate-400 mt-3">
              Start calculating your SGPA to build your academic history.
            </p>

          </div>

        ) : (

          <div className="grid gap-6">

            {filteredHistory.map((item) => (

              <div
                key={item.id}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-blue-500 hover:shadow-2xl transition-all duration-300"
              >

                <div className="flex flex-col lg:flex-row justify-between gap-6">

                  <div className="space-y-3">

                    <h2 className="text-xl font-bold text-cyan-400">
                      📅 {item.date}
                    </h2>

                    <p>
                      🎓 <span className="text-slate-400">SGPA:</span>{" "}
                      <span className="font-bold text-green-400">
                        {item.sgpa}
                      </span>
                    </p>

                    <p>
                      📊 <span className="text-slate-400">CGPA:</span>{" "}
                      <span className="font-bold text-blue-400">
                        {item.cgpa}
                      </span>
                    </p>

                    <p>
                      📈 <span className="text-slate-400">Percentage:</span>{" "}
                      <span className="font-bold text-yellow-400">
                        {item.percentage}%
                      </span>
                    </p>

                    <p>
                      🏆 <span className="text-slate-400">Grade:</span>{" "}
                      <span className="font-bold text-purple-400">
                        {item.grade}
                      </span>
                    </p>

                    <p>
                      📚 <span className="text-slate-400">Credits:</span>{" "}
                      <span className="font-bold text-white">
                        {item.totalCredits}
                      </span>
                    </p>

                  </div>

                  <div className="flex items-start">

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold transition"
                    >
                      🗑 Delete
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default History;