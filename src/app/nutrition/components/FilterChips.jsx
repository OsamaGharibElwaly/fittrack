"use client";

const filters = [
  { key: "All", color: "bg-primary text-white" },
  { key: "Weight Loss", color: "bg-accent text-white" },
  { key: "Muscle Gain", color: "bg-secondary text-white" },
];

export default function FilterChips({ active = "All", onChange }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {filters.map(({ key, color }) => {
        const isActive = key === active;
        return (
          <button
            key={key}
            onClick={() => onChange?.(key)}
            className={[
              "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ease-smooth",
              "ring-1 ring-primary/20 dark:ring-primary/30 shadow-soft hover:shadow-hover",
              isActive
                ? `${color} hover:opacity-90 scale-[1.02]`
                : "bg-background-light dark:bg-background-dark text-ink-700 dark:text-ink-300 hover:bg-white/60 dark:hover:bg-white/5 hover:scale-[1.02]"
            ].join(" ")}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
