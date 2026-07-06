import React from "react";

function SubjectTable({
  subjects,
  setSubjects,
  calculateSGPA,
}) {
  const grades = [
    "O",
    "A+",
    "A",
    "B+",
    "B",
    "C",
    "D",
    "F",
  ];

  const addSubject = () => {
    setSubjects([
      ...subjects,
      {
        subject: "",
        credit: "",
        grade: "A",
      },
    ]);
  };

  const removeSubject = (index) => {
    if (subjects.length === 1) return;

    const updated = [...subjects];
    updated.splice(index, 1);
    setSubjects(updated);
  };

  const handleChange = (index, field, value) => {
    const updated = [...subjects];
    updated[index][field] = value;
    setSubjects(updated);
  };

  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-xl">

      <h2 className="text-2xl font-bold text-white mb-6">
        📚 Subjects
      </h2>

      {subjects.map((item, index) => (

        <div
          key={index}
          className="grid lg:grid-cols-4 gap-4 mb-5"
        >

          <input
            type="text"
            placeholder="Subject Name"
            value={item.subject}
            onChange={(e) =>
              handleChange(
                index,
                "subject",
                e.target.value
              )
            }
            className="bg-slate-800 border border-slate-700 rounded-xl p-3 text-white outline-none"
          />

          <input
            type="number"
            placeholder="Credits"
            value={item.credit}
            onChange={(e) =>
              handleChange(
                index,
                "credit",
                e.target.value
              )
            }
            className="bg-slate-800 border border-slate-700 rounded-xl p-3 text-white outline-none"
          />

          <select
            value={item.grade}
            onChange={(e) =>
              handleChange(
                index,
                "grade",
                e.target.value
              )
            }
            className="bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
          >

            {grades.map((grade) => (

              <option key={grade}>
                {grade}
              </option>

            ))}

          </select>

          <button
            onClick={() => removeSubject(index)}
            className="bg-red-600 hover:bg-red-700 rounded-xl text-white font-semibold"
          >
            Remove
          </button>

        </div>

      ))}

      <div className="flex flex-wrap gap-4 mt-8">

        <button
          onClick={addSubject}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold"
        >
          + Add Subject
        </button>

        <button
          onClick={calculateSGPA}
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-semibold"
        >
          Calculate SGPA
        </button>

      </div>

    </div>
  );
}

export default SubjectTable;