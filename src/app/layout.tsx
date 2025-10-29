import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ 
  variable: '--font-inter'
})

export const metadata = {
  title: 'FitTrack - Your All-in-One Gym Tracker',
  description: 'Log workouts, visualize progress, and stay consistent with smart goals & insights.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-[#0d0d0d] text-white`}>
        <Header />
        <main className="min-h-[calc(100vh-200px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}