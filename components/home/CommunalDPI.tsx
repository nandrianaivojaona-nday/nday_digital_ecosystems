"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

// Ecosystem data
const ecosystems = [
  { name: "NdaY'Fako", icon: "♻", color: "emerald" },
  { name: "NdaY'Tantsaha", icon: "🌾", color: "green" },
  { name: "NdaY'Ben'Tanàna", icon: "🏛", color: "cyan" },
  { name: "Living Labs", icon: "🧪", color: "purple" },
  { name: "Territorial Atlas", icon: "📊", color: "blue" },
];

// Full hierarchy
const hierarchy = [
  { level: "Country", isTop: true },
  { level: "Region", isTop: false },
  { level: "District", isTop: false },
  // Commune will be the hub
  { level: "Commune", isHub: true },
  { level: "Fokontany", isBottom: false },
  { level: "Households", isBottom: false },
  { level: "Citizens", isBottom: true },
];

export default function CommunalDPI() {
  return (
    <div className="flex flex-col items-center gap-6 py-8">
      {/* Top part: Country → District */}
      {hierarchy
        .filter((h) => !h.isHub && !h.isBottom)
        .map((h, idx) => (
          <motion.div
            key={h.level}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            className="text-center"
          >
            <div className="text-sm font-medium text-white/70">{h.level}</div>
            {idx < 2 && <div className="mx-auto h-6 w-px bg-white/20" />}
          </motion.div>
        ))}

      {/* Commune Hub */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
        className="relative"
      >
        <div className="relative z-10 flex h-28 w-64 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 backdrop-blur-xl shadow-[0_0_60px_rgba(34,211,238,0.2)]">
          <div className="text-center">
            <div className="text-xl font-bold text-white">COMMUNE</div>
            <div className="text-xs text-cyan-300/70">Digital Public Infrastructure Hub</div>
          </div>
        </div>
        {/* Glow ring */}
        <div className="absolute -inset-4 rounded-2xl border border-cyan-400/20 animate-pulse" />
      </motion.div>

      {/* Orbiting Ecosystems */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex flex-wrap justify-center gap-4 max-w-2xl"
      >
        {ecosystems.map((eco, idx) => (
          <motion.div
            key={eco.name}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 1.0 + idx * 0.1,
              type: "spring",
              stiffness: 300,
            }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm cursor-pointer"
          >
            <span className="text-2xl">{eco.icon}</span>
            <span className="mt-1 text-xs font-medium text-white/80">{eco.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom part: Fokontany → Citizens */}
      {hierarchy
        .filter((h) => !h.isHub && h.isBottom === undefined)
        .map((h, idx) => (
          <motion.div
            key={h.level}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 + idx * 0.15 }}
            className="text-center"
          >
            <div className="mx-auto h-6 w-px bg-white/20" />
            <div className="text-sm font-medium text-white/70">{h.level}</div>
          </motion.div>
        ))}
    </div>
  );
}