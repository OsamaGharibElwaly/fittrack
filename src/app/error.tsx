'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Error Page:', error)
  }, [error])

  return (
    <html lang="en" dir="ltr">
      <body className="bg-[#0d0d0d] text-white min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full space-y-8 text-center">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  d="M30 50 Q30 30, 40 25 Q45 23, 50 30 Q55 23, 60 25 Q70 30, 70 50 Q70 60, 65 65 Q60 70, 50 65 Q40 70, 35 65 Q30 60, 30 50 M25 45 Q20 45, 20 50 Q20 55, 25 55 M75 45 Q80 45, 80 50 Q80 55, 75 55"
                  fill="none"
                  stroke="#FF7A00"
                  strokeWidth="3"
                  className="transition-all duration-300 group-hover:stroke-[#ff9533]"
                />
              </svg>
            </div>
            <span className="text-3xl font-bold text-[#FF7A00] transition-colors duration-300 group-hover:text-[#ff9533]">
              FitTrack
            </span>
          </Link>

          {/* Error Message */}
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-[#FF7A00]">Error!</h1>
            <p className="text-xl text-gray-300">
              An unexpected error occurred. Don’t worry — we’re working on fixing it.
            </p>
            {error?.message && (
              <p className="text-sm text-gray-500 font-mono bg-gray-900 p-3 rounded-lg">
                {error.message}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="px-6 py-3 bg-[#FF7A00] text-white font-semibold rounded-lg hover:bg-[#ff9533] hover:shadow-lg hover:shadow-[#FF7A00]/30 transition-all duration-300 transform hover:scale-105"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300"
            >
              Go Home
            </Link>
          </div>

          {/* Support */}
          <p className="text-sm text-gray-500">
            Need help? Contact us at{' '}
            <a
              href="mailto:support@fittrack.app"
              className="text-[#FF7A00] hover:underline"
            >
              support@fittrack.app
            </a>
          </p>
        </div>
      </body>
    </html>
  )
}
