import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGraduationCap,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3 mb-4">

              <div className="bg-blue-600 p-3 rounded-xl">
                <FaGraduationCap className="text-white text-xl" />
              </div>

              <div>

                <h2 className="text-2xl font-bold text-white">
                  Academic Performance Hub
                </h2>

                <p className="text-slate-400 text-sm">
                  Track • Analyze • Improve
                </p>

              </div>

            </div>

            <p className="text-slate-400 leading-7">
              Academic Performance Hub helps students calculate
              SGPA & CGPA, analyze academic progress, generate
              PDF reports and improve performance through AI
              study insights.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-xl font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <a href="#home" className="hover:text-blue-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#features" className="hover:text-blue-400">
                  Features
                </a>
              </li>

              <li>
                <a href="#analytics" className="hover:text-blue-400">
                  Analytics
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-blue-400">
                  About
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-white text-xl font-bold mb-5">
              Connect With Me
            </h3>

            <div className="flex gap-5 mb-5">

              <a
                href="mailto:raghavgupta805288@gmail.com"
                className="bg-red-600 hover:bg-red-700 p-4 rounded-xl transition"
              >
                <FaEnvelope className="text-white text-xl" />
              </a>

              <a
                href="https://github.com/Raghav335"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700 hover:bg-slate-600 p-4 rounded-xl transition"
              >
                <FaGithub className="text-white text-xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/raghav-gupta-8a9152328"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-4 rounded-xl transition"
              >
                <FaLinkedin className="text-white text-xl" />
              </a>

            </div>

            <p className="text-slate-400">
              📍 Bareilly, Uttar Pradesh, India
            </p>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center">

          <p className="text-slate-400">
            © 2026 Academic Performance Hub. All Rights Reserved.
          </p>

          <p className="text-blue-400 mt-2">
            Designed & Developed by <strong>Raghav Gupta</strong> ❤️
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;