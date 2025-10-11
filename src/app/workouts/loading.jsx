export default function Loading() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded mb-6 animate-pulse" />
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-28 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
        <div className="h-10 w-32 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="rounded-2xl border bg-white/70 dark:bg-gray-900/60 shadow-sm">
            <div className="aspect-[16/9] w-full bg-gray-200 dark:bg-gray-800 animate-pulse rounded-t-2xl" />
            <div className="p-4 space-y-3">
              <div className="h-5 w-2/3 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
              <div className="flex gap-2">
                <div className="h-6 w-20 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" />
                <div className="h-6 w-24 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse" />
              </div>
              <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-800 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
