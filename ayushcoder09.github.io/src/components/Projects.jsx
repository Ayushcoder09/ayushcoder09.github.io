import React, { lazy, Suspense } from "react";

const FolderKanban = lazy(() =>
  import("lucide-react").then((m) => ({ default: m.FolderKanban }))
);
const Clock = lazy(() => import("lucide-react").then((m) => ({ default: m.Clock })));

const Projects = () => (
  <section
    className="container mx-auto py-8 px-4 bg-white dark:bg-gray-800"
    id="projects"
  >
    <h2 className="flex items-center gap-2 text-3xl font-bold mb-6 text-blue-600">
      <Suspense
        fallback={
          <span className="w-7 h-7 bg-blue-200 rounded animate-pulse" />
        }
      >
        {" "}
        <FolderKanban className="text-blue-500" size={28} />{" "}
      </Suspense>
      Projects
    </h2>
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow p-6 hover:shadow-lg transition flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <Suspense
            fallback={
              <span className="w-5 h-5 bg-blue-200 rounded animate-pulse" />
            }
          >
            {" "}
            <FolderKanban className="text-blue-400" size={20} />{" "}
          </Suspense>
          <h3 className="text-xl font-semibold">
            TaskMinder (Spring Boot & React)
          </h3>
        </div>
        <p className="mb-4">
          Enhanced frontend efficiency by implementing modular UI with React
          components, hooks, and props achieving a 20% reduction in load times.
          Implemented RESTful APIs in Spring Boot to handle CRUD operations for
          managing todo items. Integrated JWT with Spring Security for stateless
          authentication. Deployed on AWS Elastic Beanstalk and S3 for 99.9%
          uptime.
        </p>
        <a
          href="https://github.com/Ayushcoder09/todo-react-frontend"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Live Demo
        </a>
      </div>
      <div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow p-6 hover:shadow-lg transition flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <Suspense
            fallback={
              <span className="w-5 h-5 bg-blue-200 rounded animate-pulse" />
            }
          >
            {" "}
            <Clock className="text-blue-400" size={20} />{" "}
          </Suspense>
          <h3 className="text-xl font-semibold">Analog Clock</h3>
        </div>
        <p className="mb-4">
          Created a visually engaging experience by utilizing CSS transforms to
          animate clock hands smoothly. Enhanced real-time functionality by
          implementing JavaScript event handling for accurate and continuous
          time updates, leading to 80+ user interactions.
        </p>
        <a
          href="https://ayushcoder09.github.io/AnalogClock/"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Live Demo
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
