import toast, { Toaster } from "react-hot-toast";
import DashboardNavbar from "../../components/layout/DashboardNavbar";

function Settings() {

  const clearAllData = () => {
    if (!window.confirm("Delete all saved data?")) return;

    localStorage.removeItem("academic_performance_history");
    localStorage.removeItem("studentProfile");

    toast.success("All Data Cleared!");
  };

  return (
    <>
      <Toaster position="top-right" />

      <div className="min-h-screen bg-slate-950 text-white">

        <DashboardNavbar />

        <div className="max-w-4xl mx-auto px-6 py-10">

          <div className="mb-8">

            <h1 className="text-4xl font-bold">
              ⚙️ Settings
            </h1>

            <p className="text-slate-400 mt-2">
              Manage your application settings.
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <button
              onClick={clearAllData}
              className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-xl font-semibold transition"
            >
              🗑 Clear All Data
            </button>

            <div className="mt-10 border-t border-slate-800 pt-8">

              <h2 className="text-2xl font-bold mb-5">
                ℹ️ About Application
              </h2>

              <div className="space-y-3 text-slate-300">

                <p>
                  <span className="font-semibold text-white">
                    Application:
                  </span>{" "}
                  Academic Performance Hub
                </p>

                <p>
                  <span className="font-semibold text-white">
                    Version:
                  </span>{" "}
                  1.0.0
                </p>

                <p>
                  <span className="font-semibold text-white">
                    Technology:
                  </span>{" "}
                  React.js, Tailwind CSS, Firebase Authentication
                </p>

                <p>
                  <span className="font-semibold text-white">
                    Developed By:
                  </span>{" "}
                  Raghav Gupta
                </p>

              </div>

            </div>

            <div className="mt-10 border-t border-slate-800 pt-8">

              <h2 className="text-2xl font-bold mb-6">
                🌐 Connect With Me
              </h2>

              <div className="grid md:grid-cols-3 gap-5">

                <a
                  href="mailto:raghavgupta805288@gmail.com"
                  className="bg-red-600 hover:bg-red-700 rounded-2xl p-5 text-center transition"
                >
                  <div className="text-3xl mb-2">
                    📧
                  </div>

                  <h3 className="font-bold">
                    Email
                  </h3>

                </a>

                <a
                  href="https://github.com/Raghav335"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 hover:bg-slate-700 rounded-2xl p-5 text-center transition"
                >
                  <div className="text-3xl mb-2">
                    💻
                  </div>

                  <h3 className="font-bold">
                    GitHub
                  </h3>

                </a>

                <a
                  href="https://www.linkedin.com/in/raghav-gupta-8a9152328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 rounded-2xl p-5 text-center transition"
                >
                  <div className="text-3xl mb-2">
                    💼
                  </div>

                  <h3 className="font-bold">
                    LinkedIn
                  </h3>

                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}

export default Settings;