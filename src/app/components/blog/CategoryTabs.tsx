"use client";
import { motion } from "framer-motion";
import { categories } from "./blogData";

interface CategoryTabsProps {
  active: string;
  onChange: (cat: string) => void;
}

export default function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex gap-3 mb-12 overflow-x-auto pb-2"
    >
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onChange(category)}
          className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 ${
            active === category
              ? 'bg-[#FFA42B] text-white'
              : 'bg-[#1a1a1a] text-gray-400 hover:bg-[#252525]'
          }`}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  );
}