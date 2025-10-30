import {
  Dumbbell,
  Flame,
  Brain,
  Utensils,
  Heart,
  Timer,
  Home,
  Zap,
  BookOpen,
  Coffee,
  Target,
  Trophy,
} from 'lucide-react';

/* ========================================
   أنواع البيانات (TypeScript Types)
   ======================================== */
export type BlogPost = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'Fitness' | 'Nutrition' | 'Mindset' | 'Workouts' | 'Recovery';
  tag:
    | 'Workouts'
    | 'Meal Prep'
    | 'Sleep'
    | 'Cardio'
    | 'Habits'
    | 'Science'
    | 'Home'
    | 'Weight Loss'
    | 'Supplements'
    | 'Motivation'
    | 'PPL'
    | 'Carbs';
  date: string;
};

export const categories = [
  'All',
  'Fitness',
  'Nutrition',
  'Mindset',
  'Workouts',
  'Recovery',
] as const;

export type Category = (typeof categories)[number];

/* ========================================
   بيانات المدونة (Mock Data)
   ======================================== */
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '10 Proven Ways to Build Muscle Fast',
    description:
      'Science-backed strategies to accelerate muscle growth without spending hours in the gym.',
    image:
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=500&fit=crop',
    category: 'Fitness',
    tag: 'Workouts',
    date: 'Oct 28, 2025',
  },
  {
    id: 2,
    title: 'The Ultimate Guide to Meal Prepping',
    description:
      'Save time, money, and stay on track with your nutrition goals using this step-by-step guide.',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&h=500&fit=crop',
    category: 'Nutrition',
    tag: 'Meal Prep',
    date: 'Oct 25, 2025',
  },
  {
    id: 3,
    title: 'How Sleep Affects Your Muscle Gains',
    description:
      'Why 7-9 hours of quality sleep is the most underrated muscle-building tool you have.',
    image:
      'https://images.unsplash.com/photo-1541781774459-bb2c19f6e5b4?w=800&h=500&fit=crop',
    category: 'Recovery',
    tag: 'Sleep',
    date: 'Oct 22, 2025',
  },
  {
    id: 4,
    title: 'HIIT vs LISS: Which Burns More Fat?',
    description:
      'We break down the science behind both cardio styles to help you choose the right one.',
    image:
      'https://images.unsplash.com/photo-1518614368383-3d1e3e2c7b5a?w=800&h=500&fit=crop',
    category: 'Workouts',
    tag: 'Cardio',
    date: 'Oct 20, 2025',
  },
  {
    id: 5,
    title: '5 Morning Habits of Elite Athletes',
    description:
      'Steal these routines to boost energy, focus, and performance before your day starts.',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop',
    category: 'Mindset',
    tag: 'Habits',
    date: 'Oct 18, 2025',
  },
  {
    id: 6,
    title: '5 Protein Myths You Need to Stop Believing',
    description:
      "From 'too much protein hurts kidneys' to 'you need it every 3 hours' — debunked.",
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop',
    category: 'Nutrition',
    tag: 'Science',
    date: 'Oct 15, 2025',
  },
  {
    id: 7,
    title: '20-Minute Home Workout (No Equipment)',
    description:
      'Full-body circuit you can do anywhere, anytime — perfect for busy schedules.',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop',
    category: 'Workouts',
    tag: 'Home',
    date: 'Oct 12, 2025',
  },
  {
    id: 8,
    title: 'How to Break Through Weight Loss Plateaus',
    description:
      "The 3 most common reasons you're stuck + proven fixes to get moving again.",
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop',
    category: 'Fitness',
    tag: 'Weight Loss',
    date: 'Oct 10, 2025',
  },
  {
    id: 9,
    title: '5 Supplements Actually Worth Your Money',
    description:
      'Cut through the hype — these are the only ones backed by real science.',
    image:
      'https://images.unsplash.com/photo-1599352893431-1930e95cca3f?w=800&h=500&fit=crop',
    category: 'Nutrition',
    tag: 'Supplements',
    date: 'Oct 8, 2025',
  },
  {
    id: 10,
    title: "How to Stay Motivated When You Don't Feel Like It",
    description:
      'Mental tricks used by top athletes to show up consistently, even on bad days.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
    category: 'Mindset',
    tag: 'Motivation',
    date: 'Oct 5, 2025',
  },
  {
    id: 11,
    title: 'The Perfect Push-Pull-Legs Split',
    description: 'Build balanced muscle with this proven 6-day training program.',
    image:
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&h=500&fit=crop',
    category: 'Workouts',
    tag: 'PPL',
    date: 'Oct 3, 2025',
  },
  {
    id: 12,
    title: 'When to Eat Carbs for Maximum Gains',
    description: "Timing matters more than you think — here's the optimal strategy.",
    image:
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=500&fit=crop',
    category: 'Nutrition',
    tag: 'Carbs',
    date: 'Oct 1, 2025',
  },
];

/* ========================================
   خريطة الأيقونات (للاستخدام في Client فقط)
   ======================================== */
export const tagIconMap = {
  Workouts: Dumbbell,
  'Meal Prep': Utensils,
  Sleep: Heart,
  Cardio: Flame,
  Habits: Brain,
  Science: Zap,
  Home: Home,
  'Weight Loss': Timer,
  Supplements: Coffee,
  Motivation: Trophy,
  PPL: Target,
  Carbs: BookOpen,
} satisfies Record<string, React.FC<any>>;

/* ========================================
   دالة مساعدة: جلب منشور حسب الـ ID
   ======================================== */
export function getPostById(id: number): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}

/* ========================================
   دالة مساعدة: تصفية حسب الفئة
   ======================================== */
export function getPostsByCategory(
  category: Category,
  posts: BlogPost[] = blogPosts
): BlogPost[] {
  if (category === 'All') return posts;
  return posts.filter((post) => post.category === category);
}