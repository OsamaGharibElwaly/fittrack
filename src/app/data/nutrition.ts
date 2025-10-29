import type { NutritionData } from '../types/nutrition';

export const nutritionData: NutritionData = {
  categories: [
    {
      id: 'weight-loss',
      name: 'Weight Loss',
      description: 'Low-calorie, nutrient-dense foods for fat loss',
      foods: [
        { id: 'broccoli', title: 'Broccoli', category: 'Vegetable', benefits: ['High in Fiber','Low Calorie','Supports Digestion','Rich in Vitamins'], macros: { kcal: 34, p: 2.8, c: 7, f: 0.4 }, servingSize: '100g' },
        { id: 'chicken-breast', title: 'Chicken Breast', category: 'Protein', benefits: ['Lean Protein','Low Fat','Muscle Repair','Satiating'], macros: { kcal: 165, p: 31, c: 0, f: 3.6 }, servingSize: '100g' },
        { id: 'eggs', title: 'Eggs', category: 'Protein', benefits: ['Complete Protein','Healthy Fats','Vitamin D','Choline'], macros: { kcal: 155, p: 13, c: 1.1, f: 11 }, servingSize: '100g' },
        { id: 'salmon', title: 'Salmon', category: 'Protein', benefits: ['Omega-3 Source','High Protein','Heart Health','Anti-inflammatory'], macros: { kcal: 208, p: 20, c: 0, f: 13 }, servingSize: '100g' },
        { id: 'greek-yogurt', title: 'Greek Yogurt', category: 'Dairy', benefits: ['High Protein','Probiotics','Bone Health','Low Carb'], macros: { kcal: 100, p: 17, c: 6, f: 0.7 }, servingSize: '100g' },
        { id: 'spinach', title: 'Spinach', category: 'Vegetable', benefits: ['Iron-Rich','Low Calorie','Antioxidants','Eye Health'], macros: { kcal: 23, p: 2.9, c: 3.6, f: 0.4 }, servingSize: '100g' }
      ]
    },
    {
      id: 'muscle-gain',
      name: 'Muscle Gain',
      description: 'High-protein, calorie-dense foods for building muscle',
      foods: [
        { id: 'beef-steak', title: 'Beef Steak', category: 'Protein', benefits: ['High Protein','Creatine Source','Iron & B12','Muscle Growth'], macros: { kcal: 271, p: 26, c: 0, f: 19 }, servingSize: '100g' },
        { id: 'sweet-potato', title: 'Sweet Potato', category: 'Carbs', benefits: ['Complex Carbs','Vitamin A','Fiber','Energy Sustained'], macros: { kcal: 86, p: 1.6, c: 20, f: 0.1 }, servingSize: '100g' },
        { id: 'whole-eggs', title: 'Whole Eggs', category: 'Protein', benefits: ['Complete Protein','Healthy Fats','Vitamin D','Brain Health'], macros: { kcal: 155, p: 13, c: 1.1, f: 11 }, servingSize: '100g' },
        { id: 'rice', title: 'Rice', category: 'Carbs', benefits: ['Fast Energy','Gluten-Free','Easy Digest','Post-Workout'], macros: { kcal: 130, p: 2.7, c: 28, f: 0.3 }, servingSize: '100g' },
        { id: 'almonds', title: 'Almonds', category: 'Fats', benefits: ['Healthy Fats','Vitamin E','Magnesium','Snacking'], macros: { kcal: 579, p: 21, c: 22, f: 50 }, servingSize: '100g' },
        { id: 'oats', title: 'Oats', category: 'Carbs', benefits: ['Beta-Glucan','Slow Energy','Heart Health','Satiety'], macros: { kcal: 389, p: 17, c: 66, f: 7 }, servingSize: '100g' }
      ]
    }
  ]
};
