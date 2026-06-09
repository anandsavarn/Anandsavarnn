import { motion } from "framer-motion";
import { Mail, Code, Terminal, Award, HelpCircle } from "lucide-react";
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

const contacts = [
  { label: "Email", href: "https://mail.google.com/mail/?view=cm&to=anandsavarn@gmail.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/anandsavarn", icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anandsavarn/", icon: LinkedinIcon },
  { label: "LeetCode", href: "https://leetcode.com/u/anandsavarn/", icon: Code },
  { label: "HackerRank", href: "https://www.hackerrank.com/profile/anandsavarn", icon: Terminal },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 px-6 overflow-hidden border-t border-white/5 bg-code-bg">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-code-green/10 border border-code-green/20 flex items-center justify-center group-hover:bg-code-green group-hover:text-code-bg transition-all">
                <Terminal size={20} className="text-code-green group-hover:text-inherit" />
              </div>
              <span className="font-mono font-bold text-white tracking-tighter text-2xl">ANAND KUMAR</span>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Aspiring Data Analyst & Data Engineer — turning raw data into actionable insights. 
              Open to full-time roles and collaborative opportunities in the data ecosystem.
            </p>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h4 className="text-white font-bold font-mono text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "Projects", "Certifications", "Resume"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-code-green transition-colors text-sm font-mono flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-code-green transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-6">
            <h4 className="text-white font-bold font-mono text-sm uppercase tracking-widest">Let's Connect</h4>
            <div className="flex flex-wrap gap-4">
              {contacts.map((contact) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-code-green hover:border-code-green/30 transition-all hover:bg-code-green/5"
                  title={contact.label}
                >
                  <contact.icon size={20} />
                </motion.a>
              ))}
            </div>
            <div className="pt-4 border-t border-white/5">
              <p className="text-xs text-gray-500 italic">"Turning complexity into clarity through code."</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs font-mono">
            © {currentYear} ALL RIGHTS RESERVED BY <span className="text-white">ANAND KUMAR</span>
          </p>
          <div className="flex items-center gap-6 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-code-green animate-pulse" />
              <span>System Operational</span>
            </div>
            <div className="hidden sm:block">Built with React & Framer Motion</div>
          </div>
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-code-green/5 rounded-full blur-[100px] -z-10" />
    </footer>
  );
}
