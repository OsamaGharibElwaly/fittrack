export default function AdaptiveAdvice() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-background-dark dark:text-background-light">Adaptive Advice</h2>
      <div
        className="relative flex min-h-[250px] flex-col justify-end overflow-hidden rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            `linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 60%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBDgMyLUW6uZSGH-MCAc4Or02U-h58B4Uh9yMT_AVr0O8nqPGBr4YejOtvo50IUwbqmRAQUZpL_1pUojNI054n9IeKQr29GhcAbXaCRDjToq6O7ItpIXAd4UxltXblMjjLhp9OARqjW8FYmOykUTIwZEsS5utUy5Fd06sn7hI-2NyMf-AE3c3rMsdSJ2LIpErJagJgLqJWnxOvNyUdP0CrgCBlg6HICrcF1cSEPVsERdgj5v6nM75G63-KmEndvsu05UiqGKXVrBrI")`
        }}
      >
        <div className="flex w-full flex-col items-start gap-4 p-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-lg space-y-2">
            <p className="text-2xl font-bold text-white">Focus on Whole Foods Today</p>
            <p className="text-base font-medium text-white/80">
              Prioritize fruits, vegetables, and lean proteins to maximize nutrient intake and support your fitness goals.
            </p>
          </div>
          <button className="shrink-0 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-opacity-90">
            View Meal Ideas
          </button>
        </div>
      </div>
    </section>
  );
}
