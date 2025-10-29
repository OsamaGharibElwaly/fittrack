"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, onPageChange }: PaginationProps) {
  const pages = [1, 2, 3, '...', 10];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex justify-center items-center gap-2"
    >
      <button className="p-2 hover:bg-[#1a1a1a] rounded-lg transition-colors duration-300">
        <ChevronLeft size={20} />
      </button>
      {pages.map((page, i) => (
        <motion.button
          key={i}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
            page === currentPage
              ? 'bg-[#FFA42B] text-white'
              : 'hover:bg-[#1a1a1a] text-gray-400'
          }`}
        >
          {page}
        </motion.button>
      ))}
      <button className="p-2 hover:bg-[#1a1a1a] rounded-lg transition-colors duration-300">
        <ChevronRight size={20} />
      </button>
    </motion.div>
  );
}