'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const sp = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErr(null);
    const fd = new FormData(e.currentTarget);

    const res = await signIn('credentials', {
      email: fd.get('email'),
      password: fd.get('password'),
      redirect: true,
      callbackUrl: '/', // غيّرها لاحقًا لأي صفحة دااشبورد
    });

    // next-auth هيتكفّل بالريدايركت. لو في error هيتعرض تلقائيًا في الكويري (?error=..)
    setLoading(false);
  }

  return (
    <section className="relative overflow-hidden">
      {/* خلفية لطيفة */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-indigo-200 blur-3xl opacity-50" />
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full bg-emerald-200 blur-3xl opacity-50" />
      </div>

      <div className="mx-auto max-w-5xl px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mx-auto w-full max-w-md"
        >
          <div className="bg-white/90 backdrop-blur shadow-xl rounded-2xl p-8 border">
            <div className="mb-6 text-center">
              <h1 className="text-3xl font-extrabold">Login</h1>
              <p className="text-gray-600 mt-1">Welcome Back To FitTrack</p>
              {sp.get('welcome') && (
                <p className="text-green-700 text-sm mt-3">Loggined Successfully!, Welcome</p>
              )}
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Email</label>
                <div className="relative">
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-2xl border p-3 pr-10 focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none"
                    placeholder="you@example.com"
                  />
                  {/* أيقونة بسيطة بدون مكتبات */}
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 opacity-50">
                    ✉️
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type="password"
                    required
                    className="w-full rounded-2xl border p-3 pr-10 focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none"
                    placeholder="••••••••"
                  />
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 opacity-50">
                    🔒
                  </span>
                </div>
              </div>

              {err && <p className="text-red-600 text-sm">{err}</p>}

              <motion.button
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="w-full rounded-2xl bg-indigo-600 text-white py-3 font-semibold shadow hover:bg-indigo-700 transition"
              >
                {loading ? 'On-Going...' : 'Entering...'}
              </motion.button>
            </form>

            <div className="text-center text-sm mt-4">
              Don't Have an Account?{' '}
              <a href="/signup" className="text-indigo-700 underline underline-offset-4">
                Create an Account
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
