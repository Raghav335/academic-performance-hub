import { useState } from "react";

function CGPACalculator() {
  const [semesters, setSemesters] = useState([
    { sgpa: "" },
  ]);

  const [cgpa, setCgpa] = useState(null);

  const addSemester = () => {
    setSemesters([
      ...semesters,
      { sgpa: "" },
    ]);
  };

  const removeSemester = (index) => {
    if (semesters.length === 1) return;

    const updated = [...semesters];
    updated.splice(index, 1);
    setSemesters(updated);
  };

  const handleChange = (index, value) => {
    const updated = [...semesters];
    updated[index].sgpa = value;
    setSemesters(updated);
  };

  const calculateCGPA = () => {
    let total = 0;
    let count = 0;

    semesters.forEach((sem) => {
      if (sem.sgpa !== "") {
        total += Number(sem.sgpa);
        count++;
      }
    });

    if (count === 0) {
      setCgpa(null);
      return;
    }

    setCgpa((total / count).toFixed(2));
  };

  const percentage = cgpa
    ? (cgpa * 9.5).toFixed(2)
    : "0.00";

  let grade = "-";

  if (cgpa >= 9) grade = "O";
  else if (cgpa >= 8) grade = "A+";
  else if (cgpa >= 7) grade = "A";
  else if (cgpa >= 6) grade = "B+";
  else if (cgpa >= 5) grade = "B";
  else if (cgpa > 0) grade = "C";

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl mt-10">

      <h2 className="text-3xl font-bold text-white mb-8">
        🎓 CGPA Calculator
      </h2>

      {semesters.map((semester, index) => (

        <div
          key={index}
          className="flex flex-col md:flex-row gap-4 mb-5"
        >

          <input
            type="number"
            min="0"
            max="10"
            step="0.01"
            value={semester.sgpa}
            onChange={(e) =>
              handleChange(index, e.target.value)
            }
            placeholder={`Semester ${index + 1} SGPA`}
            className="flex-1 bg-slate-800 border border-slate-700 rounded-xl p-3 text-white outline-none"
          />

          <button
            onClick={() => removeSemester(index)}
            className="bg-red-600 hover:bg-red-700 px-5 rounded-xl text-white"
          >
            Remove
          </button>

        </div>

      ))}

      <div className="flex flex-wrap gap-4 mt-6">

        <button
          onClick={addSemester}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white font-semibold"
        >
          + Add Semester
        </button>

        <button
          onClick={calculateCGPA}
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-white font-semibold"
        >
          Calculate CGPA
        </button>

      </div>

      {cgpa && (

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-slate-800 rounded-2xl p-6">
            <p className="text-slate-400">
              CGPA
            </p>

            <h1 className="text-4xl font-bold text-green-400 mt-2">
              {cgpa}
            </h1>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6">
            <p className="text-slate-400">
              Percentage
            </p>

            <h1 className="text-4xl font-bold text-blue-400 mt-2">
              {percentage}%
            </h1>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6">
            <p className="text-slate-400">
              Grade
            </p>

            <h1 className="text-4xl font-bold text-yellow-400 mt-2">
              {grade}
            </h1>
          </div>

        </div>

      )}

    </div>
  );
}

export default CGPACalculator;