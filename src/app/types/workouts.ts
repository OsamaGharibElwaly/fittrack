// types/workouts.ts

export interface Exercise {
  name: string;
  sets: string;
}

export interface WorkoutPlan {
  id: string | number;
  title: string;
  duration: string;               // مثال: "45 Mins • 5 days/wk"
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  icon: React.ComponentType<{ className?: string }>;   // Lucide icon component
  issues?: number;                // عدد الـ Issues (اختياري)
}

export interface Challenge {
  id: string | number;
  name: string;
  progress: number;
  total: number;
  unit: string;
}

export interface WorkoutOfTheDay {
  title: string;
  description: string;
  duration: string;               // مثال: "35 Mins"
  exercises: Exercise[];
  imageUrl?: string;
}

export interface UserProgress {
  lastWorkout: string;
  streak: number;
}