import {
  FaChartLine,
  FaBrain,
  FaFilePdf,
  FaCloud,
  FaBullseye,
  FaGraduationCap,
} from "react-icons/fa";

const features = [
  {
    icon: <FaChartLine className="text-5xl text-blue-500" />,
    title: "Performance Analytics",
    desc: "Track your SGPA, CGPA and semester performance with beautiful analytics and interactive charts.",
  },
  {
    icon: <FaBrain className="text-5xl text-purple-500" />,
    title: "AI Study Insights",
    desc: "Get smart AI-powered recommendations to improve your academic performance.",
  },
  {
    icon: <FaFilePdf className="text-5xl text-red-500" />,
    title: "Professional PDF Reports",
    desc: "Generate professional academic reports instantly with one click.",
  },
  {
    icon: <FaCloud className="text-5xl text-cyan-500" />,
    title: "Firebase Authentication",
    desc: "Secure login, registration and cloud authentication powered by Firebase.",
  },
  {
    icon: <FaBullseye className="text-5xl text-yellow-500" />,
    title: "Target Predictor",
    desc: "Know the SGPA required to achieve your target CGPA before every semester.",
  },
  {
    icon: <FaGraduationCap className="text-5xl text-green-500" />,
    title: "Academic Dashboard",
    desc: "Access all academic tools, reports and performance insights in one place.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="bg-slate-950 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">
            Powerful Features
          </h2>

          <p className="text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
            Everything you need to monitor, analyze and improve your academic performance.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((item, index) => (

            <div
              key={index}
              className="group bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
            >

              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="text-slate-400 mt-4 leading-7">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-10 text-center shadow-2xl">

          <h2 className="text-4xl font-bold text-white">
            Ready to Improve Your Academic Performance?
          </h2>

          <p className="text-blue-100 mt-4 max-w-3xl mx-auto text-lg leading-8">
            Join thousands of students using Academic Performance Hub to
            calculate SGPA & CGPA, analyze progress, generate PDF reports,
            and receive AI-powered study recommendations.
          </p>

          <a
            href="/register"
            className="inline-block mt-8 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition duration-300"
          >
            🚀 Get Started Now
          </a>

        </div>

      </div>

    </section>
  );
}

export default Features;