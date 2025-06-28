import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Certificates from "@/components/sections/Certificates";
import Stack from "@/components/sections/Stack";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Experience from "@/components/sections/Experience";

function App() {
  return (
    <div className="bg-white text-black dark:bg-neutral-950 dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Certificates />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
