const backend = [
  { name: "Node.js", percent: 90 },
  { name: "Express.js", percent: 85 },
  { name: "MongoDB", percent: 85 },
  { name: "My SQL", percent: 80 },
  { name: "REST API", percent: 90 },
];

const coreCS = [
  { name: "OOP", percent: 90 },
  { name: "Data Structures & Algorithms", percent: 85 },
  { name: "Design Patterns", percent: 75 },
];

const problemSolving = [
  { name: "Solved 600+ algorithmic problems on Codeforces", percent: 100 },
];

const tools = [
  { name: "VS Code", percent: 95 },
  { name: "Postman", percent: 95 },
  { name: "MongoDB Atlas", percent: 85 },
  { name: "Vercel", percent: 80 },
  { name: "Netlify", percent: 80 },
];

const frontend = [
  { name: "React.js", percent: 95 },
  { name: "Tailwind CSS", percent: 90 },
  { name: "HTML5", percent: 95 },
  { name: "CSS3", percent: 90 },
  { name: "JavaScript", percent: 92 },
];

function SkillBar({ name, percent }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-800 dark:text-gray-100">{name}</span>
        <span className="text-sm font-semibold text-purple-500">{percent}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-2.5">
        <div
          className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-pink-400 transition-all duration-700"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default function Stack() {
  return (
    <section
      id="skills"
      className="py-24 px-4 relative"
    >
      {/* Light mode gradient */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#f5f7fa_0%,#c3cfe2_100%)] dark:hidden"></div>
      {/* Dark mode gradient */}
      <div className="absolute inset-0 -z-10 hidden dark:block bg-[linear-gradient(135deg,#232526_0%,#414345_100%)]"></div>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Skills & Expertise
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          I'm constantly learning and improving my skills to stay current with the latest technologies and best practices in web development.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Backend */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Backend</h3>
            {backend.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
          {/* Frontend */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Frontend</h3>
            {frontend.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
          {/* Tools */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Tools & Platforms</h3>
            {tools.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>
        {/* Core CS + Problem Solving */}
        <div className="grid md:grid-cols-1 gap-8 text-left mt-8 max-w-3xl mx-auto">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Core CS & Problem Solving</h3>
            {coreCS.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
            {problemSolving.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}