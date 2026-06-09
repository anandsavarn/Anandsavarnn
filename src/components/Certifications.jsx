import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, Calendar, BookOpen, ChevronRight } from "lucide-react";
import { certifications } from "../data/certifications";
import { cn } from "../lib/utils";

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const initialCount = 4;
  const visibleCertifications = showAll ? certifications : certifications.slice(0, initialCount);

  return (
    <section id="certifications" className="py-24 px-6 relative overflow-hidden bg-grid">
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="p-2 rounded-lg bg-code-green/10 border border-code-green/20">
              <Award className="text-code-green" size={20} />
            </div>
            <span className="text-code-green font-mono text-sm uppercase tracking-widest">Achievements</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Professional <span className="text-gradient-green">Certifications</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {visibleCertifications.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ x: 10 }}
                className="group relative glass-card p-6 border-white/5 hover:border-code-green/30 transition-[border-color] duration-300"
              >
                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-xl bg-code-green/10 border border-code-green/20 flex items-center justify-center flex-shrink-0 group-hover:bg-code-green group-hover:text-code-bg transition-colors duration-500">
                    <BookOpen size={24} className="text-code-green group-hover:text-inherit" />
                  </div>
                  
                  <div className="flex-grow space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-white group-hover:text-code-green transition-colors font-sans leading-tight">
                        {cert.name}
                      </h3>
                    </div>
                    
                    <p className="text-code-green font-mono text-xs font-bold tracking-widest uppercase">
                      {cert.institution}
                    </p>
                    
                    <div className="flex items-center gap-4 pt-2">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                        <Calendar size={12} />
                        {cert.date}
                      </div>
                      
                      {cert.certificateUrl && (
                        <a 
                          href={cert.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-[10px] font-mono text-code-accent hover:text-white transition-colors uppercase tracking-widest"
                        >
                          Verify <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight size={20} className="text-code-green" />
                  </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                  <Award size={64} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {certifications.length > initialCount && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-mono text-sm hover:bg-code-green hover:text-code-bg hover:border-code-green transition-all"
            >
              {showAll ? "Collapse List" : `View All ${certifications.length} Certificates`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
