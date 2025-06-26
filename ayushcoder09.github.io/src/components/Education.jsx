import { GraduationCap } from "lucide-react";

const Education = () => (
  <section className="container mx-auto py-8 px-4" id="education">
    <h2 className="flex items-center gap-2 text-3xl font-bold mb-6 text-blue-600">
      <GraduationCap className="text-blue-500" size={28} /> Education
    </h2>
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <h3 className="text-xl font-semibold mb-2">
        Dr. A. P. J. Abdul Kalam Technical University
      </h3>
      <p className="text-gray-700 dark:text-gray-200 mb-1">
        BTech in Computer Science
      </p>
      <p className="text-gray-500 dark:text-gray-400 mb-1">
        July 2018 – July 2022
      </p>
      <p className="text-gray-700 dark:text-gray-200 mb-1">
        CGPA: <span className="font-bold">8/10</span>
      </p>
      <p className="text-gray-700 dark:text-gray-200">
        Coursework: Data Structures and Algorithms, DBMS, Operating System
      </p>
    </div>
  </section>
);

export default Education;
