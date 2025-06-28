// src/components/sections/About.jsx
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-transparent to-white dark:to-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-neutral-950 rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-neutral-900 dark:text-white">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed text-center">
            I'm a passionate <span className="font-semibold text-indigo-600 dark:text-indigo-400">Full Stack Developer</span> with a degree in Computer Science.
            I completed a 4-month <span className="font-semibold">ITI Intensive Code Camp</span> specializing in the MEARN Stack.
            Currently, I work with <span className="font-semibold">Node.js and React</span>, and I love solving problems and building efficient, user-friendly web applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
