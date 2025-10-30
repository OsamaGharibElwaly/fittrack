// app/blog/BlogClient.tsx
'use client';

import { useMemo, useState } from 'react';
import BlogCard from '../components/blog/BlogCard';
import type { BlogPost } from '../components/blog/blogData';
import { categories as exportedCategories } from '../components/blog/blogData';

interface Props {
  initialPosts: BlogPost[];
}

export default function BlogClient({ initialPosts }: Props) {
  // Ensure we have an "All" category and de-duplicate categories defensively
  const categories = useMemo<string[]>(() => {
    const fromData = Array.isArray(exportedCategories) ? exportedCategories : [];
    const set = new Set<string>(['All', ...fromData]);
    return Array.from(set);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredPosts = useMemo<BlogPost[]>(() => {
    if (selectedCategory === 'All') return initialPosts;
    return initialPosts.filter((p) => p.category === selectedCategory);
  }, [initialPosts, selectedCategory]);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-[#FFA42B] mb-8">FitTrack Blog</h1>

      {/* Category Filter */}
      <div className="flex gap-3 flex-wrap mb-8">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              aria-pressed={isActive}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                isActive
                  ? 'bg-[#FFA42B] text-black'
                  : 'bg-[#1a1a1a] text-gray-300 hover:bg-[#333]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Blog Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
          // NOTE: If your BlogCard does NOT accept `index`, just remove `index={index}`
        ))}
      </div>
    </div>
  );
}
