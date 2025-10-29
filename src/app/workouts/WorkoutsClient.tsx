'use client';

import { motion } from 'framer-motion';
import { Target, Trophy, Plus } from 'lucide-react';
import WODCard from '../components/workouts/WODCard';
import PlanCard from '../components/workouts/PlanCard';
import type { WorkoutsData } from '../lib/workouts-data';

const muscleGroups = ['Chest', 'Back', 'Legs', 'Shoulders', 'Arms', 'Core'] as const;

interface WorkoutsClientProps {
  initialData: WorkoutsData;
}

export default function WorkoutsClient({ initialData }: WorkoutsClientProps) {
  // Safely destructure with defaults
  const {
    wod = null,
    plans = [],
    challenges = [],
    progress = { lastWorkout: 'N/A', streak: 0 }
  } = initialData || {};

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 pt-6 pb-4">
        <h1 className="text-2xl font-bold text-[#FFA42B]">FitTrack</h1>
        <button className="px-4 py-2 bg-[#FFA42B] text-black font-medium rounded-full text-sm cursor-pointer hover:bg-[#e69500] transition">
          Sign Up
        </button>
      </header>

      {/* WOD Section */}
      <section className="px-6 mt-8">
        {wod ? (
          <WODCard wod={wod} onStart={() => console.log('Start WOD')} />
        ) : (
          <p className="text-gray-400">No WOD available</p>
        )}

        <button className="w-full mt-6 py-4 bg-[#2a2a2a] text-[#FFA42B] font-bold rounded-full cursor-pointer hover:bg-[#333] transition flex items-center justify-center gap-2 border border-[#FFA42B]/20">
          <Plus className="w-5 h-5" />
          Create Custom Workout
        </button>
      </section>

      {/* Ready Plans */}
      <section className="px-6 mt-10">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
          {plans.length > 0 ? (
            plans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))
          ) : (
            <p className="text-gray-400">No plans available</p>
          )}
        </div>
      </section>

      {/* Muscle Groups */}
      <section className="px-6 mt-10">
        <h3 className="text-lg font-semibold mb-4">Muscle Groups</h3>
        <div className="grid grid-cols-3 gap-3">
          {muscleGroups.map((muscle, i) => (
            <motion.div
              key={muscle}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#1a1a1a] rounded-2xl p-5 text-center cursor-pointer hover:bg-[#222] transition shadow-lg"
            >
              <Target className="w-8 h-8 mx-auto text-[#FFA42B] mb-2" />
              <p className="text-sm font-medium">{muscle}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Progress & Challenges */}
      <section className="px-6 mt-10 grid md:grid-cols-2 gap-6">
        {/* Your Progress */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-[#1a1a1a] rounded-2xl p-6 shadow-xl"
        >
          <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-400">Last Workout</p>
              <p className="font-bold text-lg">{progress.lastWorkout}</p>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-[#FFA42B]" />
              <span className="text-3xl font-bold">{progress.streak}</span>
              <span className="text-sm text-gray-400">days streak</span>
            </div>
          </div>
        </motion.div>

        {/* Challenges */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-[#1a1a1a] rounded-2xl p-6 shadow-xl"
        >
          <h3 className="text-lg font-semibold mb-4">Challenges</h3>
          <div className="space-y-5">
            {challenges.length > 0 ? (
              challenges.map((ch, i) => (
                <div key={ch.id}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{ch.name}</span>
                    <span className="text-gray-400">
                      {ch.progress}/{ch.total} {ch.unit}
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(ch.progress / ch.total) * 100}%` }}
                      transition={{ delay: i * 0.15, duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-[#FFA42B] rounded-full"
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400">No challenges yet</p>
            )}
          </div>
        </motion.div>
      </section>

      <footer className="mt-16 px-6 pb-8 text-center text-xs text-gray-500">
        <p>© 2025 FitTrack. All rights reserved.</p>
      </footer>
    </div>
  );
}