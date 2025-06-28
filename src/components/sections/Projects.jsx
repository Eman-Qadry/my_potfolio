import { useState } from "react";
import { ArrowLeft, ArrowRight, Github } from "lucide-react"; // تأكد من تثبيت lucide-react

const projects = [
  {
    title: "Cyper Stude website",
    description: `A full-featured online learning platform designed to streamline the course creation and learning experience for both instructors and students.
			`,
    MyRole: [
      "Built the complete Instructor Dashboard using React and Tailwind",

      "Co-developed the Backend architecture, working in parallel with another teammate",

      "Created detailed API documentation using Swagger",
      
    ],
    link: "https://github.com/yourusername/ecommerce-platform",
    image:
      "https://th.bing.com/th/id/OIP.Ae9FqfJdVNE02qLB264kFwHaEK?rs=1&pid=ImgDetMain",
    tech: [
      "React",
      "Tailwind css",
      "ShadCN UI",
      "Node.js (DI Container)",
      "My SQL",
      "Swagger",
    ],
    features: [
      "User authentication",
      "course management",
      "custom coupons without limit",
      "instructor dashboard",
    ],
    frontend: "https://github.com/yourusername/ecommerce-frontend",
    backend: "https://github.com/yourusername/ecommerce-backend",
  },
  {
    title: "Who Wants to Be a Millionaire– Quiz Game",
    description:
      "A fully functional, interactive quiz game inspired by Who Wants to Be a Millionaire, built entirely using HTML, CSS, Bootstrap, and Vanilla JavaScript.",
    link: "https://github.com/Eman-Qadry/my_Game",
    image:
      "https://i.etsystatic.com/41088298/r/il/acce2c/4800245426/il_fullxfull.4800245426_k8ub.jpg",
    tech: ["Html", "Bootstrap", "CSS", "Vanilla JavaScript"],
    features: [
      "Dynamic question and answer logic",
      "Sound effects and visual feedback for correct/incorrect answers",
      "Score tracking and progression through increasing difficulty",
      "Responsive design with Bootstrap for a clean layout across devices",
    ],
    frontend: "https://github.com/yourusername/task-frontend",
    backend: "https://github.com/yourusername/task-backend",
  },
  {
    title: "Smart Farm System ",
    description:
      "A full-stack web application that helps farm owners manage their agricultural operations efficiently. The system provides dashboards for both admins and instructors, allowing real-time control and monitoring of farm data.",
    link: "https://github.com/Eman-Qadry/my_smartFarm",
    image:
      "https://th.bing.com/th/id/OIP._UkE4hMPv9w7EDrhZQM4AgHaFK?rs=1&pid=ImgDetMain",
    tech: ["Html","Bootstrap", "EJS", "Express.js", "MongoDB"],
    features: [
      "Manage Farms",
      "Identify Plants diseases",
      "View Weather Forecast",
      "Acess real time data ",
    ],
    frontend: "https://github.com/yourusername/analytics-frontend",
    backend: "https://github.com/yourusername/analytics-backend",
  },
  {
    title: "Online Courses Platform",
    description:
      "A structured backend API for managing online course content, designed to support both admin and user roles.",
    link: "https://github.com/Eman-Qadry/courses_api",
    image: "https://th.bing.com/th/id/OIP.qIOXrWlJjB2ymOVHL93MfAHaEw?rs=1&pid=ImgDetMain",
    tech: [ "Node.js", "Express", "MongoDB","JWT (for admin only)"],
    features: [
      "Admin: Add/edit/delete courses, topics, videos, and playlists",
      " User: View courses and browse content freely",
      "Modular structure: Separate routes, controllers, and validations",
      " Input validation & error handling",
    ],
    frontend: "https://github.com/yourusername/udemy-frontend",
    backend: "https://github.com/yourusername/udemy-backend",
  },
  {
    title: "Social Media App",
    description:
      "A fully-featured social media platform that enables users to connect, share, and communicate seamlessly.",
    link: "https://github.com/yourusername/social-app",
    image: "https://th.bing.com/th/id/OIP.uuWAsYuz98ylupws-O8ZuwHaEK?rs=1&pid=ImgDetMain",
    tech: ["React", "Tailwind CSS", "EXpress.js","MongoDB","Socket.IO"],
    features: [
      "Real-time chat",
      "User profiles and authentication",
      "Post creation and management",
	  "Like and comment functionality",
	  "Send & accept friend requests",
     "Stories (24-hour disappearing content)",
    ],
    frontend: "https://github.com/yourusername/social-frontend",
    backend: "https://github.com/yourusername/social-backend",
  },
];

const CARDS_PER_PAGE = 3;

export default function Projects() {
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(null);

  const maxPage = Math.ceil(projects.length / CARDS_PER_PAGE) - 1;
  const start = page * CARDS_PER_PAGE;
  const visibleProjects = projects.slice(start, start + CARDS_PER_PAGE);

  return (
    <section
      id="projects"
      className="py-24 px-4 bg-white dark:bg-neutral-900 transition-colors"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
        Featured Projects
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
        Here are some of my recent projects that showcase my skills and passion
        for creating exceptional digital experiences.
      </p>
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-1">
          {visibleProjects.map((project, i) => (
            <div
              key={i}
              className="group bg-gray-50 dark:bg-neutral-800 p-0 rounded-2xl shadow hover:shadow-xl transition border border-gray-200 dark:border-neutral-700 cursor-pointer relative overflow-hidden flex flex-col"
              tabIndex={0}
              onClick={() => setSelected(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter") setSelected(project);
              }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <span className="flex items-center gap-2 text-white text-lg font-bold">
                    <Github className="w-6 h-6" /> View on GitHub
                  </span>
                </div>
              </div>
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination arrows under cards */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="bg-gray-200 dark:bg-neutral-800 p-3 rounded-full shadow hover:bg-gray-300 dark:hover:bg-neutral-700 transition disabled:opacity-40"
            aria-label="Previous"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: maxPage + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-3 h-3 rounded-full ${
                  i === page ? "bg-blue-500" : "bg-gray-300 dark:bg-neutral-700"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setPage((p) => Math.min(maxPage, p + 1))}
            disabled={page === maxPage}
            className="bg-gray-200 dark:bg-neutral-800 p-3 rounded-full shadow hover:bg-gray-300 dark:hover:bg-neutral-700 transition disabled:opacity-40"
            aria-label="Next"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      {/* Project detail modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl max-w-lg w-full p-8 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-blue-500 dark:hover:text-purple-400 transition"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              {selected.title}
            </h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              {selected.description}
            </p>
           
		   {selected.MyRole && selected.MyRole.length > 0 && (
  <div
    className="mb-4 text-gray-600 dark:text-gray-400 text-sm"
    style={{ whiteSpace: "pre-line" }}
  >
    <strong>My Role:</strong>
    <ul className="list-disc list-inside">
      {selected.MyRole.map((role, idx) => (
        <li key={idx}>{role}</li>
      ))}
    </ul>
  </div>
)}
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                Features:
              </h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm">
                {selected.features?.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {selected.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {selected.frontend && (
                <a
                  href={selected.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
                >
                  Frontend Repo
                </a>
              )}
              {selected.backend && (
                <a
                  href={selected.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded bg-purple-500 text-white font-medium hover:bg-purple-600 transition"
                >
                  Backend Repo
                </a>
              )}
              {selected.link && (
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded bg-gray-700 text-white font-medium hover:bg-gray-900 transition"
                >
                  Main Repo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
