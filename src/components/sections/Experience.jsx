export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-white dark:bg-neutral-900 transition-colors">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Experience</h2>
      <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-neutral-800 rounded-2xl shadow p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">Freelance Backend Developer</h3>
          <div className="text-gray-600 dark:text-gray-300 mb-1">API Project (Remote)</div>
          <div className="text-sm text-gray-400 mb-2">2025</div>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm">
            <li>Developed and documented a RESTful API for a freelance client using Node.js and Express.</li>
            <li>Handled authentication, CRUD operations, and API security best practices.</li>
            <li>Worked independently and delivered the project on time.</li>
          </ul>
        </div>
      </div>
      
    </section>
  );
}