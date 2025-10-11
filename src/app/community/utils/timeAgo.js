// --- filepath: community/utils/timeAgo.js
export default function timeAgo(timestamp) {
// Very small time-ago function for UI only (no i18n)
const diff = Math.floor((Date.now() - timestamp) / 1000);
if (diff < 60) return `${diff}s ago`;
const m = Math.floor(diff / 60);
if (m < 60) return `${m}m ago`;
const h = Math.floor(m / 60);
if (h < 24) return `${h}h ago`;
const d = Math.floor(h / 24);
return `${d}d ago`;
}