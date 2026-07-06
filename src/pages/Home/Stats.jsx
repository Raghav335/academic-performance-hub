import {
  FaUserGraduate,
  FaUniversity,
  FaChartLine,
  FaAward,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaUserGraduate className="text-5xl text-blue-500" />,
    number: "50K+",
    title: "Students",
  },
  {
    icon: <FaUniversity className="text-5xl text-green-500" />,
    number: "150+",
    title: "Universities",
  },
  {
    icon: <FaChartLine className="text-5xl text-purple-500" />,
    number: "1M+",
    title: "Calculations",
  },
  {
    icon: <FaAward className="text-5xl text-yellow-500" />,
    number: "99%",
    title: "Accuracy",
  },
];

function Stats() {
  return (
    <section className="bg-slate-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Trusted by Students
          </h2>

          <p className="text-slate-400 mt-4">
            Helping thousands of students manage their academic journey.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-3xl p-8 text-center border border-slate-700 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
            >
              <div className="flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-white mt-6">
                {item.number}
              </h3>

              <p className="text-slate-400 mt-2">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;