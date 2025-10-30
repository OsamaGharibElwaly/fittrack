// src/components/AuthForm.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

type AuthMode = "login" | "signup";

// === Variants مع Type صريح ===
const container: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1], // cubic-bezier بدل string
      staggerChildren: 0.06,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function AuthForm({ mode }: { mode: AuthMode }) {
  const [loading, setLoading] = useState(false);
  const isLogin = mode === "login";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 900));
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      className="mx-auto w-full max-w-md rounded-2xl bg-white/80 backdrop-blur-md shadow-xl border border-black/5 p-6 sm:p-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-black">
          {isLogin ? "Welcome back" : "Create your account"}
        </h1>
        <p className="text-sm text-black/70 mt-1">
          {isLogin ? "Sign in to continue" : "It only takes a minute"}
        </p>
      </motion.div>

      <form onSubmit={onSubmit} className="space-y-4">
        {!isLogin && (
          <motion.div variants={item} className="space-y-1.5">
            <label className="text-sm font-medium text-black">Full Name</label>
            <input
              type="text"
              required
              placeholder="Jane Doe"
              className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 outline-none focus:ring-2 ring-amber-400 transition-shadow"
            />
          </motion.div>
        )}

        <motion.div variants={item} className="space-y-1.5">
          <label className="text-sm font-medium text-black">Email</label>
          <input
            type="email"
            required
            placeholder="you@example.com"
            className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 outline-none focus:ring-2 ring-amber-400 transition-shadow"
          />
        </motion.div>

        <motion.div variants={item} className="space-y-1.5">
          <label className="text-sm font-medium text-black">Password</label>
          <input
            type="password"
            required
            placeholder="••••••••"
            className="w-full rounded-xl border border-black/10 bg-white/70 px-4 py-3 outline-none focus:ring-2 ring-amber-400 transition-shadow"
          />
        </motion.div>

        <motion.button
          type="submit"
          disabled={loading}
          variants={item}
          whileHover={{ scale: loading ? 1 : 1.02 }}
          whileTap={{ scale: loading ? 1 : 0.98 }}
          className="w-full inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-amber-400 text-sm font-semibold hover:bg-zinc-900 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-black/40 disabled:opacity-60"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              {isLogin ? "Signing in..." : "Creating..."}
            </span>
          ) : isLogin ? (
            "Sign In"
          ) : (
            "Create Account"
          )}
        </motion.button>

        <motion.div variants={item} className="text-center text-sm text-black/70">
          {isLogin ? (
            <>
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="font-semibold text-black hover:underline">
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-black hover:underline">
                Sign in
              </Link>
            </>
          )}
        </motion.div>
      </form>
    </motion.div>
  );
}