"use client";
import { motion } from "framer-motion";

export default function BlogHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-start mb-8"
    >
      <div>
        <h1 className="text-5xl font-bold mb-3">The FitTrack Blog</h1>
        <p className="text-gray-400 text-lg">
          Your daily dose of fitness, nutrition, and mindset tips to crush your goals.
        </p>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#FFA42B] hover:bg-[#ff8800] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
      >
        Subscribe
      </motion.button>
    </motion.div>
  );
}