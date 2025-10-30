'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

type Action =
  | { type: 'link'; href: string; label: string }
  | { type: 'button'; onClick: () => void; label: string };

export default function ErrorScreen({
  code = 'Error',
  title = 'Something went wrong',
  message = 'An unexpected error occurred. Please try again.',
  primaryAction,
  secondaryAction,
}: {
  code?: string | number;
  title?: string;
  message?: string;
  primaryAction?: Action;
  secondaryAction?: Action;
}) {
  return (
    <main className="flex-grow flex items-center justify-center p-6">
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="relative w-full max-w-2xl"
      >
        {/* الخلفيات حوالين الكارد */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(255,122,0,0.15),transparent),radial-gradient(800px_400px_at_100%_120%,rgba(255,122,0,0.12),transparent)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 rounded-2xl bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.08))]"
        />

        {/* الكارد */}
        <div className="mx-auto overflow-hidden rounded-2xl border border-black/5 dark:border-white/5 bg-white/70 dark:bg-white/5 backdrop-blur-md shadow-xl">
          {/* الأيقونة والعنوان */}
          <div className="px-8 pt-8 text-center">
            <motion.div
              initial={{ scale: 0.9, rotate: -2, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="mx-auto mb-6 flex h-40 w-40 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20"
            >
              <svg viewBox="0 0 64 64" width="96" height="96" aria-hidden="true" className="text-primary">
                <path
                  fill="currentColor"
                  d="M32 2a30 30 0 1 0 0 60 30 30 0 0 0 0-60Zm0 14a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm-6 16c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V32Z"
                />
              </svg>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                {String(code)} — {title}
              </span>
            </h1>
            <p className="mt-3 text-base sm:text-lg text-foreground-light/80 dark:text-foreground-dark/80">
              {message}
            </p>
          </div>

          {/* الأزرار */}
          <div className="px-8 pb-8 pt-6">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              {primaryAction &&
                (primaryAction.type === 'link' ? (
                  <Link
                    href={primaryAction.href}
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-primary px-6 py-3 text-black font-semibold shadow-md hover:shadow-lg hover:bg-opacity-90 transition-all duration-300"
                  >
                    {primaryAction.label}
                  </Link>
                ) : (
                  <button
                    onClick={primaryAction.onClick}
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-primary px-6 py-3 text-white font-semibold shadow-md hover:shadow-lg hover:bg-opacity-90 transition-all duration-300"
                  >
                    {primaryAction.label}
                  </button>
                ))}

              {secondaryAction &&
                (secondaryAction.type === 'link' ? (
                  <Link
                    href={secondaryAction.href}
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-foreground-light/15 dark:border-foreground-dark/15 px-6 py-3 font-semibold hover:bg-foreground-light/5 dark:hover:bg-foreground-dark/5 transition-all duration-300"
                  >
                    {secondaryAction.label}
                  </Link>
                ) : (
                  <button
                    onClick={secondaryAction.onClick}
                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-foreground-light/15 dark:border-foreground-dark/15 px-6 py-3 font-semibold hover:bg-foreground-light/5 dark:hover:bg-foreground-dark/5 transition-all duration-300"
                  >
                    {secondaryAction.label}
                  </button>
                ))}
            </div>
          </div>
        </div>

        {/* جلو لطيف */}
        <div
          aria-hidden
          className="absolute -z-20 inset-x-0 -top-24 h-48 blur-3xl opacity-30 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600"
        />
      </motion.section>
    </main>
  );
}
