import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-50 backdrop-filter bg-opacity-5 backdrop-blur-lg p-4 fixed top-0 left-0 w-full z-10 flex justify-between items-center">
      {/* Placeholder image in a circle */}
      {/* <div className="w-12 h-12 bg-gray-300 rounded-full"></div> */}
      <img className="w-12 h-12 bg-gray-300 rounded-full" src="/headshot.png" />

      {/* Desktop and tablet menu */}
      <ul className="hidden md:flex space-x-8 text-white">
        <li className="relative group">
          <Link to="overview" smooth={true} duration={500}>
            Overview
          </Link>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </li>
        <li className="relative group">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </li>
        <li className="relative group">
          <Link to="education" smooth={true} duration={500}>
            Projects
          </Link>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </li>
        <li className="relative group">
          <Link to="projects" smooth={true} duration={500}>
            Education
          </Link>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </li>
      </ul>

      {/* Hamburger menu button (visible on mobile) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {/* Icon for hamburger */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-slate-50 backdrop-filter bg-opacity-5 backdrop-blur-lg p-4 flex flex-col items-center space-y-4 text-white">
          <li className="relative group">
            <Link
              to="overview"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Overview
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </li>
          <li className="relative group">
            <Link to="work" smooth={true} duration={500} onClick={toggleMenu}>
              Work
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </li>
          <li className="relative group">
            <Link
              to="education"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Education
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </li>
          <li className="relative group">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
