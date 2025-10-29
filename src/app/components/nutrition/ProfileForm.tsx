'use client';
import { NotebookPen } from 'lucide-react';
import { activityOptions } from '../../nutrition/utils';

export default function ProfileForm({
  form, setForm, isEditing, setIsEditing, targets
}:{
  form: any;
  setForm: (u: any) => void;
  isEditing: boolean;
  setIsEditing: (b:boolean)=>void;
  targets: { bmr:number; tdee:number; targetCals:number; grams:{p:number;c:number;f:number} };
}) {
  const update = (k: string, v: any) => setForm((p:any) => ({ ...p, [k]: v }));
  const { bmr, tdee, targetCals, grams } = targets;

  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto mb-10">
      <div className="rounded-3xl border-2 border-[#FFA500] p-6 md:p-8 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFA500]/5 rounded-full blur-3xl" />
        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#FFA500]/20 flex items-center justify-center">
                <NotebookPen className="w-6 h-6 text-[#FFA500]" />
              </div>
              <h3 className="text-xl font-bold">Your Profile</h3>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#FFA500] text-[#FFA500] hover:bg-[#FFA500] hover:text-black transition-all duration-300"
            >
              <NotebookPen className="w-4 h-4" />
              {isEditing ? 'Done' : 'Edit'}
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Age</label>
                  <input
                    type="number"
                    value={form.age}
                    onChange={(e) => update('age', Number(e.target.value))}
                    disabled={!isEditing}
                    className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-3 text-white disabled:opacity-50 focus:border-[#FFA500] focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Sex</label>
                  <select
                    value={form.sex}
                    onChange={(e) => update('sex', e.target.value)}
                    disabled={!isEditing}
                    className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-3 text-white disabled:opacity-50 focus:border-[#FFA500] focus:outline-none transition-all"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Height (cm)</label>
                  <input
                    type="number"
                    value={form.height}
                    onChange={(e) => update('height', Number(e.target.value))}
                    disabled={!isEditing}
                    className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-3 text-white disabled:opacity-50 focus:border-[#FFA500] focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Weight (kg)</label>
                  <input
                    type="number"
                    value={form.weight}
                    onChange={(e) => update('weight', Number(e.target.value))}
                    disabled={!isEditing}
                    className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-3 text-white disabled:opacity-50 focus:border-[#FFA500] focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Activity</label>
                <select
                  value={form.activity}
                  onChange={(e) => update('activity', e.target.value)}
                  disabled={!isEditing}
                  className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-3 text-white disabled:opacity-50 focus:border-[#FFA500] focus:outline-none transition-all"
                >
                  {activityOptions.map(o => (
                    <option key={o.value as string} value={o.value as string}>{o.label}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Goal</label>
                  <select
                    value={form.goal}
                    onChange={(e) => update('goal', e.target.value)}
                    disabled={!isEditing}
                    className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-3 text-white disabled:opacity-50 focus:border-[#FFA500] focus:outline-none transition-all"
                  >
                    <option value="maintain">Maintain</option>
                    <option value="cut">Cut (-20%)</option>
                    <option value="bulk">Bulk (+15%)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Macro Split (%)</label>
                  <div className="grid grid-cols-3 gap-2">
                    <input
                      type="number"
                      value={form.macroP}
                      onChange={(e) => update('macroP', Math.max(0, Math.min(100, Number(e.target.value))))}
                      disabled={!isEditing}
                      placeholder="P"
                      className="bg-[#2A2A2A] border border-gray-700 rounded-lg px-2 py-3 text-center text-white disabled:opacity-50 focus:border-[#FFA500] focus:outline-none transition-all"
                    />
                    <input
                      type="number"
                      value={form.macroC}
                      onChange={(e) => update('macroC', Math.max(0, Math.min(100, Number(e.target.value))))}
                      disabled={!isEditing}
                      placeholder="C"
                      className="bg-[#2A2A2A] border border-gray-700 rounded-lg px-2 py-3 text-center text-white disabled:opacity-50 focus:border-[#FFA500] focus:outline-none transition-all"
                    />
                    <input
                      type="number"
                      value={form.macroF}
                      onChange={(e) => update('macroF', Math.max(0, Math.min(100, Number(e.target.value))))}
                      disabled={!isEditing}
                      placeholder="F"
                      className="bg-[#2A2A2A] border border-gray-700 rounded-lg px-2 py-3 text-center text-white disabled:opacity-50 focus:border-[#FFA500] focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4">
              <div className="bg-[#2A2A2A] rounded-2xl p-6 border border-gray-800">
                <div className="text-sm text-gray-400 mb-1">BMR: <span className="text-white font-bold">{bmr}</span> kcal</div>
                <div className="text-sm text-gray-400 mb-4">TDEE: <span className="text-white font-bold">{tdee}</span> kcal</div>
                <div className="text-center">
                  <div className="text-lg font-bold text-[#FFA500] mb-1">Target: {targetCals} kcal</div>
                  <div className="text-xs text-gray-500">P {grams.p}g · C {grams.c}g · F {grams.f}g</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
