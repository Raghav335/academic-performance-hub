import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaUserCircle,
  FaTachometerAlt,
  FaCalculator,
  FaHistory,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaGraduationCap,
} from "react-icons/fa";

import { auth } from "../../firebase/firebaseConfig";
import { logoutUser } from "../../services/authService";

function DashboardNavbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const user = auth.currentUser;

  const closeMenu = () => setMenuOpen(false);

  const handleLogout = async () => {
    try {
      await logoutUser();

      navigate("/login");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link
          to="/dashboard"
          className="flex items-center gap-3"
        >

          <div className="bg-blue-600 p-3 rounded-xl">
            <FaGraduationCap className="text-white text-xl" />
          </div>

          <div>
            <h1 className="text-white font-bold text-lg">
              Academic Hub
            </h1>

            <p className="text-slate-400 text-xs">
              Student Dashboard
            </p>
          </div>

        </Link>

        <nav className="hidden lg:flex items-center gap-7">

          <Link
            to="/dashboard"
            className="text-slate-300 hover:text-blue-400 flex items-center gap-2"
          >
            <FaTachometerAlt />
            Dashboard
          </Link>

          <Link
            to="/calculator"
            className="text-slate-300 hover:text-blue-400 flex items-center gap-2"
          >
            <FaCalculator />
            Calculator
          </Link>

          <Link
            to="/history"
            className="text-slate-300 hover:text-blue-400 flex items-center gap-2"
          >
            <FaHistory />
            History
          </Link>

          <Link
            to="/profile"
            className="text-slate-300 hover:text-blue-400 flex items-center gap-2"
          >
            <FaUser />
            Profile
          </Link>

          <Link
            to="/settings"
            className="text-slate-300 hover:text-blue-400 flex items-center gap-2"
          >
            <FaCog />
            Settings
          </Link>

        </nav>{/* Desktop User */}

        <div className="hidden lg:flex items-center gap-4">

          <div className="text-right">

            <h3 className="text-white font-semibold">
              {user?.displayName || "Student"}
            </h3>

            <p className="text-slate-400 text-xs">
              {user?.email}
            </p>

          </div>

          <FaUserCircle className="text-4xl text-blue-400" />

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-xl text-white flex items-center gap-2"
          >
            <FaSignOutAlt />
            Logout
          </button>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {menuOpen && (

        <div className="lg:hidden bg-slate-950 border-t border-slate-800">

          <div className="flex flex-col gap-5 p-6">

            <Link to="/dashboard" onClick={closeMenu} className="text-white">
              Dashboard
            </Link>

            <Link to="/calculator" onClick={closeMenu} className="text-white">
              Calculator
            </Link>

            <Link to="/history" onClick={closeMenu} className="text-white">
              History
            </Link>

            <Link to="/profile" onClick={closeMenu} className="text-white">
              Profile
            </Link>

            <Link to="/settings" onClick={closeMenu} className="text-white">
              Settings
            </Link>

            <hr className="border-slate-700" />

            <div>

              <p className="text-white font-semibold">
                {user?.displayName || "Student"}
              </p>

              <p className="text-slate-400 text-sm">
                {user?.email}
              </p>

            </div>

            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 py-3 rounded-xl text-white flex justify-center items-center gap-2"
            >
              <FaSignOutAlt />
              Logout
            </button>

          </div>

        </div>

      )}

    </header>
  );
}

export default DashboardNavbar;