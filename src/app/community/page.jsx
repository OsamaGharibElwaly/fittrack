"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { posts, users } from "../lib/community-data";

// ✅ Import from layoutBridge
import Header from "../components/Header";
import Footer from "../components/Footer"

// Components
import PostCard from "./components/PostCard";
import ComposePost from "./components/ComposePost";
import SearchAndSort from "./components/SearchAndSort";
import SkeletonList from "./components/SkeletonList";

export default function CommunityPage() {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("trending");
  const [isLoading, setIsLoading] = useState(false);

  const filtered = useMemo(() => {
    let list = posts.filter((p) =>
      [p.title, p.content, users[p.authorId].name]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase())
    );

    if (sortBy === "new") list.sort((a, b) => b.createdAt - a.createdAt);
    if (sortBy === "top") list.sort((a, b) => b.reactions.total - a.reactions.total);
    if (sortBy === "trending") {
      const score = (x) =>
        ((Date.now() - x.createdAt) / 1000 / 60 / 60 < 72 ? 10 : 0) +
        x.reactions.total;
      list.sort((a, b) => score(b) - score(a));
    }
    return list;
  }, [query, sortBy]);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <Header />

      <section className="mx-auto max-w-5xl px-4 pb-24 pt-10">
        {/* Title + Search */}
        <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#0A66C2]">
              Community
            </h1>
            <p className="text-sm text-slate-500">
              Share updates, ask questions, and help others.
            </p>
          </div>

          <SearchAndSort
            query={query}
            onQuery={setQuery}
            sortBy={sortBy}
            onSort={setSortBy}
            onLoading={setIsLoading}
          />
        </header>

        <ComposePost />

        {isLoading ? (
          <SkeletonList />
        ) : (
          <div className="mt-6 grid gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((post) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <PostCard
                    post={post}
                    author={users[post.authorId]}
                    clickable={false}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
