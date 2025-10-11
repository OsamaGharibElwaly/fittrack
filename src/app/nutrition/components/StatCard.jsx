export function StatCard({ label, value, target, className }) {
  return (
    <div className={`rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur-sm p-4 ring-1 ring-primary/15 dark:ring-primary/25 shadow-soft transition-all duration-300 hover:shadow-hover ${className ?? ""}`}>
      <p className="text-sm font-medium text-ink-700 dark:text-ink-300">{label}</p>
      <p className="text-2xl font-extrabold text-background-dark dark:text-background-light">{value}</p>
      {target && <p className="text-xs text-ink-700/70 dark:text-ink-300/70">/ {target}</p>}
    </div>
  );
}
