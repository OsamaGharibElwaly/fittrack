'use client';
import { nutritionData } from '../../data/nutrition';
import { FoodIcon } from '../../nutrition/utils';

export default function FoodsGrid({
  activeTab,
  onAdd
}:{ activeTab: string; onAdd: (foodId: string)=>void; }) {
  const cat = nutritionData.categories.find(c => c.name === activeTab);
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {cat?.foods.map(food => (
        <div
          key={food.id}
          className="group bg-[#1A1A1A] border border-gray-800 rounded-2xl p-5 hover:border-[#FFA500] transition-all duration-300 cursor-pointer"
          onClick={() => onAdd(food.id)}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#FFA500]/20 flex items-center justify-center text-[#FFA500]">
              <FoodIcon title={food.title} />
            </div>
            <div>
              <h4 className="font-bold">{food.title}</h4>
              <span className="text-xs text-gray-500">{food.category} • {food.servingSize}</span>
            </div>
          </div>

          <div className="space-y-1 mb-4 text-sm text-gray-400">
            {food.benefits.slice(0,3).map((b,i)=> (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[#FFA500]">▸</span><span>{b}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-800">
            <span>{food.macros.kcal} kcal</span>
            <span>P {food.macros.p}g</span>
            <span>C {food.macros.c}g</span>
            <span>F {food.macros.f}g</span>
          </div>

          <button className="w-full mt-3 py-2 bg-[#FFA500] text-black font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            Add to Log
          </button>
        </div>
      ))}
    </div>
  );
}
