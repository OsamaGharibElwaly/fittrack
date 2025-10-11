'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function SignUpPage() {
  const r = useRouter();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErr(null);

    const fd = new FormData(e.currentTarget);
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: fd.get('name'),
        email: fd.get('email'),
        password: fd.get('password'),
      }),
    });

    setLoading(false);
    if (res.ok) {
      r.push('/login?welcome=1');
    } else {
      const j = await res.json().catch(() => ({}));
      setErr(j.error || 'حدث خطأ. حاول مرة أخرى.');
    }
  }

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-pink-200 blur-3xl opacity-50" />
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full bg-sky-200 blur-3xl opacity-50" />
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
              <h1 className="text-3xl font-extrabold">Create Account</h1>
              <p className="text-gray-600 mt-1">Start Fitting with FitTrack</p>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input
                  name="name"
                  required
                  className="w-full rounded-2xl border p-3 focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 outline-none"
                  placeholder="Your Name"
                />
              </div>

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
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 opacity-50">✉️</span>
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
                    placeholder="At least 6 letters"
                  />
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 opacity-50">🔒</span>
                </div>
              </div>

              {err && <p className="text-red-600 text-sm">{err}</p>}

              <motion.button
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="w-full rounded-2xl bg-indigo-600 text-white py-3 font-semibold shadow hover:bg-indigo-700 transition"
              >
                {loading ? 'On-Going...' : 'Login'}
              </motion.button>
            </form>

            <div className="text-center text-sm mt-4">
              Already has an Account?{' '}
              <a href="/login" className="text-indigo-700 underline underline-offset-4">
                Login
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
