'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface WorkoutOfTheDay {
  id: number;
  title: string;
  description: string;
  duration: string;
  exercises: string[];
}

interface WODCardProps {
  wod: WorkoutOfTheDay;
  onStart: () => void;
}

export default function WODCard({ wod, onStart }: WODCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-6 shadow-xl border border-[#FFA42B]/20"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-[#FFA42B]">Workout of the Day</h3>
          <p className="text-2xl font-bold mt-1">{wod.title}</p>
        </div>
        <span className="text-sm text-gray-400 bg-[#333] px-3 py-1 rounded-full">
          {wod.duration}
        </span>
      </div>

      <p className="text-gray-300 mb-4">{wod.description}</p>

      <div className="space-y-2 mb-6">
        {wod.exercises.map((ex, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <div className="w-1.5 h-1.5 bg-[#FFA42B] rounded-full" />
            <span>{ex}</span>
          </div>
        ))}
      </div>

      <button
        onClick={onStart}
        className="w-full py-3 bg-[#FFA42B] text-black font-bold rounded-full flex items-center justify-center gap-2 hover:bg-[#e69500] transition"
      >
        <Play className="w-5 h-5 fill-current" />
        Start WOD
      </button>
    </motion.div>
  );
}