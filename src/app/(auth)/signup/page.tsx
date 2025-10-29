// app/signup/page.tsx
"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import AuthForm from "../../components/AuthForm";


export default function SignupPage() {
  return (
    <div className="min-h-[100dvh] grid md:grid-cols-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600">
      {/* Left: Clear image */}
      <div className="relative hidden md:block">
        <Image
          src="/auth/signup.jpg"
          alt="Signup visual"
          fill
          priority
          className="object-cover brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/10 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute bottom-8 left-8 right-8 text-white"
        >
          <h2 className="text-2xl font-semibold">Join the journey</h2>
          <p className="text-sm mt-1">
            Build habits, stay motivated, and hit your goals.
          </p>
        </motion.div>
      </div>

      {/* Right: Auth form */}
      <div className="flex items-center justify-center p-6 sm:p-10">
        <AuthForm mode="signup" />
      </div>
    </div>
  );
}
