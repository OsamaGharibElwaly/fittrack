// components/community/PostCard.tsx
'use client';

import { Post } from '../../lib/types';
import { Avatar } from '../ui/Avatar';
import { IconButton } from '../ui/IconButton';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function PostCard({ post, onLike, onFavorite }: { post: Post; onLike: () => void; onFavorite: () => void }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      className="bg-zinc-900 rounded-lg p-6 hover:bg-zinc-800 transition-all duration-300 cursor-pointer"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <Avatar src={post.author.avatar} alt={post.author.name} />
          <div>
            <h3 className="text-orange-500 font-semibold text-lg">{post.author.name}</h3>
            <p className="text-gray-500 text-sm">{post.author.role}</p>
          </div>
        </div>
        <span className="text-gray-500 text-sm">{post.timeAgo}</span>
      </div>

      {/* Content */}
      <div className="mb-4">
        <h4 className="text-white font-semibold text-lg mb-2">{post.title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{post.content}</p>
      </div>

      {/* Tags & Actions */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="bg-zinc-800 text-orange-500 px-3 py-1 rounded text-sm">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <IconButton onClick={onLike} icon="like" count={post.likes} />
          <IconButton onClick={onFavorite} icon="heart" count={post.favorites} />
        </div>
      </div>
    </motion.div>
  );
}