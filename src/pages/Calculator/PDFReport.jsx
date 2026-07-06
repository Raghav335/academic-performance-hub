import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const downloadPDF = ({
  sgpa,
  percentage,
  grade,
  totalCredits,
}) => {
  const doc = new jsPDF();

  const profile =
    JSON.parse(localStorage.getItem("studentProfile")) || {};

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("Academic Performance Hub", 20, 20);

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");

  doc.text(
    `Student Name : ${profile.name || "Student"}`,
    20,
    35
  );

  doc.text(
    `College : ${profile.college || "-"}`,
    20,
    43
  );

  doc.text(
    `University : ${profile.university || "-"}`,
    20,
    51
  );

  doc.text(
    `Course : ${profile.course || "-"}`,
    20,
    59
  );

  doc.text(
    `Semester : ${profile.semester || "-"}`,
    20,
    67
  );

  doc.text(
    `Generated On : ${new Date().toLocaleString()}`,
    20,
    75
  );

  autoTable(doc, {
    startY: 85,
    head: [["Field", "Value"]],
    body: [
      ["SGPA", sgpa ?? "-"],
      ["Percentage", `${percentage}%`],
      ["Grade", grade ?? "-"],
      ["Total Credits", totalCredits ?? "-"],
    ],
    theme: "grid",
    headStyles: {
      fillColor: [37, 99, 235],
    },
  });

  const finalY = doc.lastAutoTable.finalY + 20;

  doc.setFontSize(11);

  doc.text(
    "Developed by Raghav Gupta",
    20,
    finalY
  );

  doc.text(
    "Academic Performance Hub v1.0",
    20,
    finalY + 8
  );

  doc.save("Academic-Performance-Report.pdf");
};