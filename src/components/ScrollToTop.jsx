import { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    const handleScroll = () => {
      const btn = document.getElementById("scrollToTopBtn");
      if (window.scrollY > 300) {
        btn?.classList.remove("opacity-0", "pointer-events-none");
        btn?.classList.add("opacity-100");
      } else {
        btn?.classList.add("opacity-0", "pointer-events-none");
        btn?.classList.remove("opacity-100");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      id="scrollToTopBtn"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 opacity-0 pointer-events-none hover:bg-blue-700 focus:outline-none"
      aria-label="Scroll to top"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
