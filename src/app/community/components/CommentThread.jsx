"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UserBadge from "@/community/components/UserBadge";
import timeAgo from "@/community/utils/timeAgo";


export default function CommentThread({ comments = [], users = {} }) {
const [list, setList] = useState(
comments.sort((a, b) => a.createdAt - b.createdAt) // oldest first
);
const [text, setText] = useState("");


const addComment = () => {
if (!text.trim()) return;
// Fake add using first user (u1) for demo
setList((prev) => [
...prev,
{
id: `temp-${Date.now()}`,
postId: comments[0]?.postId ?? 0,
authorId: "u1",
content: text.trim(),
createdAt: Date.now(),
upvotes: 0,
},
]);
setText("");
};


return (
<div className="mt-4">
<div className="rounded-2xl border border-slate-200 bg-white">
<div className="divide-y divide-slate-100">
<AnimatePresence initial={false}>
{list.map((c) => (
<motion.div
key={c.id}
initial={{ opacity: 0, y: 6 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -6 }}
transition={{ duration: 0.2 }}
className="p-4"
>
<div className="flex items-start justify-between gap-4">
<UserBadge user={users[c.authorId]} />
<div className="shrink-0 text-xs text-slate-400">{timeAgo(c.createdAt)}</div>
</div>
<p className="mt-2 text-sm leading-6 text-slate-700">{c.content}</p>
<div className="mt-2 flex items-center gap-3">
<button className="rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-600 hover:border-[#0A66C2] hover:text-[#0A66C2]">
Upvote {c.upvotes}
</button>
<button className="rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-600 hover:border-[#0A66C2] hover:text-[#0A66C2]">
Reply
</button>
</div>
</motion.div>
))}
</AnimatePresence>
</div>


{/* Composer */}
<div className="flex items-center gap-3 p-4">
<input
value={text}
onChange={(e) => setText(e.target.value)}
placeholder="Write a comment..."
className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-[#0A66C2]"
/>
<motion.button
whileTap={{ scale: 0.96 }}
onClick={addComment}
className="rounded-xl bg-[#0A66C2] px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-95"
>
Comment
</motion.button>
</div>
</div>
</div>
);
}