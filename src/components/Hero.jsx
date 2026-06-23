import { motion } from "framer-motion";
import { useState } from "react";
import { Terminal, Code2, Database, BrainCircuit, Rocket, ChevronRight, Zap } from "lucide-react";
import { cn } from "../lib/utils";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  const stats = [
    { label: "Data Projects", value: "10+", icon: Database, color: "emerald-400" },
    { label: "ML Models", value: "15+", icon: BrainCircuit, color: "cyan-400" },
    { label: "LeetCode Solved", value: "250+", icon: Code2, color: "blue-400" },
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-[100vh] flex flex-col justify-center pt-24 pb-16 overflow-hidden bg-[#050505]"
    >
      {/* Optimized Background */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-br from-emerald-900/20 via-[#050505] to-[#050505] -z-20" />
      
      {/* Dynamic Grid Overlay (Static) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] -z-10" />

      <motion.div 
        className="max-w-7xl mx-auto px-6 relative z-10 w-full"
      >
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Column: Massive Typography */}
          <div className="w-full lg:w-3/5 flex flex-col items-start relative z-20 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-white text-xs font-mono uppercase tracking-[0.2em]">Open to Work</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[4rem] sm:text-[5rem] lg:text-[7rem] font-bold leading-[0.9] tracking-tighter text-white"
            >
              Analyst.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 inline-block relative">
                Engineer.
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute bottom-1 left-0 h-2 bg-emerald-500/30 rounded-full"
                />
              </span>
              <br />
              Innovator.
            </motion.h1>

             <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-2xl text-gray-400 max-w-xl font-light leading-relaxed"
            >
              I'm <strong className="text-white font-medium">Anand Kumar</strong> — CSE student specializing in <span className="text-emerald-400 font-medium">Data Science</span> at LPU, aspiring to build impactful solutions as a <span className="text-cyan-400 font-medium">Data Analyst & Data Engineer</span>.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a 
                href="#projects"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold overflow-hidden transition-transform active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <motion.span animate={{ x: isHovered ? 5 : 0 }} transition={{ type: "spring", stiffness: 300 }}>
                    <ChevronRight size={18} />
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-cyan-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </a>
              
              <a 
                href="https://mail.google.com/mail/?view=cm&to=anandsavarn@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Bento Stats */}
          <div className="w-full lg:w-2/5 relative">
            <div className="relative z-10 w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] grid grid-cols-3 grid-rows-3 gap-3 sm:gap-4">
               {/* Main Profile Bento Box */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                style={{ transformStyle: "preserve-3d" }}
                className="col-span-3 row-span-2 rounded-3xl overflow-hidden relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
                <img src="/profile.png" alt="Anand Kumar" className="w-full h-full object-cover object-top transition-all duration-700 ease-out scale-105 group-hover:scale-100" />
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm tracking-widest uppercase mb-1">
                    <Zap size={14} className="animate-pulse" /> Architect
                  </div>
                  <h3 className="text-3xl text-white font-bold tracking-tight">Anand Kumar</h3>
                </div>
                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" style={{ transform: "translateZ(10px)" }} />
              </motion.div>

              {/* Smaller Stat Bento Boxes */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="col-span-1 row-span-1 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl p-3 sm:p-5 flex flex-col justify-between hover:border-emerald-500/30 transition-colors group relative overflow-hidden"
              >
                 <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 <Database className="text-emerald-400 mb-1 sm:mb-2 w-5 h-5 sm:w-6 sm:h-6" />
                 <div>
                   <div className="text-lg sm:text-2xl font-bold text-white tracking-tight">10+</div>
                   <div className="text-[9px] sm:text-[10px] text-gray-400 font-mono uppercase leading-tight sm:leading-normal">Projects</div>
                 </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="col-span-1 row-span-1 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl p-3 sm:p-5 flex flex-col justify-between hover:border-cyan-500/30 transition-colors group relative overflow-hidden"
              >
                 <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 <BrainCircuit className="text-cyan-400 mb-1 sm:mb-2 w-5 h-5 sm:w-6 sm:h-6" />
                 <div>
                   <div className="text-lg sm:text-2xl font-bold text-white tracking-tight">7+</div>
                   <div className="text-[9px] sm:text-[10px] text-gray-400 font-mono uppercase leading-tight sm:leading-normal">ML Models</div>
                 </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="col-span-1 row-span-1 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl p-3 sm:p-5 flex flex-col justify-between hover:border-blue-500/30 transition-colors group relative overflow-hidden"
              >
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 <Code2 className="text-blue-400 mb-1 sm:mb-2 w-5 h-5 sm:w-6 sm:h-6" />
                 <div>
                   <div className="text-lg sm:text-2xl font-bold text-white tracking-tight">275+</div>
                   <div className="text-[9px] sm:text-[10px] text-gray-400 font-mono uppercase leading-tight sm:leading-normal">LeetCode</div>
                 </div>
              </motion.div>
            </div>
          </div>

        </div>
      </motion.div>

      {/* Modern Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Discover</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gray-500 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-emerald-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
