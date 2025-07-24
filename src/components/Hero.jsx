import { useEffect, useRef } from "react";

const Hero = () => {
  const headingRef = useRef(null);
  const subtextRef = useRef(null);
  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);

  useEffect(() => {
    headingRef.current.classList.add("animate-fade-in-up");
    setTimeout(() => {
      subtextRef.current.classList.add("animate-fade-in-up");
    }, 300);
    setTimeout(() => {
      btn1Ref.current.classList.add("animate-fade-in-up");
      btn2Ref.current.classList.add("animate-fade-in-up");
    }, 600);
  }, []);

  return (
    <section
      className="container mx-auto flex flex-col items-center py-16 px-4 text-center"
      id="hero"
    >
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 2.5s ease-in-out infinite;
        }
      `}</style>
      <div className="flex items-center justify-center mb-4">
        <h1
          ref={headingRef}
          className="text-5xl md:text-6xl font-extrabold opacity-0"
        >
          Building Ideas Into{" "}
          <span className="text-blue-600">Impactful Solutions</span>
        </h1>
      </div>
      <p
        ref={subtextRef}
        className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-200 max-w-2xl mx-auto opacity-0"
      >
        I’m Ayush Maheshwari, a passionate Full Stack Developer specializing in
        Java, Spring Boot, and React. I turn complex challenges into
        seamless digital experiences for businesses and users alike.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <a
          ref={btn1Ref}
          href="#projects"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition opacity-0"
        >
          View My Work
        </a>
        <a
          ref={btn2Ref}
          href="/AyushResume.pdf"
          download
          className="inline-block bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-50 transition opacity-0"
        >
          Download Resume
        </a>
      </div>
      <p className="text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
        Experienced in cloud platforms (AWS, Azure), CI/CD automation, and Agile
        teams. Let’s build something amazing together!
      </p>
    </section>
  );
};

export default Hero;
