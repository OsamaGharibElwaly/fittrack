// --- filepath: community/components/UserBadge.jsx
import Image from "next/image";


export default function UserBadge({ user }) {
return (
<div className="flex items-center gap-3">
{/* Note: Using next/image for performance. */}
<div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-[#0A66C2]/10">
{/* Using unoptimized for external SVG (Dicebear) to avoid domain config for now. */}
<Image src={user.avatar} alt={user.name} fill sizes="40px" unoptimized />
</div>
<div className="leading-tight">
<div className="font-medium text-slate-8 00">{user.name}</div>
<div className="text-xs text-slate-500">{user.role}</div>
</div>
</div>
);
}