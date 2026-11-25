"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Top Page Transition Progress Line (Aqua #2FD3A0) */}
      <motion.div
        key="page-progress-bar"
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: 0 }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
          opacity: { delay: 0.3, duration: 0.15 },
        }}
        style={{ transformOrigin: "left" }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-aqua z-[100] pointer-events-none shadow-[0_1px_6px_rgba(47,211,160,0.4)]"
      />

      {/* Page Content Transition Container */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="flex-1 flex flex-col w-full"
      >
        {children}
      </motion.div>
    </>
  );
}
