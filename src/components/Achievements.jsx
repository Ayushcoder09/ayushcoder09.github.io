import { Trophy } from "lucide-react";

const Achievements = () => (
  <section className="container mx-auto py-8 px-4" id="achievements">
    <h2 className="flex items-center gap-2 text-3xl font-bold mb-6 text-blue-600">
      <Trophy className="text-blue-500" size={28} /> Achievements
    </h2>
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2">
        <li>
          Recognized by Business Unit as{" "}
          <span className="font-semibold">Star of the Month</span> in January
          and February 2025 at Cognizant for Outstanding Performance.
        </li>
        <li>
          Received client appreciation for significantly improving the UI’s
          visual appeal.
        </li>
      </ul>
    </div>
  </section>
);

export default Achievements;
