'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Workouts', href: '/workouts' },
    { name: 'Nutrition', href: '/nutrition' },
    { name: 'Progress', href: '/progress' },
    { name: 'Community', href: '/community' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-[#0d0d0d] border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
          >
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
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
            <span className="text-2xl font-bold text-[#FF7A00] transition-colors duration-300 group-hover:text-[#ff9533]">
              FitTrack
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-[#FF7A00] transition-all duration-300 font-medium relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF7A00] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="/signup"
              className="bg-[#FF7A00] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#ff9533] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF7A00]/50 hover:scale-105"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-[#FF7A00] transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-gray-300 hover:text-[#FF7A00] hover:bg-gray-900 transition-all duration-300 px-4 py-3 rounded-lg font-medium"
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/get-started"
              className="block bg-[#FF7A00] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#ff9533] transition-all duration-300 text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}