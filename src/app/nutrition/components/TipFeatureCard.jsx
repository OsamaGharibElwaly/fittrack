export default function TipCard({ title, summary, image, tags = [], goal }) {
  return (
    <article
      className="group overflow-hidden rounded-xl bg-background-light dark:bg-background-dark ring-1 ring-primary/15 dark:ring-primary/25 shadow-soft hover:shadow-hover transition-all duration-500 ease-smooth hover:-translate-y-0.5"
    >
      <div className="flex flex-col gap-4 p-5">
        <div className="flex items-start gap-4">
          <div
            className="w-28 h-20 shrink-0 rounded-lg bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
            style={{ backgroundImage: `url("${image}")` }}
          />
          <div className="space-y-1">
            <h3 className="text-base font-bold text-background-dark dark:text-background-light">
              {title}
            </h3>
            <p className="text-sm text-ink-700 dark:text-ink-300">{summary}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {goal && (
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 dark:bg-primary/20 px-2.5 py-1 text-xs font-semibold text-primary">
              🎯 {goal}
            </span>
          )}
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-ink-300/20 dark:bg-white/10 px-2.5 py-1 text-xs font-medium text-ink-700 dark:text-ink-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-accent opacity-70" />
    </article>
  );
}
