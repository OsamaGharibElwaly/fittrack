'use client';

import { Target, Dumbbell, Flame, Plus, Trophy } from 'lucide-react';
import type { ComponentType } from 'react';
import WODCard from '../components/workouts/WODCard';
import PlanCard from '../components/workouts/PlanCard';
import type { WorkoutsData } from '../lib/workouts-data';

const iconComponents = {
  dumbbell: Dumbbell,
  flame: Flame,
  target: Target,
} satisfies Record<string, ComponentType<{ className?: string; size?: number }>>;

const muscleGroups = ['Chest', 'Back', 'Legs', 'Shoulders', 'Arms', 'Core'] as const;

interface WorkoutsClientProps {
  initialData: WorkoutsData;
}

export default function WorkoutsClient({ initialData }: WorkoutsClientProps) {
  const { wod, plans, challenges, progress } = initialData;

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
        {wod && <WODCard wod={wod} onStart={() => console.log('Start WOD')} />}

        <button className="w-full mt-6 py-4 bg-[#2a2a2a] text-[#FFA42B] font-bold rounded-full cursor-pointer hover:bg-[#333] transition flex items-center justify-center gap-2 border border-[#FFA42B]/20">
          <Plus className="w-5 h-5" />
          Create Custom Workout
        </button>
      </section>

      {/* Ready Plans */}
      <section className="px-6 mt-10">
        <h3 className="text-lg font-semibold mb-4">Ready Plans</h3>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
          {plans.length ? (
            plans.map((plan) => {
              const Icon = iconComponents[plan.icon as keyof typeof iconComponents] || Target;
              return (
                <PlanCard
                  key={String(plan.id)}
                  plan={{ ...plan, id: String(plan.id), icon: Icon }}
                />
              );
            })
          ) : (
            <p className="text-gray-400">No plans available</p>
          )}
        </div>
      </section>

      {/* Muscle Groups */}
      <section className="px-6 mt-10">
        <h3 className="text-lg font-semibold mb-4">Muscle Groups</h3>
        <div className="grid grid-cols-3 gap-3">
          {muscleGroups.map((muscle) => (
            <div
              key={muscle}
              className="bg-[#1a1a1a] rounded-2xl p-5 text-center cursor-pointer hover:bg-[#222] transition shadow-lg"
            >
              <Target className="w-8 h-8 mx-auto text-[#FFA42B] mb-2" />
              <p className="text-sm font-medium">{muscle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Progress & Challenges */}
      <section className="px-6 mt-10 grid md:grid-cols-2 gap-6">
        {/* Progress */}
        <div className="bg-[#1a1a1a] rounded-2xl p-6 shadow-xl">
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
        </div>

        {/* Challenges */}
        <div className="bg-[#1a1a1a] rounded-2xl p-6 shadow-xl">
          <h3 className="text-lg font-semibold mb-4">Challenges</h3>
          <div className="space-y-5">
            {challenges.length ? (
              challenges.map((ch) => (
                <div key={String(ch.id)}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{ch.name}</span>
                    <span className="text-gray-400">
                      {ch.progress}/{ch.total} {ch.unit}
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-full bg-[#FFA42B] rounded-full transition-all"
                      style={{ width: `${(ch.progress / ch.total) * 100}%` }}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400">No active challenges</p>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 px-6 pb-8 text-center text-xs text-[#0d0d0d]">
        <p>© 2025 FitTrack. All rights reserved.</p>
      </footer>
    </div>
  );
}
