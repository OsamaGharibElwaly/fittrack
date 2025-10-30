// src/components/workouts/PlanCard.tsx
import type { ComponentType } from 'react';

export type Plan = {
  id: string | number;
  title: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  icon: ComponentType<{ className?: string; size?: number }>;
};

export default function PlanCard({ plan }: { plan: Plan }) {
  const Icon = plan.icon;

  return (
    <div className="bg-[#151515] rounded-2xl p-5 min-w-[240px] shadow-lg hover:bg-[#1c1c1c] transition">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-black/40">
          <Icon className="w-5 h-5 text-[#FFA42B]" />
        </span>
        <h3 className="font-semibold text-base line-clamp-1">{plan.title}</h3>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-300">
        <span>{plan.duration}</span>
        <span
          className={
            'px-2 py-0.5 rounded-full text-xs ' +
            (plan.level === 'Beginner'
              ? 'bg-green-500/15 text-green-400'
              : plan.level === 'Intermediate'
              ? 'bg-yellow-500/15 text-yellow-400'
              : 'bg-red-500/15 text-red-400')
          }
        >
          {plan.level}
        </span>
      </div>

      <button className="mt-4 w-full bg-[#FFA42B] text-black font-medium rounded-lg py-2 hover:brightness-95">
        Start Plan
      </button>
    </div>
  );
}
