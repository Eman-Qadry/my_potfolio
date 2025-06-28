const frontend = [
  { name: "React", percent: 95 },
  { name: "TypeScript", percent: 90 },
  { name: "Tailwind CSS", percent: 88 },
  { name: "Next.js", percent: 85 },
];

const backend = [
  { name: "Node.js", percent: 90 },
  { name: "EXpress.js", percent: 80 },
  { name: "My SQL", percent: 85 },
  { name: "MongoDB", percent: 82 },
];

const tools = [
  { name: "Git", percent: 92 },
  { name: "Data ", percent: 78 },
  { name: "AWS", percent: 75 },
  { name: "Figma", percent: 88 },
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
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Frontend</h3>
            {frontend.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Backend</h3>
            {backend.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Tools & Others</h3>
            {tools.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}