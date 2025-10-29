// app/community/CommunityWrapper.tsx
'use client';

import { useState } from 'react';
import { Post } from '../lib/types';
import { StartPostButton } from '../components/community/StartPostButton';
import { PostList } from '../components/community/PostList';
import { CTASection } from '../components/community/CTASection';
import { motion } from 'framer-motion';

interface CommunityWrapperProps {
  initialPosts: Post[];
}

export function CommunityWrapper({ initialPosts }: CommunityWrapperProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const handleLike = (id: string) => {
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  const handleFavorite = (id: string) => {
    setPosts(posts.map(p => p.id === id ? { ...p, favorites: p.favorites + 1 } : p));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white"
    >
      <div className="max-w-4xl mx-auto px-4 py-12">
        <StartPostButton />
        <PostList posts={posts} onLike={handleLike} onFavorite={handleFavorite} />
        <CTASection />
      </div>
    </motion.div>
  );
}