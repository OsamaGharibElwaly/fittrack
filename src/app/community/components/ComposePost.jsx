// -----------------------------------------------------------------------------
// 8) community/components/ComposePost.jsx — Create post (UI only, no backend)
// -----------------------------------------------------------------------------


// --- filepath: community/components/ComposePost.jsx
"use client";


import { useState } from "react";
import { motion } from "framer-motion";


export default function ComposePost() {
const [open, setOpen] = useState(false);
const [title, setTitle] = useState("");
const [content, setContent] = useState("");


return (
<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
{!open ? (
<button
onClick={() => setOpen(true)}
className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-sm text-slate-500 hover:border-[#0A66C2]"
>
Start a post…
</button>
) : (
<div className="space-y-3">
<input
value={title}
onChange={(e) => setTitle(e.target.value)}
placeholder="Post title"
className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-[#0A66C2]"
/>
<textarea
rows={4}
value={content}
onChange={(e) => setContent(e.target.value)}
placeholder="What do you want to share?"
className="w-full resize-y rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-[#0A66C2]"
/>
<div className="flex items-center justify-end gap-2">
<button onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">Cancel</button>
<motion.button whileTap={{ scale: 0.96 }} className="rounded-lg bg-[#0A66C2] px-4 py-2 text-sm font-medium text-white">
Publish
</motion.button>
</div>
</div>
)}
</div>
);
}