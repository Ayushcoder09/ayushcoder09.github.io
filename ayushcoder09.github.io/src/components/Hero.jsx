import { User } from "lucide-react";

const Hero = () => (
  <section
    className="container mx-auto flex flex-col items-center py-8 px-4 text-center"
    id="hero"
  >
    <div className="flex items-center justify-center mb-2">
      <User className="text-blue-600 mr-2" size={36} />
      <h1 className="text-4xl md:text-5xl font-extrabold">
        Hi, I'm <span className="text-blue-600">Ayush Maheshwari</span>
      </h1>
    </div>
    <p className="text-lg md:text-xl mb-6">
      Full Stack Developer | Java Spring Boot | Angular | React | Microservices
      | Agile
    </p>
    <p className="mb-6 text-gray-700 dark:text-gray-200 max-w-xl mx-auto">
      With 2.9 years of hands-on experience as a Full Stack Developer, I excel
      in designing and building robust backend systems using Java, Spring Boot,
      and microservices, as well as delivering dynamic front-end applications
      with Angular. I am highly skilled in Agile methodologies and the full
      software development lifecycle (SDLC), ensuring timely and efficient
      project delivery. My expertise spans cloud platforms (AWS, Azure), CI/CD
      automation with Jenkins, and collaborative code management using GitHub. I
      am passionate about solving complex technical challenges, optimizing
      system performance, and driving innovation in cross-functional teams to
      deliver impactful business solutions.
    </p>
    <a
      href="#projects"
      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
    >
      View My Work
    </a>
  </section>
);

export default Hero;
