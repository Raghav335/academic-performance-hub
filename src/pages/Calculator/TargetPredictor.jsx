import { useState } from "react";

function TargetPredictor() {
  const [currentCGPA, setCurrentCGPA] = useState("");
  const [completedSemesters, setCompletedSemesters] = useState("");
  const [targetCGPA, setTargetCGPA] = useState("");
  const [totalSemesters, setTotalSemesters] = useState("8");
  const [requiredSGPA, setRequiredSGPA] = useState(null);

  const calculateTarget = () => {
    const current = parseFloat(currentCGPA);
    const completed = parseInt(completedSemesters);
    const target = parseFloat(targetCGPA);
    const total = parseInt(totalSemesters);

    if (
      isNaN(current) ||
      isNaN(completed) ||
      isNaN(target) ||
      isNaN(total)
    ) {
      alert("Please fill all fields");
      return;
    }

    if (completed >= total) {
      alert("Completed semesters must be less than total semesters.");
      return;
    }

    const remaining = total - completed;

    const required =
      ((target * total) - (current * completed)) / remaining;

    setRequiredSGPA(required.toFixed(2));
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl mt-10">

      <h2 className="text-3xl font-bold text-white mb-8">
        🎯 Target CGPA Predictor
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <input
          type="number"
          step="0.01"
          placeholder="Current CGPA"
          value={currentCGPA}
          onChange={(e) => setCurrentCGPA(e.target.value)}
          className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-white outline-none"
        />

        <input
          type="number"
          placeholder="Completed Semesters"
          value={completedSemesters}
          onChange={(e) => setCompletedSemesters(e.target.value)}
          className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-white outline-none"
        />

        <input
          type="number"
          step="0.01"
          placeholder="Target CGPA"
          value={targetCGPA}
          onChange={(e) => setTargetCGPA(e.target.value)}
          className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-white outline-none"
        />

        <input
          type="number"
          placeholder="Total Semesters"
          value={totalSemesters}
          onChange={(e) => setTotalSemesters(e.target.value)}
          className="bg-slate-800 border border-slate-700 rounded-xl p-4 text-white outline-none"
        />

      </div>

      <button
        onClick={calculateTarget}
        className="mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl text-white font-semibold"
      >
        Calculate Required SGPA
      </button>

      {requiredSGPA && (
        <div className="mt-8 bg-slate-800 rounded-2xl p-6">

          <h3 className="text-2xl font-bold text-green-400">
            Required Average SGPA
          </h3>

          <p className="text-5xl font-bold text-white mt-4">
            {requiredSGPA}
          </p>

          {requiredSGPA <= 10 ? (
            <p className="text-green-400 mt-3">
              🎉 Target is achievable. Stay consistent!
            </p>
          ) : (
            <p className="text-red-400 mt-3">
              ⚠️ Target is not achievable with the remaining semesters.
            </p>
          )}

        </div>
      )}
    </div>
  );
}

export default TargetPredictor;