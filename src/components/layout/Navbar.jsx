import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  FaGraduationCap,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/90 border-b border-slate-800 shadow-lg">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-3 rounded-xl shadow-lg">
            <FaGraduationCap className="text-white text-xl" />
          </div>

          <div>
            <h1 className="text-white text-xl font-bold">
              Academic Performance Hub
            </h1>

            <p className="text-slate-400 text-xs">
              Track • Analyze • Improve
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden lg:flex items-center gap-8">

          <HashLink
            smooth
            to="/#home"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            Home
          </HashLink>

          <HashLink
            smooth
            to="/#features"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            Features
          </HashLink>

          <HashLink
            smooth
            to="/#analytics"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            Analytics
          </HashLink>

          <HashLink
            smooth
            to="/#about"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            About
          </HashLink>

          <HashLink
            smooth
            to="/#contact"
            className="text-slate-300 hover:text-cyan-400 transition"
          >
            Contact
          </HashLink>

        </nav>

        {/* Right Buttons */}

        <div className="hidden lg:flex items-center gap-4">

          <Link
            to="/login"
            className="text-white px-5 py-2 rounded-xl hover:bg-slate-800 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition shadow-lg"
          >
            Get Started
          </Link>

        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>{/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-slate-950 border-t border-slate-800">

          <div className="flex flex-col p-6 gap-5">

            <HashLink
              smooth
              to="/#home"
              onClick={closeMenu}
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              Home
            </HashLink>

            <HashLink
              smooth
              to="/#features"
              onClick={closeMenu}
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              Features
            </HashLink>

            <HashLink
              smooth
              to="/#analytics"
              onClick={closeMenu}
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              Analytics
            </HashLink>

            <HashLink
              smooth
              to="/#about"
              onClick={closeMenu}
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              About
            </HashLink>

            <HashLink
              smooth
              to="/#contact"
              onClick={closeMenu}
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              Contact
            </HashLink>

            <hr className="border-slate-800" />

            <Link
              to="/login"
              onClick={closeMenu}
              className="w-full text-center py-3 rounded-xl border border-slate-700 text-white hover:bg-slate-800 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={closeMenu}
              className="w-full text-center py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
            >
              Get Started
            </Link>

          </div>

        </div>

      )}

    </header>
  );
}

export default Navbar;