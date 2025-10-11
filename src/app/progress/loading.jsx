export default function Loading() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background-light text-text-primary">
      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl animate-pulse">
          <div className="mb-6">
            <div className="h-8 w-56 rounded bg-blue-100" />
            <div className="mt-2 h-4 w-80 rounded bg-blue-50" />
          </div>

          <div className="mb-8 flex flex-wrap items-center gap-2">
            <div className="h-8 w-32 rounded-full bg-blue-50" />
            <div className="h-8 w-32 rounded-full bg-blue-50" />
            <div className="h-8 w-24 rounded-full bg-blue-50" />
            <div className="ml-auto h-8 w-48 rounded-full bg-blue-100" />
          </div>

          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="rounded-xl border border-blue-200 bg-white p-4 shadow">
                <div className="flex items-center justify-between">
                  <div className="h-4 w-24 rounded bg-blue-50" />
                  <div className="h-4 w-6 rounded bg-blue-50" />
                </div>
                <div className="mt-2 h-8 w-32 rounded bg-blue-100" />
                <div className="mt-3 h-16 w-full rounded bg-blue-50" />
              </div>
            ))}
          </section>

          <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="rounded-xl border border-blue-200 bg-white p-6 shadow">
                <div className="h-5 w-48 rounded bg-blue-50" />
                <div className="mt-6 h-48 w-full rounded bg-blue-50" />
              </div>
            ))}
          </section>

          <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-xl border border-blue-200 bg-white p-6 shadow">
              <div className="h-5 w-40 rounded bg-blue-50" />
              <div className="mt-4 space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="h-4 w-48 rounded bg-blue-50" />
                      <div className="h-4 w-10 rounded bg-blue-50" />
                    </div>
                    <div className="h-2 w-full rounded bg-blue-50" />
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-blue-200 bg-white p-6 shadow">
              <div className="h-5 w-48 rounded bg-blue-50" />
              <div className="mt-4 space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="h-5 w-5 rounded bg-blue-50" />
                    <div className="h-4 w-64 rounded bg-blue-50" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-10">
            <div className="flex items-center justify-between">
              <div className="h-7 w-48 rounded bg-blue-50" />
              <div className="h-8 w-40 rounded-full bg-blue-50" />
            </div>
            <div className="mt-4 rounded-xl border border-blue-200 bg-white shadow">
              <div className="h-10 w-full bg-blue-50" />
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-12 w-full border-t border-blue-100 bg-white" />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
