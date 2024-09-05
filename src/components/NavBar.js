import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="bg-slate-50 backdrop-filter bg-opacity-5 backdrop-blur-lg p-4 fixed top-0 left-0 w-full z-10">
      <ul className="flex justify-around text-white">
        <li>
          <Link to="overview" smooth={true} duration={500}>
            Overview
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="education" smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
