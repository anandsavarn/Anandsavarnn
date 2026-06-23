import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Globe, ExternalLink } from "lucide-react";
import { cn } from "../lib/utils";

// Custom SVG Icons for brands
const GithubIcon = ({ size = 24, ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 24, ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Summary", href: "#summary" },
  { name: "Links", href: "#links" },
  { name: "Certifications", href: "#certifications" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6",
        scrolled ? "py-4 bg-code-bg/80 backdrop-blur-md border-b border-white/5" : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-white font-mono font-bold text-xl group"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-code-green/20 to-code-accent/20 flex items-center justify-center border border-white/10 group-hover:border-code-green/50 transition-all">
            <Terminal className="text-code-green" size={20} />
          </div>
          <span className="hidden sm:inline">ANAND<span className="text-code-green"> SAVARN</span></span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-gray-400 hover:text-white font-medium text-sm transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-code-green transition-all group-hover:w-full" />
            </motion.a>
          ))}
          
          <div className="h-4 w-[1px] bg-white/10 mx-2" />
          
          <div className="flex items-center gap-4">
            <motion.a 
              href="https://github.com/anandsavarn" 
              whileHover={{ scale: 1.1 }} 
              className="text-gray-400 hover:text-white"
              title="GitHub"
            >
              <GithubIcon size={20} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/anandsavarn/" 
              whileHover={{ scale: 1.1 }} 
              className="text-gray-400 hover:text-white"
              title="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </motion.a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 glass-card mx-6 mt-2 overflow-hidden border-white/10"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-code-green transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-[1px] bg-white/5" />
              <div className="flex gap-6 justify-center">
                <a href="https://github.com/anandsavarn" className="text-gray-400 hover:text-white">
                  <GithubIcon size={24} />
                </a>
                <a href="https://www.linkedin.com/in/anandsavarn/" className="text-gray-400 hover:text-white">
                  <LinkedinIcon size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
