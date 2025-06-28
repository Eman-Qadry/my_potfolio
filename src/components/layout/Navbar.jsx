import { Moon, Sun, Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Close mobile menu on navigation
  const handleNavClick = () => setOpen(false);

  return (
    <nav className="w-full fixed top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur border-b border-gray-200 dark:border-neutral-800 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Iman Qadry
        </h1>
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-purple-400 font-medium transition"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-purple-400 font-medium transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-purple-400 font-medium transition"
          >
            Contact
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-blue-100 dark:hover:bg-purple-900 transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-blue-100 dark:hover:bg-purple-900 transition"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </div>
    
      {open && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-64 h-full bg-white dark:bg-neutral-900 shadow-lg flex flex-col gap-6 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <a
              href="#about"
              onClick={handleNavClick}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-purple-400 font-medium transition"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={handleNavClick}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-purple-400 font-medium transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-purple-400 font-medium transition"
            >
              Contact
            </a>
            <button
              onClick={() => {
                setDarkMode(!darkMode);
                setOpen(false);
              }}
              className="p-2 rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-blue-100 dark:hover:bg-purple-900 transition self-start"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
