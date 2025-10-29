// ==========================
// components/home/CTABanner.tsx
// ==========================
"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTABanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      className="bg-[#FFA42B] py-8 mb-0"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="text-xl font-extrabold text-black mb-1">
            Ready to level up your fitness?
          </h3>
          <p className="text-black/90">
            Track workouts, set goals, and see progress — all in one place.
          </p>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/signup"
            className="shrink-0 rounded-lg bg-black px-4 py-3 font-semibold text-white hover:opacity-90"
          >
            Start Free
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}