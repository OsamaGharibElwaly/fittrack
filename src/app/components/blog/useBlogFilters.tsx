"use client";

import { useState, useMemo, useEffect } from "react";

// === Mock Blog Posts Data ===
const mockPosts = [
  {
    id: 1,
    title: "10 Morning Habits That Transform Your Day",
    excerpt: "Start your day with purpose. These science-backed habits will boost energy, focus, and productivity.",
    category: "Mindset",
    author: "Sarah Chen",
    date: "2025-10-28",
    readTime: "5 min",
    featured: true,
    slug: "10-morning-habits",
  },
  {
    id: 2,
    title: "High-Protein Breakfast Ideas Under 10 Minutes",
    excerpt: "Fuel your muscles and stay full until lunch with these quick, delicious recipes.",
    category: "Nutrition",
    author: "Mike Torres",
    date: "2025-10-25",
    readTime: "4 min",
    featured: false,
    slug: "high-protein-breakfast",
  },
  {
    id: 3,
    title: "The Ultimate Push-Pull-Legs Split for Beginners",
    excerpt: "Build strength and muscle with this proven 3-day workout routine.",
    category: "Workouts",
    author: "Alex Kim",
    date: "2025-10-22",
    readTime: "7 min",
    featured: true,
    slug: "push-pull-legs",
  },
  {
    id: 4,
    title: "Why You’re Not Losing Weight (Even When You’re Trying)",
    excerpt: "Hidden calorie traps, hormone imbalances, and mindset blocks explained.",
    category: "Weight Loss",
    author: "Dr. Lisa Park",
    date: "2025-10-20",
    readTime: "8 min",
    featured: false,
    slug: "why-not-losing-weight",
  },
  {
    id: 5,
    title: "How Sleep Affects Muscle Growth",
    excerpt: "The science behind recovery and how to optimize your sleep for gains.",
    category: "Recovery",
    author: "Jordan Lee",
    date: "2025-10-18",
    readTime: "6 min",
    featured: false,
    slug: "sleep-muscle-growth",
  },
  {
    id: 6,
    title: "5 Supplements Worth Your Money in 2025",
    excerpt: "Cut through the noise. These are the only supplements backed by real science.",
    category: "Nutrition",
    author: "Coach Ryan",
    date: "2025-10-15",
    readTime: "5 min",
    featured: true,
    slug: "best-supplements-2025",
  },
  {
    id: 7,
    title: "Home Workouts: No Equipment, No Excuses",
    excerpt: "Full-body circuits you can do anywhere, anytime.",
    category: "Workouts",
    author: "Emma Stone",
    date: "2025-10-12",
    readTime: "4 min",
    featured: false,
    slug: "home-workouts-no-equipment",
  },
  {
    id: 8,
    title: "Master Your Mindset: Overcoming Gym Anxiety",
    excerpt: "Feel confident walking into any gym with these practical tips.",
    category: "Mindset",
    author: "David Reyes",
    date: "2025-10-10",
    readTime: "6 min",
    featured: false,
    slug: "gym-anxiety-tips",
  },
];

// === Categories ===
const categories = [
  "All",
  "Nutrition",
  "Workouts",
  "Weight Loss",
  "Mindset",
  "Recovery",
];

// === Types ===
export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  slug: string;
};

// === Custom Hook ===
export function useBlogFilters() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter & Search Logic
  const filteredPosts = useMemo(() => {
    let filtered = mockPosts;

    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter((post) => post.category ===	activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.author.toLowerCase().includes(query)
      );
    }

    // Sort by date (latest first)
    filtered = filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return filtered;
  }, [activeCategory, searchQuery]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * postsPerPage;
    const end = start + postsPerPage;
    return filteredPosts.slice(start, end);
  }, [filteredPosts, currentPage]);

  // Reset page when filters change
useEffect(() => {
  setCurrentPage(1);
}, [activeCategory, searchQuery]);

  return {
    categories,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    totalPages,
    filteredPosts: paginatedPosts,
    allPosts: filteredPosts,
  };
}