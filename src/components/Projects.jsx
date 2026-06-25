import { motion } from "framer-motion";
import { ArrowUpRight, Play, Command, ExternalLink } from "lucide-react";
import { useState } from "react";
import { projects } from "../data/projects";
import { cn } from "../lib/utils";

// Custom Github Icon
const GithubIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const BentoCard = ({ proj, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group rounded-2xl overflow-hidden border border-white/5 bg-code-surface flex flex-col hover:border-white/20 transition-[border-color] duration-500"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Project Image */}
      {proj.image ? (
        <div className="relative w-full h-36 overflow-hidden border-b border-white/5 bg-code-bg flex-shrink-0">
          <img
            src={proj.image}
            alt={proj.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-code-surface to-transparent pointer-events-none" />
        </div>
      ) : (
        <div className="relative w-full h-36 border-b border-white/5 bg-white/5 flex items-center justify-center flex-shrink-0">
          <Command className="text-white/10 w-14 h-14" />
        </div>
      )}

      <div className="p-4 flex flex-col flex-1 relative z-10">
        {/* Language Badge */}
        <div className="mb-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-400">
            {proj.language}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-white mb-1.5 tracking-tight transition-colors duration-300 group-hover:text-emerald-400 leading-snug">
          {proj.title}
        </h3>

        <p className="text-gray-400 leading-relaxed mb-3 flex-1 text-xs line-clamp-2">
          {proj.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex gap-3">
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-emerald-400 transition-colors duration-200"
            >
              <GithubIcon size={15} />
              <span>Code</span>
            </a>
            {proj.live && (
              <a
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
              >
                <ExternalLink size={13} />
                <span>Live</span>
              </a>
            )}
            {proj.videoUrl && (
              <a
                href={proj.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-cyan-400 transition-colors duration-200"
              >
                <Play size={13} fill="currentColor" />
                <span>Watch</span>
              </a>
            )}
          </div>

          <motion.div
            animate={{ rotate: isHovered ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-[background-color,border-color,color] duration-300"
          >
            <ArrowUpRight size={14} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden bg-code-bg">
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="mb-12 md:flex items-end justify-between">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest">
                  Projects
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4"
            >
              Selected{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Works.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-4 text-gray-400 font-mono text-sm"
          >
            {projects.length} projects &nbsp;·&nbsp; scroll to explore <ArrowUpRight className="animate-bounce" />
          </motion.div>
        </div>

        {/* 3-column grid on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((proj, index) => (
            <BentoCard key={proj.id} proj={proj} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
