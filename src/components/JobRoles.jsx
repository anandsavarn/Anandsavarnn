import { motion } from "framer-motion";
import { Briefcase, Target, ArrowRight } from "lucide-react";
import { jobRoles } from "../data/jobRoles";
import { cn } from "../lib/utils";

export default function JobRoles() {
  return (
    <section id="roles" className="py-24 px-6 relative overflow-hidden bg-grid">
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-4"
            >
              <div className="p-2 rounded-lg bg-code-green/10 border border-code-green/20">
                <Target className="text-code-green" size={20} />
              </div>
              <span className="text-code-green font-mono text-sm uppercase tracking-widest">Future</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white"
            >
              Target <span className="text-gradient-green">Careers</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="p-6 glass-card border-white/5 flex items-center gap-6">
              <div className="h-12 w-12 rounded-full bg-code-green/20 flex items-center justify-center">
                <Briefcase className="text-code-green" size={24} />
              </div>
              <div>
                <p className="text-white font-bold">Actively Seeking</p>
                <p className="text-xs text-gray-500 font-mono uppercase tracking-tighter">Full-time & Internship Opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {jobRoles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, type: "spring" }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(63, 185, 80, 0.1), 0 10px 10px -5px rgba(63, 185, 80, 0.04)"
              }}
              className="group relative px-8 py-5 glass-card border-white/5 hover:border-code-green/40 transition-all duration-300 cursor-default"
            >
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-code-green opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                <span className="text-white font-bold tracking-tight text-lg group-hover:text-code-green transition-colors font-sans">
                  {role}
                </span>
                <ArrowRight size={16} className="text-gray-600 group-hover:text-code-green transition-all transform group-hover:translate-x-2" />
              </div>
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-code-green/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-code-green/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
