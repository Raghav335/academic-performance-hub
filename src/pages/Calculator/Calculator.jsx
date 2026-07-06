import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import DashboardNavbar from "../../components/layout/DashboardNavbar";

import SubjectTable from "./SubjectTable";
import ResultCard from "./ResultCard";
import CGPACalculator from "./CGPACalculator";
import TargetPredictor from "./TargetPredictor";
import { downloadPDF } from "./PDFReport";

import { saveCalculation } from "../../services/localStorageService";

function Calculator() {
  const [subjects, setSubjects] = useState([
    {
      subject: "",
      credit: "",
      grade: "A",
    },
  ]);

  const [sgpa, setSgpa] = useState(null);
  const [totalCredits, setTotalCredits] = useState(0);

  const gradePoints = {
    O: 10,
    "A+": 9,
    A: 8,
    "B+": 7,
    B: 6,
    C: 5,
    D: 4,
    F: 0,
  };

  const calculateSGPA = () => {
    let credits = 0;
    let points = 0;

    subjects.forEach((item) => {
      const credit = Number(item.credit);

      if (credit > 0) {
        credits += credit;
        points += credit * gradePoints[item.grade];
      }
    });

    setTotalCredits(credits);

    if (credits === 0) {
      toast.error("Please enter valid credits.");
      return;
    }

    const result = Number((points / credits).toFixed(2));

    setSgpa(result);

    const percentage = (result * 9.5).toFixed(2);

    let grade = "C";

    if (result >= 9) grade = "O";
    else if (result >= 8) grade = "A+";
    else if (result >= 7) grade = "A";
    else if (result >= 6) grade = "B+";
    else if (result >= 5) grade = "B";

    saveCalculation({
      sgpa: result,
      cgpa: "-",
      percentage,
      grade,
      totalCredits: credits,
    });

    toast.success("Calculation Saved Successfully!");
  };

  const handleDownloadPDF = () => {
    if (!sgpa) {
      toast.error("Please calculate SGPA first.");
      return;
    }

    const percentage = (Number(sgpa) * 9.5).toFixed(2);

    let grade = "C";

    if (sgpa >= 9) grade = "O";
    else if (sgpa >= 8) grade = "A+";
    else if (sgpa >= 7) grade = "A";
    else if (sgpa >= 6) grade = "B+";
    else if (sgpa >= 5) grade = "B";

    downloadPDF({
      sgpa,
      percentage,
      grade,
      totalCredits,
    });

    toast.success("PDF Downloaded Successfully!");
  };

  return (
    <>
      <Toaster position="top-right" />

      <div className="min-h-screen bg-slate-950 text-white">

        <DashboardNavbar />

        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="mb-10">

            <h1 className="text-4xl font-bold">
              🎓 Academic Performance Hub
            </h1>

            <p className="text-slate-400 mt-2">
              Calculate SGPA, CGPA and track your academic performance.
            </p>

          </div>

          <SubjectTable
            subjects={subjects}
            setSubjects={setSubjects}
            calculateSGPA={calculateSGPA}
          />

          <div className="mt-10">

            <ResultCard
              sgpa={sgpa}
              totalCredits={totalCredits}
            /><div className="mt-6 flex justify-center">

              <button
                onClick={handleDownloadPDF}
                className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-xl font-semibold"
              >
                📄 Download PDF Report
              </button>

            </div>

          </div>

          <div className="mt-10">

            <CGPACalculator />

          </div>

          <div className="mt-10">

            <TargetPredictor />

          </div>

        </div>

      </div>

    </>
  );
}

export default Calculator;