import React, { useState } from "react";

const Header = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/40 dark:bg-gray-950/40 shadow-lg backdrop-blur-md border-b border-blue-100 dark:border-gray-800 font-sans">
      <div className="container mx-auto flex justify-between items-center py-3 px-4 md:px-8">
        {/* Hamburger icon for mobile - left of name */}
        <button
          className="md:hidden flex items-center p-2 rounded-lg hover:bg-blue-100/60 dark:hover:bg-blue-900/60 transition mr-2"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-blue-700 dark:text-blue-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
        <span className="text-2xl font-extrabold text-blue-700 dark:text-blue-400 tracking-tight">
          Ayush Maheshwari
        </span>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-4 text-base font-medium">
          <a
            href="#hero"
            className="nav-link px-3 py-2 rounded-lg hover:bg-blue-100/60 dark:hover:bg-blue-900/60 transition"
          >
            Home
          </a>
          <a
            href="#projects"
            className="nav-link px-3 py-2 rounded-lg hover:bg-blue-100/60 dark:hover:bg-blue-900/60 transition"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="nav-link px-3 py-2 rounded-lg hover:bg-blue-100/60 dark:hover:bg-blue-900/60 transition"
          >
            Experience
          </a>
          <a
            href="#education"
            className="nav-link px-3 py-2 rounded-lg hover:bg-blue-100/60 dark:hover:bg-blue-900/60 transition"
          >
            Education
          </a>
          <a
            href="#skills"
            className="nav-link px-3 py-2 rounded-lg hover:bg-blue-100/60 dark:hover:bg-blue-900/60 transition"
          >
            Skills
          </a>
          <a
            href="#certificates"
            className="nav-link px-3 py-2 rounded-lg hover:bg-blue-100/60 dark:hover:bg-blue-900/60 transition"
          >
            Certificates
          </a>
          <a
            href="#contact"
            className="nav-link px-3 py-2 rounded-lg hover:bg-blue-100/60 dark:hover:bg-blue-900/60 transition"
          >
            Contact
          </a>
        </nav>
        <button
          onClick={toggleTheme}
          className="ml-2 p-2 rounded-full border border-blue-200 dark:border-blue-700 bg-blue-50/60 dark:bg-gray-800/60 hover:bg-blue-100/80 dark:hover:bg-gray-700/80 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? (
            <svg
              className="w-6 h-6 text-blue-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="5" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.414-1.414M6.343 6.343L4.929 4.929m12.02 0l-1.414 1.414M6.343 17.657l-1.414 1.414"
              />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile nav - hamburger menu left-aligned */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col items-start gap-2 pb-2 mt-2 text-base font-medium animate-fade-in-up pl-4">
          <a
            href="#hero"
            className="nav-link w-full px-3 py-2 rounded-lg hover:bg-blue-100/60 dark:hover:bg-blue-900/60 transition text-left"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#projects"
            className="nav-link w-full px-3 py-2 rounded-lg hover:bg-blue-100/60 dark:hover:bg-blue-900/60 transition text-left"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#experience"
            className="nav-link w-full px-3 py-2 rounded-lg hover:bg-blue-100/60 dark:hover:bg-blue-900/60 transition text-left"
            onClick={() => setMenuOpen(false)}
          >
            Experience
          </a>
          <a
            href="#education"
            className="nav-link w-full px-3 py-2 rounded-lg hover:bg-blue-100/60 dark:hover:bg-blue-900/60 transition text-left"
            onClick={() => setMenuOpen(false)}
          >
            Education
          </a>
          <a
            href="#skills"
            className="nav-link w-full px-3 py-2 rounded-lg hover:bg-blue-100/60 dark:hover:bg-blue-900/60 transition text-left"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#certificates"
            className="nav-link w-full px-3 py-2 rounded-lg hover:bg-blue-100/60 dark:hover:bg-blue-900/60 transition text-left"
            onClick={() => setMenuOpen(false)}
          >
            Certificates
          </a>
          <a
            href="#contact"
            className="nav-link w-full px-3 py-2 rounded-lg hover:bg-blue-100/60 dark:hover:bg-blue-900/60 transition text-left"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
