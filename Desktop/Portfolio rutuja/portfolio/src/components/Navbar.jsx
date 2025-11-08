import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="py-4 bg-transparent">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <div className="text-xl font-semibold">
          <NavLink to="/">Rutuja Kulkarni</NavLink>
        </div>
        <div className="flex gap-4 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary font-medium" : "hover:text-primary"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-primary font-medium" : "hover:text-primary"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/experience"
            className={({ isActive }) =>
              isActive ? "text-primary font-medium" : "hover:text-primary"
            }
          >
            Experience
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-primary font-medium" : "hover:text-primary"
            }
          >
            Contact
          </NavLink>
          <a
            href="/Rutuja'sFullStackResume.pdf"
            target="_blank"
            className="ml-2 inline-block px-3 py-1 border rounded-md text-sm"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
