import React from "react";

const handleResumeDownload = () => {
  const link = document.createElement("a");
  link.href = "/src/assets/AyushResume.pdf";
  link.download = "AyushResume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Header = ({ theme, toggleTheme }) => (
  <header className="sticky top-0 z-30 bg-white/90 dark:bg-gray-950/90 shadow-lg backdrop-blur-md border-b border-blue-100 dark:border-gray-800 font-sans">
    <div className="container mx-auto flex flex-wrap justify-between items-center py-3 px-4 md:px-8">
      <span className="text-2xl font-extrabold text-blue-700 dark:text-blue-400 tracking-tight">
        Ayush Maheshwari
      </span>
      <nav className="hidden md:flex items-center space-x-2 lg:space-x-4 text-base font-medium">
        <a
          href="#hero"
          className="nav-link px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition"
        >
          Home
        </a>
        <a
          href="#projects"
          className="nav-link px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition"
        >
          Projects
        </a>
        <a
          href="#experience"
          className="nav-link px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition"
        >
          Experience
        </a>
        <a
          href="#education"
          className="nav-link px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition"
        >
          Education
        </a>
        <a
          href="#skills"
          className="nav-link px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition"
        >
          Skills
        </a>
        <a
          href="#certificates"
          className="nav-link px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition"
        >
          Certificates
        </a>
        <a
          href="#achievements"
          className="nav-link px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition"
        >
          Achievements
        </a>
        <a
          href="#contact"
          className="nav-link px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition"
        >
          Contact
        </a>
      </nav>
      <div className="flex items-center space-x-2 mt-4 md:mt-0">
        <button
          onClick={handleResumeDownload}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition text-sm"
        >
          Download Resume
        </button>
        <button
          onClick={toggleTheme}
          className="ml-2 p-2 rounded-full border border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
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
    </div>
    {/* Mobile nav */}
    <nav className="md:hidden flex flex-wrap justify-center gap-2 pb-2 mt-2 text-base font-medium">
      <a
        href="#hero"
        className="nav-link px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition"
      >
        Home
      </a>
      <a
        href="#projects"
        className="nav-link px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition"
      >
        Projects
      </a>
      <a
        href="#experience"
        className="nav-link px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition"
      >
        Experience
      </a>
      <a
        href="#education"
        className="nav-link px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition"
      >
        Education
      </a>
      <a
        href="#skills"
        className="nav-link px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition"
      >
        Skills
      </a>
      <a
        href="#certificates"
        className="nav-link px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition"
      >
        Certificates
      </a>
      <a
        href="#achievements"
        className="nav-link px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition"
      >
        Achievements
      </a>
      <a
        href="#contact"
        className="nav-link px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900 transition"
      >
        Contact
      </a>
    </nav>
  </header>
);

export default Header;
