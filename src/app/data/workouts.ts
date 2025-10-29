import type { WorkoutOfTheDay, WorkoutPlan, Challenge, UserProgress } from '../types/workouts';
import { Dumbbell, Flame, Zap } from 'lucide-react';

export const mockWOD: WorkoutOfTheDay = {
  title: 'Workout of the Day',
  description: 'A balanced full-body routine to kickstart your week.',
  duration: '35 Mins',
  exercises: [
    { name: 'Push-ups', sets: '3 sets of 12' },
    { name: 'Squats', sets: '3 sets of 15' },
    { name: 'Plank', sets: '3 sets of 40s' },
    { name: 'Lunges', sets: '3 sets of 10 per leg' },
  ],
};

export const mockPlans: WorkoutPlan[] = [
  {
    id: 1,
    title: 'Muscle Builder',
    duration: '45 Mins • 5 days/wk',
    level: 'Advanced',
    icon: Dumbbell,
    issues: 2,
  },
  {
    id: 2,
    title: 'Fat Burn',
    duration: '30 Mins • 4 days/wk',
    level: 'Intermediate',
    icon: Flame,
  },
  {
    id: 3,
    title: 'Strength',
    duration: '60 Mins • 3 days/wk',
    level: 'Expert',
    icon: Zap,
  },
];

export const mockChallenges: Challenge[] = [
  { id: 1, name: 'May Mileage', progress: 25, total: 50, unit: 'km' },
  { id: 2, name: 'Strength Starter', progress: 12, total: 15, unit: 'Workouts' },
  { id: 3, name: '30-Day Plank', progress: 10, total: 30, unit: 'Days' },
];

export const mockProgress: UserProgress = {
  lastWorkout: 'Full Body Strength',
  streak: 12,
};