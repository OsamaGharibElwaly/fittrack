// components/ui/Card.tsx
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  whileHover?: any;
}

export function Card({ children, className = '', whileHover }: CardProps) {
  return (
    <motion.div
      whileHover={whileHover || { scale: 1.02 }}
      className={`bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 hover:border-[#FFA42B] transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}