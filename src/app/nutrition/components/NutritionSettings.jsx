"use client";
import { useEffect, useMemo, useState } from "react";

const ACTIVITY = [
  { key: "sedentary", label: "Sedentary (little/no exercise)", factor: 1.2 },
  { key: "light", label: "Light (1–3x/week)", factor: 1.375 },
  { key: "moderate", label: "Moderate (3–5x/week)", factor: 1.55 },
  { key: "active", label: "Active (6–7x/week)", factor: 1.725 },
  { key: "athlete", label: "Athlete (2x/day)", factor: 1.9 },
];

const GOALS = [
  { key: "loss", label: "Weight Loss", kcalDelta: -400 },
  { key: "maintain", label: "Maintain", kcalDelta: 0 },
  { key: "gain", label: "Muscle Gain", kcalDelta: +300 },
];

export default function NutritionSettings({ onChange }) {
  const [state, setState] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("fit_nutri_settings");
      if (saved) return JSON.parse(saved);
    }
    return {
      age: 28,
      sex: "male", // male | female
      height: 175, // cm
      weight: 75,  // kg
      activity: "moderate",
      goal: "maintain",
      split: { p: 30, c: 40, f: 30 }, // %
    };
  });

  useEffect(() => {
    localStorage.setItem("fit_nutri_settings", JSON.stringify(state));
  }, [state]);

  const bmr = useMemo(() => {
    const { sex, weight, height, age } = state;
    // Mifflin–St Jeor
    const s = sex === "male" ? 5 : -161;
    return Math.round(10 * weight + 6.25 * height - 5 * age + s);
  }, [state]);

  const activityFactor = useMemo(
    () => ACTIVITY.find(a => a.key === state.activity)?.factor ?? 1.55,
    [state.activity]
  );

  const tdee = useMemo(() => Math.round(bmr * activityFactor), [bmr, activityFactor]);

  const kcalTarget = useMemo(() => {
    const delta = GOALS.find(g => g.key === state.goal)?.kcalDelta ?? 0;
    return Math.max(1200, tdee + delta); // حد أدنى بسيط
  }, [tdee, state.goal]);

  const macros = useMemo(() => {
    const { p, c, f } = state.split; // نسب
    // 1g Protein = 4 kcal, 1g Carbs = 4 kcal, 1g Fat = 9 kcal
    const pG = Math.round((kcalTarget * (p / 100)) / 4);
    const cG = Math.round((kcalTarget * (c / 100)) / 4);
    const fG = Math.round((kcalTarget * (f / 100)) / 9);
    return { protein: pG, carbs: cG, fat: fG };
  }, [state.split, kcalTarget]);

  useEffect(() => {
    onChange?.({ kcalTarget, tdee, bmr, split: state.split, macros });
  }, [kcalTarget, tdee, bmr, state.split, macros, onChange]);

  const setSplit = (key, val) => {
    const x = Math.max(0, Math.min(100, Number(val) || 0));
    const next = { ...state.split, [key]: x };
    const total = next.p + next.c + next.f;
    if (total === 100) setState(s => ({ ...s, split: next }));
  };

  return (
    <div className="rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur-sm p-4 ring-1 ring-primary/15 dark:ring-primary/25 space-y-4">
      <h3 className="text-lg font-bold text-background-dark dark:text-background-light">Your Targets</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="space-y-1">
          <span className="text-sm text-ink-700 dark:text-ink-300">Age</span>
          <input type="number" className="w-full rounded-lg border-ink-300/40 bg-white/70 dark:bg-white/10"
                 value={state.age} onChange={e => setState(s => ({ ...s, age: Number(e.target.value) }))}/>
        </label>
        <label className="space-y-1">
          <span className="text-sm text-ink-700 dark:text-ink-300">Sex</span>
          <select className="w-full rounded-lg border-ink-300/40 bg-white/70 dark:bg-white/10"
                  value={state.sex} onChange={e => setState(s => ({ ...s, sex: e.target.value }))}>
            <option value="male">Male</option><option value="female">Female</option>
          </select>
        </label>
        <label className="space-y-1">
          <span className="text-sm text-ink-700 dark:text-ink-300">Height (cm)</span>
          <input type="number" className="w-full rounded-lg border-ink-300/40 bg-white/70 dark:bg-white/10"
                 value={state.height} onChange={e => setState(s => ({ ...s, height: Number(e.target.value) }))}/>
        </label>
        <label className="space-y-1">
          <span className="text-sm text-ink-700 dark:text-ink-300">Weight (kg)</span>
          <input type="number" className="w-full rounded-lg border-ink-300/40 bg-white/70 dark:bg-white/10"
                 value={state.weight} onChange={e => setState(s => ({ ...s, weight: Number(e.target.value) }))}/>
        </label>
        <label className="space-y-1 sm:col-span-2">
          <span className="text-sm text-ink-700 dark:text-ink-300">Activity</span>
          <select className="w-full rounded-lg border-ink-300/40 bg-white/70 dark:bg-white/10"
                  value={state.activity} onChange={e => setState(s => ({ ...s, activity: e.target.value }))}>
            {ACTIVITY.map(a => <option key={a.key} value={a.key}>{a.label}</option>)}
          </select>
        </label>
        <label className="space-y-1">
          <span className="text-sm text-ink-700 dark:text-ink-300">Goal</span>
          <select className="w-full rounded-lg border-ink-300/40 bg-white/70 dark:bg-white/10"
                  value={state.goal} onChange={e => setState(s => ({ ...s, goal: e.target.value }))}>
            {GOALS.map(g => <option key={g.key} value={g.key}>{g.label}</option>)}
          </select>
        </label>

        {/* Macro split (must sum to 100) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-ink-700 dark:text-ink-300">Macro Split (%)</span>
            <span className="text-xs text-ink-700/70 dark:text-ink-300/70">Must = 100%</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs">P</span>
              <input type="number" className="w-full rounded-lg border-ink-300/40 bg-white/70 dark:bg-white/10"
                     value={state.split.p} onChange={e => setSplit("p", e.target.value)} />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs">C</span>
              <input type="number" className="w-full rounded-lg border-ink-300/40 bg-white/70 dark:bg-white/10"
                     value={state.split.c} onChange={e => setSplit("c", e.target.value)} />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs">F</span>
              <input type="number" className="w-full rounded-lg border-ink-300/40 bg-white/70 dark:bg-white/10"
                     value={state.split.f} onChange={e => setSplit("f", e.target.value)} />
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="grid sm:grid-cols-4 gap-3 pt-2">
        <div className="rounded-lg p-3 bg-primary/10 text-primary text-sm font-semibold">BMR: {bmr} kcal</div>
        <div className="rounded-lg p-3 bg-secondary/10 text-secondary text-sm font-semibold">TDEE: {tdee} kcal</div>
        <div className="rounded-lg p-3 bg-accent/10 text-accent text-sm font-semibold">Target: {kcalTarget} kcal</div>
        <div className="rounded-lg p-3 bg-ink-300/20 dark:bg-white/10 text-sm text-ink-700 dark:text-ink-300">
          P {macros.protein}g • C {macros.carbs}g • F {macros.fat}g
        </div>
      </div>
    </div>
  );
}
