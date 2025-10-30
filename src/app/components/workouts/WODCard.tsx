// src/components/workouts/WODCard.tsx
'use client';

import { Flame, Clock, Play } from 'lucide-react';
import type { WorkoutsData } from '../../lib/workouts-data';

type WorkoutOfTheDay = NonNullable<WorkoutsData['wod']>;

interface WODCardProps {
  wod: WorkoutOfTheDay;
  onStart: () => void;
}

export default function WODCard({ wod, onStart }: WODCardProps) {
  return (
    <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111] rounded-2xl p-6 shadow-xl border border-[#FFA42B]/20">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-[#FFA42B]">Workout of the Day</h2>
        <Flame className="w-8 h-8 text-[#FFA42B]" />
      </div>

      <h3 className="text-xl font-semibold mb-2">{wod.title}</h3>
      <p className="text-gray-400 text-sm mb-4">{wod.description}</p>

      <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
        <Clock className="w-4 h-4" />
        <span>{wod.duration} minutes</span>
      </div>

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
        <Play className="w-5 h-5" />
        Start Workout
      </button>
    </div>
  );
}
