import { Code2, Layers, Cloud, Settings } from "lucide-react";

const Skills = () => (
  <section className="container mx-auto py-8 px-4" id="skills">
    <h2 className="flex items-center gap-2 text-3xl font-bold mb-6 text-blue-600">
      <Code2 className="text-blue-500" size={28} /> Skills & Tools
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-center">
        <div className="flex justify-center mb-2">
          <Code2 className="text-blue-600" size={24} />
        </div>
        <span className="block text-blue-600 font-bold text-lg mb-2">
          Languages
        </span>
        <ul className="text-gray-700 dark:text-gray-200">
          <li>Java</li>
          <li>SQL</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-center">
        <div className="flex justify-center mb-2">
          <Layers className="text-blue-600" size={24} />
        </div>
        <span className="block text-blue-600 font-bold text-lg mb-2">
          Frameworks & Libraries
        </span>
        <ul className="text-gray-700 dark:text-gray-200">
          <li>Angular</li>
          <li>Spring Boot</li>
          <li>jQuery</li>
          <li>React</li>
          <li>Maven</li>
          <li>Node.js</li>
        </ul>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-center">
        <div className="flex justify-center mb-2">
          <Cloud className="text-blue-600" size={24} />
        </div>
        <span className="block text-blue-600 font-bold text-lg mb-2">
          DevOps & Cloud
        </span>
        <ul className="text-gray-700 dark:text-gray-200">
          <li>Git</li>
          <li>GitHub</li>
          <li>Jenkins</li>
          <li>AWS</li>
          <li>Azure DevOps</li>
        </ul>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 text-center">
        <div className="flex justify-center mb-2">
          <Settings className="text-blue-600" size={24} />
        </div>
        <span className="block text-blue-600 font-bold text-lg mb-2">
          Other Tools
        </span>
        <ul className="text-gray-700 dark:text-gray-200">
          <li>Swagger</li>
          <li>Github Copilot</li>
          <li>MySQL</li>
          <li>Jira</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
