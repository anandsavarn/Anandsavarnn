import { motion, useInView } from "framer-motion";
import { Quote, Brain, Target, Compass, Microscope } from "lucide-react";
import { useRef } from "react";

export default function Summary() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="summary" className="py-24 px-6 relative overflow-hidden bg-grid">
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
                <Quote className="text-code-green" size={20} />
              </div>
              <span className="text-code-green font-mono text-sm uppercase tracking-widest">About</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              My <span className="text-gradient-green">Introduction</span>
            </motion.h2>
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Main Summary Glass Card */}
          <motion.div 
            variants={item}
            className="md:col-span-8 glass-card p-10 md:p-14 border-white/5 bg-gradient-to-br from-code-green/5 to-transparent relative overflow-hidden"
          >
            <Quote className="absolute -left-4 -top-4 text-code-green/10" size={160} />
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-sans font-medium text-gradient">
                Computer Science and Engineering from <span className="text-white">Lovely Professional University</span> with a specialization in <span className="text-emerald-400">Data Science</span>. I aspire to build my career as a <span className="text-white">Data Analyst and Data Engineer</span>, leveraging data to generate actionable insights and contribute to data-driven decision making.
              </p>
              <p className="mt-8 text-lg text-gray-400 leading-relaxed font-sans">
                I have hands-on experience in <span className="text-white underline decoration-code-green">Power BI, Python, and SQL</span>, along with foundational knowledge of Machine Learning and international finance & business. My core strengths include <span className="text-white">data cleaning, data visualization, and building predictive models</span>. What sets me apart is my analytical thinking, problem-solving ability, and my focus on applying knowledge to real-world problems.
              </p>
            </div>
          </motion.div>

          {/* Right Column Grid */}
          <div className="md:col-span-4 grid grid-cols-1 gap-6">
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 border-white/5 hover:border-code-green/30 transition-[border-color] duration-300 flex flex-col gap-4 text-center justify-center h-full"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto">
                <Brain className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-white font-bold text-lg">Continuous Learning</h3>
              <p className="text-xs text-gray-500 font-mono">Always evolving with technology trends.</p>
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 border-white/5 hover:border-code-green/30 transition-[border-color] duration-300 flex flex-col gap-4 text-center justify-center h-full"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto">
                <Microscope className="text-blue-400" size={24} />
              </div>
              <h3 className="text-white font-bold text-lg">Inquisitive Mindset</h3>
              <p className="text-xs text-gray-500 font-mono">Exploring the "why" behind data.</p>
            </motion.div>
          </div>

          {/* Bottom Row Grid */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-4 glass-card p-8 border-white/5 hover:border-code-green/30 transition-[border-color] duration-300 flex flex-col gap-4 group"
          >
            <div className="w-12 h-12 rounded-full bg-code-green/20 flex items-center justify-center group-hover:bg-code-green transition-colors">
              <Compass className="text-code-green group-hover:text-code-bg transition-colors" size={24} />
            </div>
            <h3 className="text-white font-bold text-xl">My Goal</h3>
            <p className="text-sm text-gray-500">Seeking roles as a <span className="text-emerald-400 font-medium">Data Analyst</span> or <span className="text-cyan-400 font-medium">Data Engineer</span> — where I can leverage data to drive actionable insights and contribute to data-driven decision making.</p>
          </motion.div>

          <motion.div
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-8 glass-card p-8 border-white/5 hover:border-code-green/30 transition-[border-color] duration-300 flex flex-col gap-4 overflow-hidden relative"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <Target className="text-amber-400" size={24} />
              </div>
              <h3 className="text-white font-bold text-xl">Impactful Vision</h3>
            </div>
            <p className="text-sm text-gray-400 max-w-xl">
              I have worked on practical projects including a <span className="text-white">Weather Forecast Dashboard</span> using Power BI, an <span className="text-white">Electric Vehicle Population Dashboard</span> for trend analysis, and an <span className="text-white">ML-based Trading Platform</span> that suggests stock decisions and recommends trading strategies. I am a continuous learner, actively upgrading my skills to stay aligned with industry trends.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
