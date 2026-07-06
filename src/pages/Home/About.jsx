import {
  FaUserGraduate,
  FaCode,
  FaReact,
  FaLaptopCode,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">
            About Me
          </h2>

          <p className="text-slate-400 mt-4 text-lg">
            Passionate Full Stack  Developer & BCA Student
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <FaUserGraduate className="text-6xl text-blue-500 mb-6" />

            <h3 className="text-3xl font-bold text-white">
              Raghav Gupta
            </h3>

            <p className="text-slate-400 mt-5 leading-8">

              I am a BCA student at Bareilly College, Bareilly
              affiliated with Mahatma Jyotiba Phule Rohilkhand University
              (MJPRU).

              I enjoy building modern, responsive and user-friendly web
              applications using React.js, Firebase and Tailwind CSS.

            </p>

          </div>

          <div className="space-y-6">

            <div className="bg-slate-900 rounded-2xl p-6">
              <FaReact className="text-cyan-400 text-4xl mb-3" />
              <h3 className="text-xl font-bold text-white">
                React.js
              </h3>
              <p className="text-slate-400 mt-2">
                Modern Frontend Development
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6">
              <FaLaptopCode className="text-green-400 text-4xl mb-3" />
              <h3 className="text-xl font-bold text-white">
                Firebase
              </h3>
              <p className="text-slate-400 mt-2">
                Authentication & Cloud Database
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6">
              <FaCode className="text-yellow-400 text-4xl mb-3" />
              <h3 className="text-xl font-bold text-white">
                Skills
              </h3>
              <p className="text-slate-400 mt-2">
                HTML • CSS • JavaScript • React • Tailwind CSS • Firebase
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;