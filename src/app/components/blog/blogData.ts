// src/components/blog/blogData.ts
export type BlogPost = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tag: string;
  date: string;
};

export const categories = ["All", "Fitness", "Nutrition", "Mindset", "Workouts"] as const;

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Proven Ways to Build Muscle Fast",
    description: "Discover science-backed strategies to accelerate muscle growth without spending hours in the gym.",
    image: "/blog/muscle-growth.jpg",
    category: "Fitness",
    tag: "Workouts",
    date: "Oct 25, 2025"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Meal Prepping",
    description: "Save time, money, and stay on track with your nutrition goals using this step-by-step guide.",
    image: "/blog/meal-prep.jpg",
    category: "Nutrition",
    tag: "Nutrition",
    date: "Oct 22, 2025"
  },
  // أضف المزيد حسب الحاجة...
];