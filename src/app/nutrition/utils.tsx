'use client';
import { Salad, Beef, Egg, Fish, Apple } from 'lucide-react';

export const activityOptions = [
  { label: 'Sedentary (0–1x/week)', value: 'sedentary', factor: 1.2 },
  { label: 'Light (1–3x/week)', value: 'light', factor: 1.375 },
  { label: 'Moderate (3–5x/week)', value: 'moderate', factor: 1.55 },
  { label: 'Active (6–7x/week)', value: 'active', factor: 1.725 },
  { label: 'Very Active (2x/day)', value: 'very_active', factor: 1.9 },
] as const;

export const factorOf = (v: string) =>
  activityOptions.find(o => o.value === v)?.factor ?? 1.55;

export function FoodIcon({ title, className = 'w-5 h-5' }:{ title: string; className?: string }) {
  const t = title.toLowerCase();
  if (t.includes('broccoli') || t.includes('spinach') || t.includes('salad')) return <Salad className={className} />;
  if (t.includes('chicken') || t.includes('beef') || t.includes('steak')) return <Beef className={className} />;
  if (t.includes('egg')) return <Egg className={className} />;
  if (t.includes('salmon') || t.includes('fish') || t.includes('tuna')) return <Fish className={className} />;
  return <Apple className={className} />;
}
