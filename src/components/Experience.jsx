import { Briefcase } from "lucide-react";

const Experience = () => (
  <section className="container mx-auto py-8 px-4" id="experience">
    <h2 className="flex items-center gap-2 text-3xl font-bold mb-6 text-blue-600">
      <Briefcase className="text-blue-500" size={28} /> Experience
    </h2>
    <div className="space-y-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold mb-2">
          Full Stack Developer, Cognizant - Noida (Hybrid), Client - Health Care
          Service Corporation (HCSC)
        </h3>
        <span className="text-gray-500 text-sm">Oct 2024 – Present</span>
        <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-200">
          <li>
            Contributed to the development of a Single Page Application (SPA)
            based on micro-frontend architecture using React, enhancing user
            engagement by 15%.
          </li>
          <li>
            Spearheaded backend microservices development using Java and Spring
            Boot, leading to a 25% improvement in system performance.
          </li>
          <li>
            Collaborated daily with cross-functional teams, utilizing tools such
            as GitHub to ensure project success, resulting in a 20% increase in
            code quality and efficiency.
          </li>
          <li>
            Utilized CI/CD tools like Jenkins, PCF, and UCD to automate the
            deployment process, reducing deployment time by 30%.
          </li>
        </ul>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold mb-2">
          Full Stack Developer, Cognizant - Noida (Hybrid), Client - Excellus
          BCBS
        </h3>
        <span className="text-gray-500 text-sm">Aug 2022 – Oct 2024</span>
        <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-200">
          <li>
            Enhanced user engagement by developing a dynamic provider page using
            JavaScript, Core Java, and Spring MVC, leading to 20% increase in
            data collection efficiency.
          </li>
          <li>
            Improved Veracode & Sonar code performance score from 60% to 83% by
            optimizing Java and JavaScript logic across multiple pages.
          </li>
          <li>
            Improved user experience by developing and implementing JavaScript
            input fields on the claim page with enhanced jQuery-based validation
            reducing input errors by 15%.
          </li>
          <li>
            Ensured high-quality production releases by conducting comprehensive
            User Acceptance Testing (UAT) and orchestrating smooth deployments
            on Microsoft Azure.
          </li>
          <li>
            Enhanced application quality and usability by incorporating
            stakeholders feedback into iterative improvements throughout
            development lifecycle.
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;
