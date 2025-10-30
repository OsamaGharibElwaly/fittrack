// app/blog/page.tsx
import BlogClient from './BlogClient';
import { blogPosts } from '../components/blog/blogData';

export default function BlogPage() {
  return <BlogClient initialPosts={blogPosts} />;
}