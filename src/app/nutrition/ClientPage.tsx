'use client';
import * as React from 'react';
import { useMemo, useEffect } from 'react';
import Tabs from '../components/nutrition/Tabs';
import ProfileForm from '../components/nutrition/ProfileForm';
import FoodsGrid from '../components/nutrition/FoodsGrid';
import Overview from '../components/nutrition/Overview';
import { nutritionData } from '../data/nutrition';
import { factorOf } from './utils';

export default function ClientPage() {
  const [isEditing, setIsEditing] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('Weight Loss');
  const [form, setForm] = React.useState({
    age: 28, sex: 'male', height: 175, weight: 75,
    activity: 'moderate', goal: 'maintain',
    macroP: 30, macroC: 40, macroF: 30
  });
  const [meals, setMeals] = React.useState<any[]>([]);

  // load from localStorage
  useEffect(() => {
    const savedForm = localStorage.getItem('nutrition_form');
    const savedMeals = localStorage.getItem('nutrition_meals');
    if (savedForm) setForm(JSON.parse(savedForm));
    if (savedMeals) setMeals(JSON.parse(savedMeals));
  }, []);
  // save to localStorage
  useEffect(() => { localStorage.setItem('nutrition_form', JSON.stringify(form)); }, [form]);
  useEffect(() => { localStorage.setItem('nutrition_meals', JSON.stringify(meals)); }, [meals]);

  // auto-fix macro sum to 100
  useEffect(() => {
    const sum = form.macroP + form.macroC + form.macroF;
    if (sum !== 100 && sum > 0) {
      const diff = 100 - sum;
      const largest = Math.max(form.macroP, form.macroC, form.macroF);
      setForm(p => ({
        ...p,
        macroP: largest === form.macroP ? form.macroP + diff : form.macroP,
        macroC: largest === form.macroC ? form.macroC + diff : form.macroC,
        macroF: largest === form.macroF ? form.macroF + diff : form.macroF,
      }));
    }
  }, [form.macroP, form.macroC, form.macroF]);

  // targets
  const { bmr, tdee, targetCals, grams } = useMemo(() => {
    const b = form.sex === 'male'
      ? 10 * form.weight + 6.25 * form.height - 5 * form.age + 5
      : 10 * form.weight + 6.25 * form.height - 5 * form.age - 161;
    const t = b * factorOf(form.activity);
    const adj = form.goal === 'cut' ? -0.2 : form.goal === 'bulk' ? 0.15 : 0;
    const target = Math.round(t * (1 + adj));
    return {
      bmr: Math.round(b),
      tdee: Math.round(t),
      targetCals: target,
      grams: {
        p: Math.round((form.macroP / 100) * target / 4),
        c: Math.round((form.macroC / 100) * target / 4),
        f: Math.round((form.macroF / 100) * target / 9),
      },
    };
  }, [form]);

  // daily totals
  const daily = useMemo(() => meals.reduce((acc, m) => ({
    kcal: acc.kcal + m.kcal, p: acc.p + m.p, c: acc.c + m.c, f: acc.f + m.f,
  }), { kcal: 0, p: 0, c: 0, f: 0 }), [meals]);

  const progressPercent = Math.min(Math.round((daily.kcal / targetCals) * 100), 100);
  const macroProgress = useMemo(() => ({
    p: Math.min(Math.round((daily.p / grams.p) * 100), 100),
    c: Math.min(Math.round((daily.c / grams.c) * 100), 100),
    f: Math.min(Math.round((daily.f / grams.f) * 100), 100),
  }), [daily, grams]);

  // handlers
  const onAddFood = (foodId: string) => {
    const food = nutritionData.categories.flatMap(c => c.foods).find(f => f.id === foodId);
    if (!food) return;
    setMeals(prev => [...prev, {
      id: Date.now(),
      name: food.title,
      kcal: food.macros.kcal, p: food.macros.p, c: food.macros.c, f: food.macros.f,
      category: activeTab
    }]);
  };
  const onRemoveMeal = (id: string | number) =>
    setMeals(prev => prev.filter(m => m.id !== id));
  const onClearAll = () => { if (confirm('Are you sure you want to clear all meals?')) setMeals([]); };
  const onAddQuick = (q: { name: string; kcal: number; p?: number; c?: number; f?: number }) =>
    setMeals(prev => [...prev, {
      id: Date.now(), name: q.name, kcal: q.kcal,
      p: q.p || 0, c: q.c || 0, f: q.f || 0, category: 'Custom'
    }]);

  return (
    <>
      {/* HERO + TITLE */}
      <section className="relative w-full h-[320px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#0A0A0A]" />
        <img
          src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=400&fit=crop"
          alt="Healthy foods"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
            <span className="text-white">TRACK</span><br />
            <span className="text-white">YOUR</span>
            <span className="text-[#FFA500] ml-3">MEALS</span>
          </h1>
          <a
            href="#quick-add"
            className="mt-6 bg-[#FFA500] text-black font-bold px-8 py-3 rounded-lg hover:bg-[#FF8C00] transition-all duration-300 hover:scale-105 shadow-lg"
          >
            START TRACKING
          </a>
        </div>
      </section>

      <section className="px-4 md:px-8 max-w-7xl mx-auto py-12 text-center">
        <h2 className="text-5xl md:text-6xl font-black text-[#FFA500] mb-3">Nutrition</h2>
        <p className="text-lg text-gray-400">Set your targets, log foods, and track progress.</p>
      </section>

      <ProfileForm
        form={form}
        setForm={setForm}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        targets={{ bmr, tdee, targetCals, grams }}
      />

      <Tabs
        active={activeTab}
        onChange={setActiveTab}
        categories={nutritionData.categories}
        onClearAll={onClearAll}
      />

      <section className="px-4 md:px-8 max-w-7xl mx-auto grid lg:grid-cols-[1fr_450px] gap-8">
        <FoodsGrid activeTab={activeTab} onAdd={onAddFood} />
        <Overview
          daily={daily}
          grams={grams}
          targetCals={targetCals}
          progressPercent={progressPercent}
          macroProgress={macroProgress}
          meals={meals}
          onRemove={onRemoveMeal}
          onQuickAdd={onAddQuick}
        />
      </section>
    </>
  );
}
