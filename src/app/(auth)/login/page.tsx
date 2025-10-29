// app/login/page.tsx
"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import AuthForm from "../../components/AuthForm";



export default function LoginPage() {
  return (
    <div className="min-h-[100dvh] grid md:grid-cols-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600">
      {/* Left: Blurred background image */}
      <div className="relative hidden md:block">
        <Image
          src="/auth/login.jpg"
          alt="Login background"
          fill
          priority
          className="object-cover blur-sm brightness-75"
        />
        {/* Soft vignette/overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/20 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute bottom-8 left-8 right-8 text-white/90"
        >
          <h2 className="text-2xl font-semibold">Welcome back</h2>
          <p className="text-sm mt-1">
            Track workouts, set goals, and see progress — all in one place.
          </p>
        </motion.div>
      </div>

      {/* Right: Auth form */}
      <div className="flex items-center justify-center p-6 sm:p-10">
        <AuthForm mode="login" />
      </div>
    </div>
  );
}
