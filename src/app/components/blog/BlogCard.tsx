'use client';

import { tagIconMap } from './blogData';
import {
  Dumbbell,   // <-- استورد الأيقونة التي تريد استخدامها كـ fallback
  Calendar,
  Clock,
} from 'lucide-react';
import Image from 'next/image';
import type { BlogPost } from './blogData';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}


export default function BlogCard({ post }: BlogCardProps) {
  // fallback = أول أيقونة في الـ map (مثلاً Dumbbell)
  const Icon = tagIconMap[post.tag] ?? Dumbbell;

  return (
    <div className="bg-[#1a1a1a] rounded-xl overflow-hidden hover:bg-[#222] transition cursor-pointer group">
      {/* الصورة */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition"
        />
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
          {post.category}
        </div>
      </div>

      {/* المحتوى */}
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
          <Icon className="w-4 h-4 text-[#FFA42B]" />
          <span>{post.tag}</span>
          <span>•</span>
          <Calendar className="w-3 h-3" />
          <span>{post.date}</span>
        </div>

        <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-[#FFA42B] transition">
          {post.title}
        </h3>
        <p className="text-sm text-gray-400 line-clamp-2">{post.description}</p>
      </div>
    </div>
  );
}