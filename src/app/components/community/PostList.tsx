// components/community/PostList.tsx
import { PostCard } from './PostCard';
import { Post } from '../../lib/types';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export function PostList({ posts, onLike, onFavorite }: {
  posts: Post[];
  onLike: (id: string) => void;
  onFavorite: (id: string) => void;
}) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {posts.map(post => (
        <PostCard
          key={post.id}
          post={post}
          onLike={() => onLike(post.id)}
          onFavorite={() => onFavorite(post.id)}
        />
      ))}
    </motion.div>
  );
}