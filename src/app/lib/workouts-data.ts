// src/lib/workouts-data.ts

// ====== Types ======
export type WorkoutOfTheDay = {
  title: string;
  description: string;
  duration: number; // minutes
  exercises: string[];
};

export type PlanIconKey = 'dumbbell' | 'flame' | 'target';

export type WorkoutsData = {
  wod: WorkoutOfTheDay | null;
  plans: {
    id: number | string;
    title: string;
    duration: string; // e.g. "4 Weeks"
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    icon: PlanIconKey; // string key; بنحوّله لكومبوننت في الكلينت
  }[];
  challenges: {
    id: number | string;
    name: string;
    progress: number; // current value
    total: number;    // target value
    unit: string;     // e.g. "days", "reps"
  }[];
  progress: { lastWorkout: string; streak: number };
};

// ====== Mock Data Loader ======
export async function getWorkoutsData(): Promise<WorkoutsData> {
  return {
    wod: {
      title: 'Full Body HIIT',
      description: 'A 20-minute high intensity circuit for total conditioning.',
      duration: 20,
      exercises: ['Jump Squats', 'Push-Ups', 'Burpees', 'Plank', 'Mountain Climbers'],
    },
    plans: [
      { id: 1, title: 'Fat Burner Plan',   duration: '4 Weeks', level: 'Beginner',     icon: 'flame' },
      { id: 2, title: 'Muscle Builder',    duration: '6 Weeks', level: 'Intermediate', icon: 'dumbbell' },
      { id: 3, title: 'Athlete Challenge', duration: '8 Weeks', level: 'Advanced',     icon: 'target' },
    ],
    challenges: [
      { id: 101, name: '7-Day Core Blast', progress: 3,  total: 7,   unit: 'days' },
      { id: 102, name: 'Push-Up Madness',  progress: 50, total: 100, unit: 'reps' },
    ],
    progress: { lastWorkout: 'Yesterday', streak: 5 },
  };
}
