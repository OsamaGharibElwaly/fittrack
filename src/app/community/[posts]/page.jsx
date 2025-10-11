"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { posts, users, comments } from "@/community/mockData";
import { Header, Footer } from "@/community/layoutBridge";

import PostCard from "@/community/components/PostCard";
import CommentThread from "@/community/components/CommentThread";

export default function PostDetailsPage({ params }) {
  const postId = params.posts;
  const post = posts.find((p) => String(p.id) === String(postId));
  if (!post) return notFound();

  const postComments = comments.filter((c) => c.postId === post.id);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />

      <section className="mx-auto max-w-4xl px-4 pb-24 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="mt-2"
        >
          <PostCard post={post} author={users[post.authorId]} full />
        </motion.div>

        <h2 className="mt-10 text-xl font-semibold text-[#0A66C2]">Comments</h2>
        <CommentThread comments={postComments} users={users} />
      </section>

      <Footer />
    </main>
  );
}
