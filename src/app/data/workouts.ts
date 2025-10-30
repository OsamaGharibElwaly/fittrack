// src/lib/workouts-data.ts

import { Dumbbell, Flame, Zap, Target } from 'lucide-react';
import { ComponentType } from 'react';

export type WorkoutOfTheDay = {
  id: number;
  title: string;
  description: string;
  duration: number;
  exercises: string[];
};

export type WorkoutPlan = {
  id: number;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  days: number;
  focus: string;
  icon: ComponentType<{ className?: string }>; // أيقونة Lucide
};

export type Challenge = {
  id: number;
  name: string;
  progress: number;
  total: number;
  unit: string;
};

export type WorkoutsData = {
  wod: WorkoutOfTheDay | null;
  plans: WorkoutPlan[];
  challenges: Challenge[];
  progress: {
    lastWorkout: string;
    streak: number;
  };
};

// === بيانات مُصححة مع `icon` ===
export const mockWorkoutsData: WorkoutsData = {
  wod: {
    id: 1,
    title: "Full Body Burn",
    description: "A high-intensity circuit to torch calories and build strength.",
    duration: 30,
    exercises: ["Push-ups", "Squats", "Burpees", "Plank", "Mountain Climbers"],
  },
  plans: [
    {
      id: 1,
      name: "5x5 Strength",
      level: "Intermediate",
      days: 3,
      focus: "Strength",
      icon: Dumbbell, // أيقونة
    },
    {
      id: 2,
      name: "Beginner Bodyweight",
      level: "Beginner",
      days: 4,
      focus: "Mobility",
      icon: Target, // أيقونة
    },
    {
      id: 3,
      name: "HIIT Inferno",
      level: "Advanced",
      days: 5,
      focus: "Cardio",
      icon: Flame, // أيقونة
    },
  ],
  challenges: [
    {
      id: 1,
      name: "Push-up Challenge",
      progress: 45,
      total: 100,
      unit: "reps",
    },
  ],
  progress: {
    lastWorkout: "2025-10-29",
    streak: 5,
  },
};