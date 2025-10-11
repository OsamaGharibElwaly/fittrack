import {
  Home,
  Dumbbell,
  Apple,
  LineChart,
  Users,
  Newspaper,
} from "lucide-react";

import Link from "next/link";

function FeatureCard({ Icon, title, desc }) {
  return (
    <div className="feature-card">
      <div className="icon">
        <Icon size={20} aria-hidden="true" />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default function Landing() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Track Your Fitness Journey</h1>
          <p>
            Achieve your fitness goals with Gym Tracker. Log workouts, set PRs,
            visualize progress, and stay motivated.
          </p>
          <div className="hero-buttons">
            <a href="/signup" className="btn btn-primary">
              Start Your Free Trial
            </a>
            <a href="/features" className="btn btn-outline">
              See Features
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="features-header">
          <h2>Powerful Features to Elevate Your Training</h2>
          <p>
            Stay on top of your routine and maximize results with tools built
            for consistency.
          </p>
        </div>

        <div className="features-grid">
          <FeatureCard
            Icon={Home}
            title="Home"
            desc="Quick access to your dashboard."
          />
          <FeatureCard
            Icon={Dumbbell}
            title="Workouts"
            desc="Browse and log workouts."
          />
          <FeatureCard
            Icon={Apple}
            title="Nutrition"
            desc="Track your meals and calories."
          />
          <FeatureCard
            Icon={LineChart}
            title="Progress"
            desc="Charts & statistics to monitor growth."
          />
          <FeatureCard
            Icon={Users}
            title="Community"
            desc="Connect and share with other members."
          />
          <FeatureCard
            Icon={Newspaper}
            title="Blog"
            desc="Read guides and fitness articles."
          />
        </div>
      </section>
    </main>
  );
}

/* 
    replace a with Link component
*/
