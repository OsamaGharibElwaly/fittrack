"use client"
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* CTA شريط أعلى الفوتر */}
      <div className="footer-cta">
        <div className="container">
          <div className="footer-cta__text">
            <h3>Ready to level up your fitness?</h3>
            <p>Track workouts, set goals, and see progress — all in one place.</p>
          </div>
          <div className="footer-cta__action">
            <Link href="/signup" className="btn btn--light">Start Free</Link>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-col">
            <div className="footer-brand">
              <Image src="/gym.png" alt="FitTrack" width={44} height={44} />
              <span>FitTrack</span>
            </div>
            <p className="footer-desc">
              Your all-in-one gym tracker: log workouts, visualize progress, and
              stay consistent with smart goals & insights.
            </p>

            <ul className="footer-socials">
              <li>
                <a href="https://twitter.com" aria-label="X / Twitter">
                  {/* X icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21l-6.63 7.58L22 22h-6.59l-5.16-6.76L3.82 22H1l7.09-8.11L2 2h6.7l4.66 6.19L18.244 2Zm-2.31 18h1.7L8.18 4H6.41l9.523 16Z"/></svg>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" aria-label="Instagram">
                  {/* Instagram icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608S5.8 2.295 7.166 2.233C8.432 2.175 8.812 2.163 12 2.163Zm0 1.622c-3.15 0-3.517.012-4.755.069-1.022.047-1.58.217-1.948.363-.49.19-.84.416-1.209.785-.369.369-.595.719-.785 1.209-.146.368-.316.926-.363 1.948-.057 1.238-.069 1.605-.069 4.755s.012 3.517.069 4.755c.047 1.022.217 1.58.363 1.948.19.49.416.84.785 1.209.369.369.719.595 1.209.785.368.146.926.316 1.948.363 1.238.057 1.605.069 4.755.069s3.517-.012 4.755-.069c1.022-.047 1.58-.217 1.948-.363.49-.19.84-.416 1.209-.785.369-.369.595-.719.785-1.209.146-.368.316-.926.363-1.948.057-1.238.069-1.605.069-4.755s-.012-3.517-.069-4.755c-.047-1.022-.217-1.58-.363-1.948a3.37 3.37 0 0 0-.785-1.209 3.37 3.37 0 0 0-1.209-.785c-.368-.146-.926-.316-1.948-.363-1.238-.057-1.605-.069-4.755-.069Zm0 3.919a5.296 5.296 0 1 1 0 10.593 5.296 5.296 0 0 1 0-10.593Zm0 1.622a3.674 3.674 0 1 0 0 7.348 3.674 3.674 0 0 0 0-7.348Zm5.406-2.01a1.237 1.237 0 1 1 0 2.474 1.237 1.237 0 0 1 0-2.474Z"/></svg>
                </a>
              </li>
              <li>
                <a href="https://github.com" aria-label="GitHub">
                  {/* GitHub icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.292 9.385 7.865 10.902.575.102.787-.25.787-.555 0-.274-.01-1-.015-1.963-3.2.695-3.876-1.542-3.876-1.542-.523-1.33-1.278-1.684-1.278-1.684-1.045-.714.08-.7.08-.7 1.156.082 1.765 1.188 1.765 1.188 1.028 1.763 2.697 1.254 3.354.959.104-.744.402-1.254.73-1.543-2.555-.291-5.241-1.277-5.241-5.683 0-1.255.45-2.283 1.188-3.088-.119-.29-.515-1.462.113-3.048 0 0 .967-.31 3.169 1.18a10.96 10.96 0 0 1 2.885-.388c.98.005 1.968.132 2.885.388 2.2-1.49 3.166-1.18 3.166-1.18.63 1.586.234 2.758.116 3.048.739.805 1.187 1.833 1.187 3.088 0 4.418-2.69 5.388-5.253 5.673.413.354.78 1.05.78 2.116 0 1.526-.014 2.758-.014 3.133 0 .308.209.662.793.55A11.507 11.507 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/workouts">Workouts</Link></li>
              <li><Link href="/nutrition">Nutrition</Link></li>
              <li><Link href="/progress">Progress</Link></li>
              <li><Link href="/community">Community</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-col">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/guides">Training Guides</Link></li>
              <li><Link href="/calculators">1RM Calculator</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="footer-col">
            <h4>Stay in the loop</h4>
            <p className="footer-desc">Weekly tips & progress hacks. No spam.</p>
            <form className="footer-newsletter" onSubmit={(e)=>e.preventDefault()}>
              <input type="email" placeholder="Your email" aria-label="Email" required />
              <button className="btn" type="submit">Subscribe</button>
            </form>
            <ul className="footer-contact">
              <li><a href="mailto:support@fittrack.app">support@fittrack.app</a></li>
              <li>Port Said, EG</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container footer-bottom__row">
            <small>© {new Date().getFullYear()} FitTrack. All rights reserved.</small>
            <ul>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
