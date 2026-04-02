"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function HeroAmbience() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        className="absolute -top-1/4 -right-1/4 h-[70vmin] w-[70vmin] rounded-full bg-[radial-gradient(circle,rgb(200_16_46/0.35)_0%,transparent_65%)] blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.55, 0.4] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-1/4 -left-1/4 h-[60vmin] w-[60vmin] rounded-full bg-[radial-gradient(circle,rgb(212_165_116/0.2)_0%,transparent_60%)] blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 h-[40vmin] w-[90vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgb(255_255_255/0.06)_0%,transparent_70%)] blur-2xl"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
