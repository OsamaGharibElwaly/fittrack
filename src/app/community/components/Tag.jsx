// -----------------------------------------------------------------------------
// 6) community/components/Tag.jsx — Small blue tag
// -----------------------------------------------------------------------------


// --- filepath: community/components/Tag.jsx
export default function Tag({ label }) {
return (
<span className="rounded-full bg-[#0A66C2]/10 px-2.5 py-1 text-xs font-medium text-[#0A66C2]">
#{label}
</span>
);
}