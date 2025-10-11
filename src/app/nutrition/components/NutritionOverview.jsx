"use client";
import { useEffect, useMemo, useState } from "react";

function ProgressBar({ label, value, target }) {
  const pct = Math.min(100, Math.round((value / Math.max(1, target)) * 100));
  return (
    <div className="space-y-1">
      <div className="flex items-baseline justify-between">
        <p className="text-sm font-medium text-background-dark dark:text-background-light">{label}</p>
        <p className="text-sm text-ink-700 dark:text-ink-300">{pct}%</p>
      </div>
      <div className="h-2 w-full rounded-full bg-ink-300/30 dark:bg-white/10 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-[width] duration-700"
             style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export default function NutritionOverview({ targets }) {
  const [entry, setEntry] = useState({ name: "", kcal: "", p: "", c: "", f: "" });
  const [items, setItems] = useState([]);

  // daily key
  const key = useMemo(() => {
    const d = new Date();
    const day = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
    return `fit_nutri_log_${day}`;
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(key);
      if (saved) setItems(JSON.parse(saved));
    }
  }, [key]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(items));
    }
  }, [items, key]);

  const totals = useMemo(() => {
    return items.reduce(
      (acc, i) => ({
        kcal: acc.kcal + Number(i.kcal || 0),
        p: acc.p + Number(i.p || 0),
        c: acc.c + Number(i.c || 0),
        f: acc.f + Number(i.f || 0),
      }),
      { kcal: 0, p: 0, c: 0, f: 0 }
    );
  }, [items]);

  const addItem = () => {
    if (!entry.name || !entry.kcal) return;
    setItems(prev => [...prev, { ...entry, id: crypto.randomUUID() }]);
    setEntry({ name: "", kcal: "", p: "", c: "", f: "" });
  };

  const removeItem = (id) => setItems(prev => prev.filter(i => i.id !== id));

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-bold text-background-dark dark:text-background-light">Daily Nutrition Overview</h2>

      {/* Stats cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur-sm p-4 ring-1 ring-primary/15 dark:ring-primary/25">
          <p className="text-sm text-ink-700 dark:text-ink-300">Calories</p>
          <p className="text-2xl font-extrabold">{totals.kcal}</p>
          <p className="text-xs text-ink-700/70 dark:text-ink-300/70">/ {targets?.kcalTarget ?? "-"}</p>
        </div>
        <div className="rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur-sm p-4 ring-1 ring-primary/15 dark:ring-primary/25">
          <p className="text-sm text-ink-700 dark:text-ink-300">Protein</p>
          <p className="text-2xl font-extrabold">{totals.p}g</p>
          <p className="text-xs text-ink-700/70 dark:text-ink-300/70">/ {targets?.macros?.protein ?? "-"}g</p>
        </div>
        <div className="rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur-sm p-4 ring-1 ring-primary/15 dark:ring-primary/25">
          <p className="text-sm text-ink-700 dark:text-ink-300">Carbs</p>
          <p className="text-2xl font-extrabold">{totals.c}g</p>
          <p className="text-xs text-ink-700/70 dark:text-ink-300/70">/ {targets?.macros?.carbs ?? "-"}g</p>
        </div>
        <div className="rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur-sm p-4 ring-1 ring-primary/15 dark:ring-primary/25">
          <p className="text-sm text-ink-700 dark:text-ink-300">Fat</p>
          <p className="text-2xl font-extrabold">{totals.f}g</p>
          <p className="text-xs text-ink-700/70 dark:text-ink-300/70">/ {targets?.macros?.fat ?? "-"}g</p>
        </div>
      </div>

      {/* Progress bars */}
      <div className="space-y-3">
        <ProgressBar label="Daily Calorie Intake" value={totals.kcal} target={targets?.kcalTarget ?? 0} />
        <ProgressBar label="Protein" value={totals.p} target={targets?.macros?.protein ?? 0} />
        <ProgressBar label="Carbs" value={totals.c} target={targets?.macros?.carbs ?? 0} />
        <ProgressBar label="Fat" value={totals.f} target={targets?.macros?.fat ?? 0} />
      </div>

      {/* Quick add */}
      <div className="rounded-xl p-4 ring-1 ring-primary/15 dark:ring-primary/25 bg-white/70 dark:bg-white/5 backdrop-blur-sm space-y-3">
        <p className="text-sm font-semibold text-background-dark dark:text-background-light">Quick Add</p>
        <div className="grid gap-3 sm:grid-cols-5">
          <input className="rounded-lg bg-white/90 dark:bg-white/10" placeholder="Food name"
                 value={entry.name} onChange={e => setEntry(s => ({ ...s, name: e.target.value }))}/>
          <input type="number" className="rounded-lg bg-white/90 dark:bg-white/10" placeholder="kcal"
                 value={entry.kcal} onChange={e => setEntry(s => ({ ...s, kcal: e.target.value }))}/>
          <input type="number" className="rounded-lg bg-white/90 dark:bg-white/10" placeholder="P (g)"
                 value={entry.p} onChange={e => setEntry(s => ({ ...s, p: e.target.value }))}/>
          <input type="number" className="rounded-lg bg-white/90 dark:bg-white/10" placeholder="C (g)"
                 value={entry.c} onChange={e => setEntry(s => ({ ...s, c: e.target.value }))}/>
          <div className="flex gap-2">
            <input type="number" className="w-full rounded-lg bg-white/90 dark:bg-white/10" placeholder="F (g)"
                   value={entry.f} onChange={e => setEntry(s => ({ ...s, f: e.target.value }))}/>
            <button onClick={addItem}
                    className="rounded-lg bg-primary text-white px-4 font-semibold transition-transform hover:scale-[1.02]">
              Add
            </button>
          </div>
        </div>

        {/* List */}
        <div className="divide-y divide-ink-300/30 dark:divide-white/10">
          {items.map(i => (
            <div key={i.id} className="py-2 flex items-center justify-between text-sm">
              <div className="flex-1">
                <p className="font-semibold">{i.name}</p>
                <p className="text-ink-700 dark:text-ink-300">
                  {i.kcal} kcal • P {i.p || 0}g • C {i.c || 0}g • F {i.f || 0}g
                </p>
              </div>
              <button onClick={() => removeItem(i.id)} className="text-danger hover:opacity-80">Remove</button>
            </div>
          ))}
          {items.length === 0 && <p className="py-2 text-ink-700 dark:text-ink-300">No items yet.</p>}
        </div>
      </div>
    </section>
  );
}
