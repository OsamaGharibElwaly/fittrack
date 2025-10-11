"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterChips from "./components/FilterChips";
import TipFeatureCard from "./components/TipFeatureCard";
import AdaptiveAdvice from "./components/AdaptiveAdvice";
import TipCard from "./components/TipCard";
import NutritionSettings from "./components/NutritionSettings";
import NutritionOverview from "./components/NutritionOverview";
import TIPS from "../data/tips.json";

export default function Page() {
  const [active, setActive] = useState("All");
  const [targets, setTargets] = useState(null);

  const visibleTips = active === "All" ? TIPS : TIPS.filter(t => t.goal === active);

  return (
    <>
      <Header />
      <main className="flex flex-1 justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl space-y-8">
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-4xl font-extrabold tracking-tight text-background-dark dark:text-background-light">
              Nutrition
            </h1>
            <p className="text-base text-ink-700 dark:text-ink-300">
              Set your targets, log foods, and track progress.
            </p>
          </div>

          <NutritionSettings onChange={setTargets} />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            <div className="md:col-span-3 space-y-6">
              <div className="flex items-center justify-between">
                <FilterChips active={active} onChange={setActive} />
              </div>

              <TipFeatureCard />

              <div className="grid gap-4 sm:grid-cols-2" key={active}>
                {visibleTips.map((t) => <TipCard key={t.id} {...t} />)}
                {visibleTips.length === 0 && (
                  <div className="text-sm text-ink-700 dark:text-ink-300">No tips for this goal yet.</div>
                )}
              </div>
            </div>

            <div className="md:col-span-2">
              <NutritionOverview targets={targets} />
            </div>
          </div>

          <AdaptiveAdvice />
        </div>
      </main>
      <Footer />
    </>
  );
}
