import { ChevronDown, Linkedin, Mail, Github } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center px-4 text-center 
        bg-gradient-to-br from-white via-[#fdf3f3] to-[#cceeff] 
        dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#334155] 
        transition-colors duration-500"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black dark:text-white">
        Hi, I'm <span className="text-[#a855f7]">Eman Qadry</span>
      </h1>

      <p className="max-w-xl text-lg text-gray-700 dark:text-gray-300 mb-8">
     I’m a Full Stack Developer specializing in Node.js and React.
      With a strong foundation in both frontend and backend development,
       I build scalable, efficient, and user-friendly web applications.
        

      </p>

      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <a
          href="#projects"
          className="px-6 py-2 rounded bg-white text-purple-600 font-medium shadow hover:shadow-lg transition dark:bg-neutral-900 dark:text-purple-400"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-2 rounded bg-white text-gray-800 font-medium shadow hover:shadow-lg transition dark:bg-neutral-900 dark:text-white"
        >
          Contact
        </a>
        <a
          href="https://drive.google.com/file/d/1pyTDYjW1_jqJ4TjcOQm0yoS381SzC6su/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded bg-purple-600 text-white font-medium shadow hover:bg-purple-700 transition"
          download
        >
          Download CV
        </a>
      </div>

      <div className="animate-bounce text-2xl text-purple-500 dark:text-purple-300 mb-4">
        <ChevronDown size={32} />
      </div>

      {/* Social Icons */}
      <div className="flex gap-6 mt-2">
        <a
          href="https://www.linkedin.com/in/eman-qadry-74581427b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 dark:text-purple-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          aria-label="LinkedIn"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="mailto:emanqadry24@gmail.com"
          className="text-purple-500 dark:text-purple-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          aria-label="Email"
        >
          <Mail size={28} />
        </a>
        <a
          href="https://github.com/Eman-Qadry"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 dark:text-purple-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          aria-label="GitHub"
        >
          <Github size={28} />
        </a>
      </div>
    </section>
  );
}

