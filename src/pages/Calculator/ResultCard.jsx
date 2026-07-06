function ResultCard({ sgpa, totalCredits }) {

  const percentage = sgpa
    ? (Number(sgpa) * 9.5).toFixed(2)
    : "0.00";

  let grade = "-";
  let status = "No Data";

  if (sgpa >= 9) {
    grade = "O";
    status = "Outstanding";
  } else if (sgpa >= 8) {
    grade = "A+";
    status = "Excellent";
  } else if (sgpa >= 7) {
    grade = "A";
    status = "Very Good";
  } else if (sgpa >= 6) {
    grade = "B+";
    status = "Good";
  } else if (sgpa >= 5) {
    grade = "B";
    status = "Average";
  } else if (sgpa > 0) {
    grade = "C";
    status = "Needs Improvement";
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">

      <h2 className="text-3xl font-bold text-white mb-8">
        📊 Result Summary
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-slate-800 rounded-2xl p-6">
          <p className="text-slate-400">SGPA</p>

          <h1 className="text-4xl font-bold text-green-400 mt-2">
            {sgpa || "0.00"}
          </h1>
        </div>

        <div className="bg-slate-800 rounded-2xl p-6">
          <p className="text-slate-400">Percentage</p>

          <h1 className="text-4xl font-bold text-blue-400 mt-2">
            {percentage}%
          </h1>
        </div>

        <div className="bg-slate-800 rounded-2xl p-6">
          <p className="text-slate-400">Grade</p>

          <h1 className="text-4xl font-bold text-yellow-400 mt-2">
            {grade}
          </h1>
        </div>

        <div className="bg-slate-800 rounded-2xl p-6">
          <p className="text-slate-400">Credits</p>

          <h1 className="text-4xl font-bold text-purple-400 mt-2">
            {totalCredits}
          </h1>
        </div>

      </div>

      <div className="mt-8 bg-slate-800 rounded-2xl p-6">

        <h3 className="text-xl font-bold text-cyan-400">
          Academic Performance
        </h3>

        <p className="text-slate-300 mt-3">
          {status}
        </p>

      </div>

    </div>
  );
}

export default ResultCard;