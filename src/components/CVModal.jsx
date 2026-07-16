import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Mail, Phone, MapPin, Download } from "lucide-react";
import { cn } from "../lib/utils";

export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-code-surface border border-white/10 rounded-2xl shadow-2xl overflow-y-auto z-10 custom-scrollbar"
        >
          {/* Header Actions */}
          <div className="sticky top-0 right-0 p-4 flex justify-between items-center bg-code-surface/80 backdrop-blur-md z-20 border-b border-white/5">
            <div className="flex gap-2">
               <button 
                onClick={() => window.print()} 
                className="px-4 py-2 flex items-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 text-white font-mono text-sm transition-colors"
                title="Print or Save as PDF"
              >
                <Download size={16} /> Print / PDF
              </button>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-red-500/20 hover:text-red-400 text-gray-400 transition-colors group"
            >
              <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-12 border-b border-white/10 pb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Anand Kumar</h1>
              <div className="flex flex-wrap items-center justify-center gap-4 text-gray-400 font-mono text-sm">
                <a href="https://mail.google.com/mail/?view=cm&to=anandsavarn@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-code-green transition-colors">
                  <Mail size={16} /> anandsavarn@gmail.com
                </a>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-2">
                   <Phone size={16} /> +91 9608924085
                </span>
                <span className="hidden md:inline">•</span>
                <a href="https://linkedin.com/in/anandsavarn/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-code-green transition-colors">
                  <ExternalLink size={16} /> LinkedIn
                </a>
                <span className="hidden md:inline">•</span>
                <a href="https://github.com/anandsavarn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-code-green transition-colors">
                  <ExternalLink size={16} /> GitHub
                </a>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-code-green mb-6 flex items-center gap-2">
                <span className="text-lg">01.</span> Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-gray-300">
                <div><span className="font-bold text-white">Languages:</span> Python, C, C++, Java, Kotlin, XML, SQL</div>
                <div><span className="font-bold text-white">Libraries/Frameworks:</span> NumPy, Pandas, Matplotlib, Scikit-Learn, TensorFlow, HTML, CSS, JavaScript</div>
                <div><span className="font-bold text-white">Tools/Platforms:</span> Excel, Power BI, Android SDK, Big Data, Git, GitHub</div>
                <div><span className="font-bold text-white">Soft Skills:</span> Problem-Solving Ability, Team Collaboration, Time Management, Adaptability</div>
              </div>
            </div>

            {/* Experience */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-code-green mb-6 flex items-center gap-2">
                <span className="text-lg">02.</span> Experience
              </h2>
              <div className="space-y-8">
                <div className="relative pl-6 border-l-2 border-white/10 hover:border-code-green transition-colors">
                  <div className="absolute w-3 h-3 bg-code-green rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(63,185,80,0.5)]"></div>
                  <div className="flex flex-col md:flex-row justify-between md:items-center mb-2 gap-2">
                    <h3 className="text-xl font-bold text-white">Data Analyst Intern</h3>
                    <span className="text-code-amber font-mono text-sm">Mar 2025 – Aug 2025</span>
                  </div>
                  <a href="https://ratial.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-code-green transition-colors flex items-center gap-1 mb-4 text-sm font-mono">
                    Ratial Home Services Pvt. Ltd. <ExternalLink size={14} />
                  </a>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Analyzed customer booking & service datasets using Python, SQL, and Excel; cleaned and transformed raw data to significantly improve reporting accuracy. Designed and maintained Power BI dashboards tracking 10+ KPIs — user retention, booking rates, service performance — for product and ops leadership. Generated weekly/monthly insight reports via EDA; collaborated cross-functionally to identify workflow bottlenecks and recommend data-backed improvements.
                  </p>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-code-green mb-6 flex items-center gap-2">
                <span className="text-lg">03.</span> Projects
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Predictor – AI-Powered Financial Analytics platform",
                    date: "Oct 2025 - Apr 2026",
                    bullets: [
                      "Deployed a full-stack Flask-based trading platform with LSTM-powered stock prediction, live market news, TradingView ticker, career & login system, and integrated trading resources (strategies, books, broker directory).",
                      "Developed an AI-driven stock prediction system using Keras/TensorFlow with EMA-based visualizations and real-time data from Yahoo Finance; enhanced user experience with chatbot, dark/light UI, and downloadable analytics."
                    ],
                    tools: "Python, Flask, TensorFlow, Keras, LSTM, NLP, Pandas, NumPy, Matplotlib, Bootstrap 5, JavaScript"
                  },
                  {
                    title: "Real-time Weather & Air Quality Dashboard",
                    date: "Aug 2025 – Nov 2025",
                    bullets: [
                      "Built an interactive Power BI dashboard consuming live REST API data, transformed via Power Query and DAX, to monitor weather and air quality trends.",
                      "Implemented a 7-day predictive forecast feature with dynamic KPI cards to support data-driven environmental decision-making."
                    ],
                    tools: "Power BI, Power Query, Dax, Rest APIs"
                  },
                  {
                    title: "Electric Vehicle Population Data",
                    date: "Apr 2025 - May 2025",
                    bullets: [
                      "Performed in-depth EV adoption analysis using Excel PivotTables, uncovering adoption trends by region, manufacturer, and model year.",
                      "Replicated and extended the analysis in Python (Pandas, Matplotlib, Seaborn) to deliver richer EDA and automated visualizations."
                    ],
                    tools: "Python, Pandas, Matplotlib, Seaborn, Excel"
                  }
                ].map((item, index) => (
                   <div key={index} className="relative pl-6 border-l-2 border-white/10 hover:border-code-green transition-colors">
                    <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[7px] top-1.5 peer"></div>
                    <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-2">
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      <span className="text-code-amber font-mono text-sm whitespace-nowrap">{item.date}</span>
                    </div>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mb-3 text-sm leading-relaxed">
                      {item.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                    <div className="text-xs font-mono text-gray-400">
                      <span className="text-code-green">Tools:</span> {item.tools}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Training */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-code-green mb-6 flex items-center gap-2">
                <span className="text-lg">04.</span> Training
              </h2>
              <div className="relative pl-6 border-l-2 border-white/10 hover:border-code-green transition-colors">
                <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[7px] top-1.5"></div>
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-2 gap-2">
                  <h3 className="text-lg font-bold text-white">Android Development Engineer</h3>
                  <span className="text-code-amber font-mono text-sm">Jun 2025 – Jul 2025</span>
                </div>
                <p className="text-gray-400 text-sm font-bold mb-3 font-mono">NurtureNest – Android Parenting & Wellness App</p>
                <p className="text-gray-300 leading-relaxed text-sm mb-3">
                  Built Nurturenest, an interactive android app demonstrating strong command of Kotlin, XML, Android SDK, and Material Components, offering personalized parenting logs and daily tips. Designed dynamic layouts, event handling with Snackbars, Dialogs, Intents, and Alarm Manager-based notifications. Managed internal/external storage, CRUD operations, real-time UI updates and packaged APK for play store deployment.
                </p>
                <div className="text-xs font-mono text-gray-400">
                  <span className="text-code-green">Tools:</span> Kotlin, XML, Android SDK, Material Components
                </div>
              </div>
            </div>

            {/* Education & Certificates */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-code-green mb-6 flex items-center gap-2">
                  <span className="text-lg">05.</span> Education
                </h2>
                <div className="space-y-6">
                  <div className="relative pl-6 border-l-2 border-white/10 hover:border-code-green transition-colors">
                    <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[7px] top-1.5"></div>
                    <h3 className="text-lg font-bold text-white">Lovely Professional University</h3>
                    <p className="text-gray-400 text-sm mb-1">B.Tech – Computer Science and Engineering</p>
                    <div className="flex justify-between items-center text-xs font-mono mt-2">
                      <span className="text-code-amber">Since Aug 2023</span>
                      <span className="px-2 py-1 bg-code-green/10 text-code-green rounded">CGPA: 7.36</span>
                    </div>
                  </div>
                  <div className="relative pl-6 border-l-2 border-white/10 hover:border-code-green transition-colors">
                    <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[7px] top-1.5"></div>
                    <h3 className="text-lg font-bold text-white">Global International School</h3>
                    <p className="text-gray-400 text-sm mb-1">Intermediate</p>
                    <div className="flex justify-between items-center text-xs font-mono mt-2">
                      <span className="text-code-amber">Mar 2021 – May 2023</span>
                      <span className="px-2 py-1 bg-code-green/10 text-code-green rounded">65%</span>
                    </div>
                  </div>
                </div>
              </div>

               <div>
                <h2 className="text-2xl font-bold text-code-green mb-6 flex items-center gap-2">
                  <span className="text-lg">06.</span> Certificates
                </h2>
                <ul className="space-y-4">
                  {[
                    { title: "ChatGPT-4 Prompt Engineering", org: "Infosys", date: "Aug 2025" },
                    { title: "Android Developer Pro", org: "LPU", date: "Jul 2025" },
                    { title: "Privacy/Security in Online Social Media", org: "IIIT Hyderabad / NPTEL", date: "Apr 2025" },
                    { title: "Software Engineering: Implementation & Testing", org: "Coursera", date: "May 2024" }
                  ].map((cert, idx) => (
                    <li key={idx} className="flex justify-between items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-code-green/30 transition-colors">
                      <div>
                        <p className="text-white font-bold text-sm mb-1">{cert.title}</p>
                        <p className="text-gray-400 text-xs font-mono">{cert.org}</p>
                      </div>
                      <span className="text-code-amber font-mono text-xs whitespace-nowrap">{cert.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
