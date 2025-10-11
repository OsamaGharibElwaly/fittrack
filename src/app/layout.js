import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Header from "./components/Header";
import Footer from "./components/Footer";

// app/layout.js
    import "@fortawesome/fontawesome-svg-core/styles.css";
    import { config } from "@fortawesome/fontawesome-svg-core";
    config.autoAddCss = false; // Disable automatic CSS insertion
    // import Lexend from "next/font";
    export const metadata = {
  title: 'FitTrack',
  description: 'Workouts',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">{children}</body>
    </html>
  );
}
