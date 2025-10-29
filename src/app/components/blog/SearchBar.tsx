"use client";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative mb-8"
    >
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
      <input
        type="text"
        placeholder="Search articles..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#FFA42B] transition-all duration-300"
      />
    </motion.div>
  );
}