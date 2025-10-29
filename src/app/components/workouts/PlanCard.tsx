'use client';

import { Dumbbell, Flame, Zap } from 'lucide-react';

interface WorkoutPlan {
  id: number;
  title: string;
  duration: string;
  level: string;
  icon: 'dumbbell' | 'flame' | 'zap';  // ← Required string
}

interface PlanCardProps {
  plan: WorkoutPlan;
}

const iconMap = {
  dumbbell: Dumbbell,
  flame: Flame,
  zap: Zap,
};

export default function PlanCard({ plan }: PlanCardProps) {
  const Icon = iconMap[plan.icon];

  return (
    <div className="min-w-[280px] bg-[#1a1a1a] rounded-2xl p-5 border border-gray-800 hover:border-[#FFA42B]/50 transition-all hover:shadow-xl">
      <div className="flex items-center gap-3 mb-3">
        {Icon && <Icon size={28} className="text-[#FFA42B]" />}
        <h4 className="text-lg font-bold">{plan.title}</h4>
      </div>
      <p className="text-sm text-gray-400">{plan.duration} • {plan.level}</p>
    </div>
  );
}