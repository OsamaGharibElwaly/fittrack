"use client";
import { motion } from "framer-motion";
import { BlogPost } from "./blogData";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-[#1a1a1a] rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFA42B]/20 cursor-pointer group"
    >
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#FFA42B] text-xs font-bold uppercase tracking-wider">
            {post.category}
          </span>
          <span className="text-gray-500 text-xs">• {post.date}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-[#FFA42B] transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {post.description}
        </p>
        <button className="text-[#FFA42B] font-semibold text-sm hover:gap-2 flex items-center gap-1 transition-all duration-300">
          Read More
          <motion.span
            animate={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3 }}
          >
            →
          </motion.span>
        </button>
      </div>
    </motion.div>
  );
}