'use client';
import * as React from 'react';
import { X, Plus } from 'lucide-react';

export default function Overview({
  daily, grams, targetCals, progressPercent, macroProgress, meals, onRemove, onQuickAdd
}:{
  daily: { kcal:number; p:number; c:number; f:number };
  grams: { p:number; c:number; f:number };
  targetCals: number;
  progressPercent: number;
  macroProgress: { p:number; c:number; f:number };
  meals: any[];
  onRemove: (id: string|number)=>void;
  onQuickAdd: (q:{ name:string; kcal:number; p?:number; c?:number; f?:number })=>void;
}) {
  const [name, setName] = React.useState('');
  const [kcal, setKcal] = React.useState('');
  const [p, setP] = React.useState('');
  const [c, setC] = React.useState('');
  const [f, setF] = React.useState('');

  const addQuick = () => {
    if (!name || !kcal) return;
    onQuickAdd({ name, kcal: Number(kcal)||0, p: Number(p)||0, c: Number(c)||0, f: Number(f)||0 });
    setName(''); setKcal(''); setP(''); setC(''); setF('');
  };

  return (
    <aside className="space-y-6">
      <div className="bg-[#1A1A1A] border border-gray-800 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6">Daily Nutrition Overview</h3>

        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
          <div className="bg-[#2A2A2A] rounded-xl p-4">
            <div className="text-sm text-gray-400 mb-1">Calories</div>
            <div className="text-2xl font-bold text-[#FFA500]">{daily.kcal}</div>
            <div className="text-xs text-gray-500">/ {targetCals}</div>
          </div>
          <div className="bg-[#2A2A2A] rounded-xl p-4 border-x border-gray-700">
            <div className="text-sm text-gray-400 mb-1">Protein</div>
            <div className="text-2xl font-bold text-[#FFA500]">{daily.p}</div>
            <div className="text-xs text-gray-500">/ {grams.p}g</div>
          </div>
          <div className="bg-[#2A2A2A] rounded-xl p-4">
            <div className="text-sm text-gray-400 mb-1">Fat</div>
            <div className="text-2xl font-bold text-[#FFA500]">{daily.f}</div>
            <div className="text-xs text-gray-500">/ {grams.f}g</div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Daily caloric intake</span>
            <span className="text-2xl font-bold">{progressPercent}%</span>
          </div>
          <div className="h-3 bg-[#2A2A2A] rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 rounded-full ${progressPercent > 100 ? 'bg-red-500' : 'bg-[#FFA500]'}`}
              style={{ width: `${Math.min(progressPercent, 100)}%` }}
            />
          </div>
        </div>

        <div className="space-y-3">
          {(['p','c','f'] as const).map(key => (
            <div key={key}>
              <div className="flex justify-between text-xs mb-1">
                <span>{{p:'Protein', c:'Carbs', f:'Fat'}[key]}</span>
                <span>{{p:macroProgress.p, c:macroProgress.c, f:macroProgress.f}[key]}%</span>
              </div>
              <div className="h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#FFA500] transition-all"
                  style={{ width: `${{p:macroProgress.p, c:macroProgress.c, f:macroProgress.f}[key]}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-3 max-h-[300px] overflow-y-auto">
          {meals.length === 0 ? (
            <p className="text-center text-gray-500 py-4">No meals added yet.</p>
          ) : (
            meals.map((meal:any) => (
              <div key={meal.id} className="flex items-center justify-between bg-[#2A2A2A] rounded-lg p-3 group">
                <div className="flex-1">
                  <div className="font-semibold text-sm mb-1">{meal.name}</div>
                  <div className="text-xs text-gray-500">
                    {meal.kcal} kcal · P {meal.p}g · C {meal.c}g · F {meal.f}g
                  </div>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); onRemove(meal.id); }}
                  className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-400 transition-all p-2"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <div id="quick-add" className="bg-[#1A1A1A] border border-gray-800 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4">Quick Add</h3>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Food name"
            value={name}
            onChange={e=>setName(e.target.value)}
            className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#FFA500] focus:outline-none transition-all"
          />
          <div className="grid grid-cols-4 gap-2">
            <input type="number" placeholder="kcal" value={kcal} onChange={e=>setKcal(e.target.value)} className="bg-[#2A2A2A] border border-gray-700 rounded-lg px-3 py-3 text-center text-white placeholder-gray-500 focus:border-[#FFA500] focus:outline-none transition-all" />
            <input type="number" placeholder="P (g)" value={p} onChange={e=>setP(e.target.value)} className="bg-[#2A2A2A] border border-gray-700 rounded-lg px-3 py-3 text-center text-white placeholder-gray-500 focus:border-[#FFA500] focus:outline-none transition-all" />
            <input type="number" placeholder="C (g)" value={c} onChange={e=>setC(e.target.value)} className="bg-[#2A2A2A] border border-gray-700 rounded-lg px-3 py-3 text-center text-white placeholder-gray-500 focus:border-[#FFA500] focus:outline-none transition-all" />
            <input type="number" placeholder="F (g)" value={f} onChange={e=>setF(e.target.value)} className="bg-[#2A2A2A] border border-gray-700 rounded-lg px-3 py-3 text-center text-white placeholder-gray-500 focus:border-[#FFA500] focus:outline-none transition-all" />
          </div>
          <button
            onClick={addQuick}
            disabled={!name || !kcal}
            className="w-full py-3 bg-[#FFA500] text-black font-bold rounded-lg hover:bg-[#FF8C00] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" /> Add Custom Food
          </button>
        </div>
      </div>
    </aside>
  );
}
