// ==========================
// components/home/HeroSection.tsx
// ==========================
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full mb-[50px]"
    >
      <Image
        src="/3d-gym-equipment.jpg"
        alt="Gym hero"
        width={1920}
        height={1080}
        className="h-[360px] w-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-black/40" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center max-w-xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          TRACK <br /> YOUR <br /> WORKOUTS
        </h1>
        <motion.a
          href="/signup"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="mt-6 inline-block rounded-lg bg-[#FFA42B] px-5 py-3 font-bold text-black hover:opacity-90"
        >
          START TRACKING
        </motion.a>
      </motion.div>
    </motion.section>
  );
}