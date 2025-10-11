// -----------------------------------------------------------------------------
// 5) community/components/ReactionBar.jsx — Like/Helpful counts (UI only)
// -----------------------------------------------------------------------------


// --- filepath: community/components/ReactionBar.jsx
"use client";


import { useState } from "react";
import { motion } from "framer-motion";


export default function ReactionBar({ reactions, compact = false }) {
// Local optimistic UI for demo purposes
const [state, setState] = useState(reactions);


const bump = (key) =>
setState((s) => ({ ...s, [key]: (s[key] || 0) + 1, total: (s.total || 0) + 1 }));


return (
<div className={`flex items-center gap-3 ${compact ? "justify-end" : "justify-between"}`}>
{!compact && (
<div className="text-xs text-slate-500">{state.total} total reactions</div>
)}
<div className="flex items-center gap-2">
<motion.button
whileTap={{ scale: 0.94 }}
onClick={(e) => {
e.preventDefault();
bump("like");
}}
className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 hover:border-[#0A66C2] hover:text-[#0A66C2]"
>
👍 {state.like}
</motion.button>
<motion.button
whileTap={{ scale: 0.94 }}
onClick={(e) => {
e.preventDefault();
bump("helpful");
}}
className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 hover:border-[#0A66C2] hover:text-[#0A66C2]"
>
💡 {state.helpful}
</motion.button>
</div>
</div>
);
}