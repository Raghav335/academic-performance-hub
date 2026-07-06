import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaUniversity,
  FaUserTie,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">
            Contact Me
          </h2>

          <p className="text-slate-400 text-lg mt-4">
            Feel free to connect with me for collaboration, projects and opportunities.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Information */}

          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8">

            <h3 className="text-3xl font-bold text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaUserTie className="text-blue-500 text-3xl" />
                <div>
                  <h4 className="text-white font-semibold">
                    Name
                  </h4>

                  <p className="text-slate-400">
                    Raghav Gupta
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaUniversity className="text-green-500 text-3xl" />
                <div>
                  <h4 className="text-white font-semibold">
                    College
                  </h4>

                  <p className="text-slate-400">
                    Bareilly College, Bareilly (MJPRU)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-red-500 text-3xl" />
                <div>
                  <h4 className="text-white font-semibold">
                    Location
                  </h4>

                  <p className="text-slate-400">
                    Bareilly, Uttar Pradesh, India
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Social Links */}

          <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8">

            <h3 className="text-3xl font-bold text-white mb-8">
              Connect With Me
            </h3>

            <div className="flex flex-col gap-5">

              <a
                href="mailto:raghavgupta805288@gmail.com"
                className="flex items-center gap-4 bg-red-600 hover:bg-red-700 rounded-2xl p-5 text-white transition duration-300"
              >
                <FaEnvelope className="text-3xl" />

                <div>
                  <h4 className="font-bold">
                    Email
                  </h4>

                  <p className="text-sm">
                    raghavgupta805288@gmail.com
                  </p>

                </div>

              </a>

              <a
                href="https://github.com/Raghav335"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-slate-700 hover:bg-slate-600 rounded-2xl p-5 text-white transition duration-300"
              >
                <FaGithub className="text-3xl" />

                <div>
                  <h4 className="font-bold">
                    GitHub
                  </h4>

                  <p className="text-sm">
                    github.com/Raghav335
                  </p>

                </div>

              </a>

              <a
                href="https://www.linkedin.com/in/raghav-gupta-8a9152328"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-blue-600 hover:bg-blue-700 rounded-2xl p-5 text-white transition duration-300"
              >
                <FaLinkedin className="text-3xl" />

                <div>
                  <h4 className="font-bold">
                    LinkedIn
                  </h4>

                  <p className="text-sm">
                    Raghav Gupta
                  </p>

                </div>

              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;