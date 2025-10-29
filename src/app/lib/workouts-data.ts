// lib/workouts-data.ts
export type WorkoutsData = {
  wod: {
    id: number;
    title: string;
    exercises: string[];
  };
  plans: Array<{
    id: number;
    title: string;
    duration: string;
    level: string;
  }>;
  challenges: Array<{
    id: number;
    name: string;
    progress: number;
    total: number;
    unit: string;
  }>;
  progress: {
    lastWorkout: string;
    streak: number;
  };
};

export async function getWorkoutsData(): Promise<WorkoutsData> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    wod: {
      id: 1,
      title: "Today's WOD: Full Body Blast",
      exercises: ["Push-ups", "Squats", "Plank", "Burpees"]
    },
    plans: [
      {
        id: 1,
        title: "Strength Builder",
        duration: "45 min",
        level: "Intermediate"
      },
      {
        id: 2,
        title: "HIIT Burner",
        duration: "30 min",
        level: "Advanced"
      },
      {
        id: 3,
        title: "Quick Core",
        duration: "15 min",
        level: "Beginner"
      }
    ],
    challenges: [
      {
        id: 1,
        name: "Push-up Challenge",
        progress: 45,
        total: 100,
        unit: "reps"
      },
      {
        id: 2,
        name: "Plank Hold",
        progress: 90,
        total: 180,
        unit: "sec"
      }
    ],
    progress: {
      lastWorkout: "Yesterday",
      streak: 5
    }
  };
}