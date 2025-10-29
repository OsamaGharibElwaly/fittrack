export type Macros = { kcal:number; p:number; c:number; f:number };
export type Food = { id:string; title:string; category:string; benefits:string[]; macros:Macros; servingSize:string };
export type Category = { id:string; name:string; description:string; foods: Food[] };
export type NutritionData = { categories: Category[] };
