import { motion } from "framer-motion";
import { FileText, Download, ExternalLink, ScrollText, Eye } from "lucide-react";
import { useState } from "react";
import CVModal from "./CVModal";
import { cn } from "../lib/utils";

const RESUME_PDF = "https://drive.google.com/file/d/1mmJrf_7nu2p8HFtI_fSZdDVVa0zy1wSC/view?usp=drive_link";

export default function Resume() {
  return (
    <>
      <section id="resume" className="py-24 px-6 relative overflow-hidden bg-grid">
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="p-2 rounded-lg bg-code-green/10 border border-code-green/20">
                <FileText className="text-code-green" size={20} />
              </div>
              <span className="text-code-green font-mono text-sm uppercase tracking-widest">Credentials</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Resume <span className="text-gradient-green">& CV</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 max-w-2xl text-lg"
            >
              Interested in working together? Download my full resume to see more details 
              about my technical skills, education, and professional experience.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="flex-shrink-0 group"
          >
            <div className="p-8 md:p-12 glass-card border-white/5 bg-gradient-to-br from-code-green/5 to-transparent relative overflow-hidden">
              <ScrollText size={120} className="absolute -right-8 -top-8 text-code-green/5 group-hover:text-code-green/10 transition-colors" />
              
              <div className="flex flex-col gap-6 items-center text-center relative z-10">
                <div className="w-20 h-20 rounded-full bg-code-green/20 flex items-center justify-center border border-code-green/30">
                  <FileText className="text-code-green" size={32} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Anand Kumar</h3>
                  <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">Updated April 2026</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <a
                    href={RESUME_PDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-code-green text-code-bg font-bold hover:bg-code-green/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(63,185,80,0.2)]"
                  >
                    <ExternalLink size={20} />
                    View CV
                  </a>
                  <a
                    href={RESUME_PDF}
                    download
                    className="flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all"
                  >
                    <Download size={20} />
                    Download
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      </section>
    </>
  );
}
