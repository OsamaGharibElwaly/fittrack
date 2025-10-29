"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-black transition-all duration-300 hover:brightness-110"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-4 md:grid-cols-[1fr_auto] items-center">
          <div>
            <h2 className="text-xl font-semibold">Ready to level up your fitness?</h2>
            <p className="text-sm mt-1 text-black/80">
              Track workouts, set goals, and see progress — all in one place.
            </p>
          </div>
          <div className="flex justify-start md:justify-end">
            <Link
              href="/signup"
              className="inline-flex items-center rounded-xl bg-black px-6 py-3 text-amber-400 text-sm font-semibold hover:bg-zinc-900 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-black/40"
            >
              Start Free
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}