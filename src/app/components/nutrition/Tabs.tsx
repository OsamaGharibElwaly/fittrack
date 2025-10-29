'use client';
import { Trash2 } from 'lucide-react';

export default function Tabs({
  active,
  onChange,
  categories,
  onClearAll,
}: {
  active: string;
  onChange: (name: string) => void;
  categories: { id: string; name: string }[];
  onClearAll: () => void;
}) {
  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto mb-8 flex flex-wrap items-center justify-between gap-4">
      <div className="flex gap-3">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => onChange(cat.name)}
            className={`px-6 py-2.5 rounded-lg font-bold transition-all duration-300 ${
              active === cat.name
                ? 'bg-[#FFA500] text-black'
                : 'bg-[#1A1A1A] text-[#FFA500] border border-[#FFA500] hover:bg-[#FFA500]/10'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
      <button
        onClick={onClearAll}
        className="text-red-400 hover:text-red-300 text-sm font-medium flex items-center gap-1"
      >
        <Trash2 className="w-4 h-4" /> Clear All
      </button>
    </section>
  );
}
