import React from "react";

const Footer = () => (
  <footer className="text-center py-4 bg-white/90 dark:bg-gray-950/90 border-t mt-6 transition-colors duration-300">
    <div className="flex justify-center space-x-6 mb-2">
      <a
        href="https://github.com/Ayushcoder09"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
        </svg>
      </a>
      <a
        href="https://linkedin.com/in/ayush-maheshwari09"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z" />
        </svg>
      </a>
      <a
        href="mailto:Ayushmaheshwari09.am.am@gmail.com"
        className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <svg className="w-6 h-6 inline" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 4H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 3 6.01V6h18zM3 20V8.236l8.293 6.293a1 1 0 001.414 0L21 8.236V20H3z" />
        </svg>
      </a>
    </div>
    <div className="text-gray-600 dark:text-gray-400 text-sm">
      &copy; {new Date().getFullYear()} Ayush Maheshwari &nbsp; Noida, India —
      Open to remote and hybrid full stack opportunities
    </div>
  </footer>
);

export default Footer;
