"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const topHierarchy = ["Country", "Region", "District"];
const ecosystems = [
  { name: "NdaY'Fako", icon: "♻", color: "emerald" },
  { name: "NdaY'Tantsaha", icon: "🌾", color: "green" },
  { name: "NdaY'Ben'Tanàna", icon: "🏛", color: "blue" },
  { name: "Living Labs", icon: "🧪", color: "purple" },
  { name: "Territorial Atlas", icon: "📊", color: "orange" },
];
const bottomHierarchy = ["Fokontany", "Households", "Citizens"];

export default function Hero() {
  return (
    <div className="flex min-h-[75vh] flex-col items-center justify-center gap-6 px-4 py-8">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -8, 0],
        }}
        transition={{
          duration: 1,
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 backdrop-blur-xl shadow-[0_0_80px_rgba(34,211,238,0.18)]">
          <img
            src="/assets/logo/NdaY'Logo.png"
            alt="NdaY Logo"
            className="h-20 w-20 object-contain"
          />
          <div className="absolute -inset-2 rounded-full border border-cyan-400/20 animate-pulse" />
        </div>
      </motion.div>

      {/* The Living Architecture – now a flex column with items-center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative w-full max-w-4xl flex flex-col items-center"
      >
        {/* Vertical connection line – hidden behind the hub but kept for visual flow */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/30 via-cyan-400/10 to-cyan-400/30" />

        {/* Top hierarchy */}
        <div className="relative flex flex-col items-center gap-3">
          {topHierarchy.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.15 }}
              className="relative z-10 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm font-medium text-white/80 backdrop-blur-sm"
            >
              {item}
            </motion.div>
          ))}
        </div>

        {/* Commune Hub – no mx-auto needed; flex centering handles it */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.9,
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="relative z-20 my-6 w-64 rounded-2xl border-2 border-cyan-400/40 bg-gradient-to-b from-cyan-500/20 to-blue-500/10 p-6 text-center backdrop-blur-2xl shadow-[0_0_60px_rgba(34,211,238,0.25)]"
        >
          <h3 className="text-2xl font-bold text-white">COMMUNE</h3>
          <p className="text-sm text-cyan-200/80">Digital Public Infrastructure Hub</p>
          <div className="absolute -inset-1 rounded-2xl border border-cyan-400/20 animate-pulse" />
        </motion.div>

        {/* Ecosystem orbit – now centered as a grid */}
        <div className="relative grid grid-cols-3 gap-3 px-4 md:grid-cols-5">
          {ecosystems.map((eco, idx) => {
            const delay = 1.2 + idx * 0.12;
            return (
              <motion.div
                key={eco.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: delay,
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                }}
                className="relative z-10 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <span className="text-lg">{eco.icon}</span>
                <p className="text-xs font-medium text-white/80">{eco.name}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom hierarchy */}
        <div className="relative mt-6 flex flex-col items-center gap-3">
          {bottomHierarchy.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + index * 0.15 }}
              className="relative z-10 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm font-medium text-white/80 backdrop-blur-sm"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Explore */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        className="flex flex-col items-center"
      >
        <span className="mb-2 text-xs uppercase tracking-[0.35em] text-white/40">
          Explore the Ecosystem
        </span>
        <ChevronDown className="h-5 w-5 animate-bounce text-cyan-300" />
      </motion.div>
    </div>
  );
}