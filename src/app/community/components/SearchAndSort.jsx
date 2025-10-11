// -----------------------------------------------------------------------------
// 9) community/components/SearchAndSort.jsx — Search input + sort dropdown
// -----------------------------------------------------------------------------


// --- filepath: community/components/SearchAndSort.jsx
"use client";


import { useEffect } from "react";


export default function SearchAndSort({ query, onQuery, sortBy, onSort, onLoading }) {
// Simulate loading just to show skeletons when changing sort
useEffect(() => {
onLoading?.(true);
const t = setTimeout(() => onLoading?.(false), 350);
return () => clearTimeout(t);
}, [sortBy]);


return (
<div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
<input
value={query}
onChange={(e) => onQuery(e.target.value)}
placeholder="Search posts, users, tags…"
className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-[#0A66C2] sm:w-64"
/>
<select
value={sortBy}
onChange={(e) => onSort(e.target.value)}
className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm focus:border-[#0A66C2]"
>
<option value="trending">Trending</option>
<option value="new">Newest</option>
<option value="top">Top</option>
</select>
</div>
);
}