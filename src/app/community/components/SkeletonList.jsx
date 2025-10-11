// -----------------------------------------------------------------------------
// 10) community/components/SkeletonList.jsx — Loading placeholders
// -----------------------------------------------------------------------------


// --- filepath: community/components/SkeletonList.jsx
function SkeletonCard() {
return (
<div className="animate-pulse rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200" />
<div className="flex-1">
<div className="h-3 w-40 rounded bg-slate-200" />
<div className="mt-2 h-3 w-24 rounded bg-slate-200" />
</div>
<div className="h-3 w-12 rounded bg-slate-200" />
</div>
<div className="mt-4 h-4 w-3/4 rounded bg-slate-200" />
<div className="mt-2 h-4 w-2/3 rounded bg-slate-200" />
<div className="mt-4 flex gap-2">
<div className="h-6 w-16 rounded-full bg-slate-200" />
<div className="h-6 w-16 rounded-full bg-slate-200" />
</div>
</div>
);
}


export default function SkeletonList() {
return (
<div className="mt-6 grid gap-4">
{Array.from({ length: 4 }).map((_, i) => (
<SkeletonCard key={i} />
))}
</div>
);
}