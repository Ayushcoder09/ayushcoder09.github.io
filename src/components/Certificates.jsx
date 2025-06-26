import React, { lazy, Suspense } from "react";

const Award = lazy(() =>
  import("lucide-react").then((m) => ({ default: m.Award }))
);
const BadgeCheck = lazy(() =>
  import("lucide-react").then((m) => ({ default: m.BadgeCheck }))
);
const BookOpen = lazy(() =>
  import("lucide-react").then((m) => ({ default: m.BookOpen }))
);
const Languages = lazy(() =>
  import("lucide-react").then((m) => ({ default: m.Languages }))
);
const Cloud = lazy(() =>
  import("lucide-react").then((m) => ({ default: m.Cloud }))
);
const Code2 = lazy(() =>
  import("lucide-react").then((m) => ({ default: m.Code2 }))
);
const ExternalLink = lazy(() =>
  import("lucide-react").then((m) => ({ default: m.ExternalLink }))
);

const Certificates = () => (
  <section className="container mx-auto py-8 px-4" id="certificates">
    <h2 className="flex items-center gap-2 text-3xl font-bold mb-6 text-blue-600">
      <Suspense
        fallback={
          <span className="w-7 h-7 bg-blue-200 rounded animate-pulse" />
        }
      >
        {" "}
        <Award className="text-blue-500" size={28} />{" "}
      </Suspense>
      Certificates
    </h2>
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow p-4 relative overflow-visible">
        <span className="absolute -top-3 -left-3 flex items-center gap-1 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
          <Suspense
            fallback={
              <span className="w-4 h-4 bg-green-200 rounded animate-pulse" />
            }
          >
            {" "}
            <BadgeCheck className="w-4 h-4" />{" "}
          </Suspense>
          CERTIFIED
        </span>
        <div className="flex items-center gap-2 mb-2">
          <Suspense
            fallback={
              <span className="w-5 h-5 bg-blue-200 rounded animate-pulse" />
            }
          >
            {" "}
            <Cloud className="text-blue-400" size={20} />{" "}
          </Suspense>
          <h3 className="text-lg font-semibold">
            AWS Certified Cloud Practitioner
          </h3>
          <a
            href="https://drive.google.com/file/d/1-d2JYgNSJzFN3UTeZXbeI5Eu2e86An-a/view"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-blue-600 hover:underline inline-flex items-center"
          >
            <Suspense
              fallback={
                <span className="w-4 h-4 bg-blue-200 rounded animate-pulse" />
              }
            >
              {" "}
              <ExternalLink size={16} className="ml-1" />{" "}
            </Suspense>
          </a>
        </div>
        <span className="text-gray-500 text-sm">Amazon Web Services</span>
        <p className="text-gray-700 dark:text-gray-200 mt-2">
          Proficient in cloud computing concepts and AWS services including EC2,
          S3, RDS, Lambda, and IAM, with expertise in cloud architecture,
          security, and cost management.
        </p>
      </div>
      <div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow p-4 relative overflow-visible">
        <span className="absolute -top-3 -left-3 flex items-center gap-1 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
          <Suspense
            fallback={
              <span className="w-4 h-4 bg-green-200 rounded animate-pulse" />
            }
          >
            {" "}
            <BadgeCheck className="w-4 h-4" />{" "}
          </Suspense>
          CERTIFIED
        </span>
        <div className="flex items-center gap-2 mb-2">
          <Suspense
            fallback={
              <span className="w-5 h-5 bg-blue-200 rounded animate-pulse" />
            }
          >
            {" "}
            <Code2 className="text-blue-400" size={20} />{" "}
          </Suspense>
          <h3 className="text-lg font-semibold">GitHub Copilot Certified</h3>
          <a
            href="https://drive.google.com/file/d/1_TrnpjVuEyXMQZ4QL3_n028Y7y3mMHIL/view"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-blue-600 hover:underline inline-flex items-center"
          >
            <Suspense
              fallback={
                <span className="w-4 h-4 bg-blue-200 rounded animate-pulse" />
              }
            >
              {" "}
              <ExternalLink size={16} className="ml-1" />{" "}
            </Suspense>
          </a>
        </div>
        <span className="text-gray-500 text-sm">GitHub</span>
        <p className="text-gray-700 dark:text-gray-200 mt-2">
          Demonstrated proficiency in leveraging AI-powered coding assistance to
          enhance development efficiency and code quality.
        </p>
      </div>
      <div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow p-4 relative overflow-visible">
        <span className="absolute -top-3 -left-3 flex items-center gap-1 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
          <Suspense
            fallback={
              <span className="w-4 h-4 bg-green-200 rounded animate-pulse" />
            }
          >
            {" "}
            <BadgeCheck className="w-4 h-4" />{" "}
          </Suspense>
          CERTIFIED
        </span>
        <div className="flex items-center gap-2 mb-2">
          <Suspense
            fallback={
              <span className="w-5 h-5 bg-blue-200 rounded animate-pulse" />
            }
          >
            {" "}
            <BookOpen className="text-blue-400" size={20} />{" "}
          </Suspense>
          <h3 className="text-lg font-semibold">GitHub Foundations</h3>
          <a
            href="https://drive.google.com/file/d/1lwsEZC4lQ3WYqilbY1jN_Kwa__EuKYLw/view"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-blue-600 hover:underline inline-flex items-center"
          >
            <Suspense
              fallback={
                <span className="w-4 h-4 bg-blue-200 rounded animate-pulse" />
              }
            >
              {" "}
              <ExternalLink size={16} className="ml-1" />{" "}
            </Suspense>
          </a>
        </div>
        <span className="text-gray-500 text-sm">GitHub</span>
        <p className="text-gray-700 dark:text-gray-200 mt-2">
          Certified in GitHub Foundations, demonstrating proficiency in version
          control, repository management, and collaborative development.
        </p>
      </div>
      <div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow p-4 relative overflow-visible">
        <span className="absolute -top-3 -left-3 flex items-center gap-1 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
          <Suspense
            fallback={
              <span className="w-4 h-4 bg-green-200 rounded animate-pulse" />
            }
          >
            {" "}
            <BadgeCheck className="w-4 h-4" />{" "}
          </Suspense>
          CERTIFIED
        </span>
        <div className="flex items-center gap-2 mb-2">
          <Suspense
            fallback={
              <span className="w-5 h-5 bg-blue-200 rounded animate-pulse" />
            }
          >
            {" "}
            <Languages className="text-blue-400" size={20} />{" "}
          </Suspense>
          <h3 className="text-lg font-semibold">
            Business English Certificate (BEC) by Cambridge
          </h3>
          <a
            href="https://drive.google.com/file/d/1zGicHtlXaAV4t6Ef0vrDMQ8HIaMfI0c_/view"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 text-blue-600 hover:underline inline-flex items-center"
          >
            <Suspense
              fallback={
                <span className="w-4 h-4 bg-blue-200 rounded animate-pulse" />
              }
            >
              {" "}
              <ExternalLink size={16} className="ml-1" />{" "}
            </Suspense>
          </a>
        </div>
        <span className="text-gray-500 text-sm">Cambridge</span>
        <p className="text-gray-700 dark:text-gray-200 mt-2">
          Secured B2 grade which is equivalent to 9/10.
        </p>
      </div>
    </div>
  </section>
);

export default Certificates;
