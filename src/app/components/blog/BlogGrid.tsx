"use client";
import BlogCard from "./BlogCard";

interface BlogGridProps {
  posts: any[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {posts.map((post, index) => (
        <BlogCard key={post.id} post={post} index={index} />
      ))}
    </div>
  );
}