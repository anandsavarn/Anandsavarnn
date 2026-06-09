import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Ambient() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const newDots = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 400 + 200,
      duration: Math.random() * 20 + 20,
    }));
    setDots(newDots);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-50">
      {/* Background Glows */}
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-code-green/5 blur-[120px]"
          animate={{
            x: [`${dot.x}%`, `${(dot.x + 20) % 100}%`, `${dot.x}%`],
            y: [`${dot.y}%`, `${(dot.y + 20) % 100}%`, `${dot.y}%`],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
          }}
        />
      ))}
      
      {/* Grid Pattern with Fade */}
      <div className="absolute inset-0 bg-grid opacity-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
      
      {/* Noise Texture */}
      <div className="grainy" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-code-bg opacity-80" />
    </div>
  );
}
