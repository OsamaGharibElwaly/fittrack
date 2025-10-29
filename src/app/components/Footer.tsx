'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setEmail('')
      
      // Reset after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    }, 1000)
  }

  const quickLinks = [
    { name: 'Workouts', href: '/workouts' },
    { name: 'Nutrition', href: '/nutrition' },
    { name: 'Progress', href: '/progress' },
    { name: 'Community', href: '/community' },
  ]

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Training Guides', href: '/training-guides' },
    { name: '1RM Calculator', href: '/calculator' },
    { name: 'FAQ', href: '/faq' },
  ]

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '𝕏' },
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'Facebook', href: '#', icon: '👥' },
    { name: 'YouTube', href: '#', icon: '▶️' },
  ]

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
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
            <p className="text-gray-400 text-sm leading-relaxed">
              Your all-in-one gym tracker: log workouts, visualize progress, and stay consistent with smart goals & insights.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#FF7A00] hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#FF7A00] font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[#FF7A00] font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-2 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[#FF7A00] font-bold text-lg mb-4">Stay in the loop</h3>
            <p className="text-gray-400 text-sm mb-4">
              Weekly tips & progress hacks. No spam.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full px-4 py-2.5 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF7A00] transition-all duration-300"
              />
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
                  submitted
                    ? 'bg-green-600 text-white'
                    : 'bg-[#FF7A00] text-white hover:bg-[#ff9533] hover:shadow-lg hover:shadow-[#FF7A00]/50'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? 'Subscribing...' : submitted ? '✓ Subscribed!' : 'Subscribe'}
              </button>
            </form>
            <a
              href="mailto:support@fittrack.app"
              className="text-gray-400 hover:text-[#FF7A00] text-sm mt-4 inline-block transition-colors duration-300"
            >
              support@fittrack.app
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} FitTrack. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>📍</span>
            <span>Port Said, EG</span>
          </div>
          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-[#FF7A00] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-[#FF7A00] transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}