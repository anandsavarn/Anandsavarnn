import { motion } from "framer-motion";
import { 
  Mail, 
  Code, 
  Terminal, 
  ShieldCheck, 
  Share2
} from "lucide-react";
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

const links = [
  {
    name: "Email",
    href: "https://mail.google.com/mail/?view=cm&to=anandsavarn@gmail.com",
    icon: Mail,
    color: "group-hover:text-red-400",
    bg: "group-hover:bg-red-400/10",
  },
  {
    name: "GitHub",
    href: "https://github.com/anandsavarn",
    icon: GithubIcon,
    color: "group-hover:text-white",
    bg: "group-hover:bg-white/10",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/anandsavarn/",
    icon: LinkedinIcon,
    color: "group-hover:text-blue-400",
    bg: "group-hover:bg-blue-400/10",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/anandsavarn/",
    icon: Code,
    color: "group-hover:text-orange-400",
    bg: "group-hover:bg-orange-400/10",
  },
  {
    name: "HackerRank",
    href: "https://www.hackerrank.com/profile/anandsavarn",
    icon: Terminal,
    color: "group-hover:text-green-400",
    bg: "group-hover:bg-green-400/10",
  },
  {
    name: "CodeChef",
    href: "https://www.codechef.com/users/anand_savarn",
    icon: ShieldCheck,
    color: "group-hover:text-amber-600",
    bg: "group-hover:bg-amber-600/10",
  },
];

export default function SocialLinks() {
  return (
    <section id="links" className="py-24 px-6 relative overflow-hidden bg-grid">
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="p-2 rounded-lg bg-code-green/10 border border-code-green/20">
                <Share2 className="text-code-green" size={20} />
              </div>
              <span className="text-code-green font-mono text-sm uppercase tracking-widest">Connect</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white"
            >
              Digital <span className="text-gradient-green">Footprint</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-md text-lg md:text-right"
          >
            Explore my profiles across various platforms and let's build something amazing together.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {links.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={cn(
                "group relative p-6 glass-card border-white/5 transition-all duration-300 flex flex-col items-center justify-center gap-4 text-center overflow-hidden",
                link.bg
              )}
            >
              <div className={cn("p-4 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300", link.color)}>
                <link.icon size={28} />
              </div>
              
              <div className="space-y-1">
                <h3 className="text-white font-bold text-sm tracking-tight">{link.name}</h3>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Visit Profile</p>
              </div>

              {/* Decorative background element */}
              <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <link.icon size={80} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
