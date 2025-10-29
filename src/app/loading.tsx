'use client'

import { Dumbbell } from 'lucide-react'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
      {/* Biceps spinner */}
      <div className="relative">
        <Dumbbell
          size={64}
          strokeWidth={3}
          className="text-[#FF7A00] animate-pulse"
          style={{ filter: 'drop-shadow(0 0 16px rgba(255, 122, 0, 0.4))' }}
        />

        {/* Rotating ring */}
        <div className="absolute -inset-6 animate-spin">
          <div className="h-full w-full rounded-full border-4 border-t-[#FF7A00] border-r-transparent border-b-transparent border-l-transparent opacity-50" />
        </div>

        {/* Pulse ring */}
        <div className="absolute -inset-3 animate-ping">
          <div className="h-full w-full rounded-full border-2 border-[#FF7A00] opacity-30" />
        </div>
      </div>

      {/* Loading text + bouncing dots */}
      <div className="mt-8 flex items-center gap-1">
        <span className="text-lg font-semibold text-[#FF7A00]">Loading</span>
        <span className="flex gap-0.5">
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className="text-[#FF7A00] animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              .
            </span>
          ))}
        </span>
      </div>

      {/* Gradient progress bar */}
      <div className="mt-6 w-48 h-1 bg-gray-300 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#FF7A00] to-[#ff9533] rounded-full animate-loading-bar" />
      </div>
    </div>
  )
}