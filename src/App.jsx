import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialLinks from "./components/SocialLinks";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import JobRoles from "./components/JobRoles";
import Footer from "./components/Footer";
import Summary from "./components/Summary";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial load animation
    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-code-bg selection:bg-emerald-500 selection:text-code-bg overflow-x-hidden text-gray-200">
      <AnimatePresence>
        {loading && (
          <motion.div 
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[1000] bg-code-bg flex flex-col items-center justify-center font-mono text-emerald-400 text-3xl"
          >
            <div className="flex flex-col items-center gap-6">
              <div className="relative w-20 h-20 flex items-center justify-center mb-4">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-t-2 border-emerald-400 rounded-full"
                />
                <span className="text-2xl font-bold tracking-widest text-white">AK</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <span className="tracking-[0.3em] text-xs text-emerald-400/80 font-mono uppercase">Initializing Architecture</span>
                <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      
      <main className="relative z-10 pt-20">
        <Hero />
        <Summary />
        <Projects />
        <Certifications />
        <JobRoles />
        <SocialLinks />
        <Resume />
      </main>
      
      <Footer />
    </div>
  );
}
