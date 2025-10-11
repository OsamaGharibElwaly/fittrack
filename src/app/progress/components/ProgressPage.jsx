"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Lazy load MiniLine (client-only)
const MiniLine = dynamic(() => import("../components/MiniLine"), {
  ssr: false,
  loading: () => <div className="mt-3 h-16 w-full rounded bg-blue-50 animate-pulse" />,
});

// ـــ Mock fetcher (بدّله بنداء API حقيقي) ـــ
async function fetchProgress() {
  // simulate latency
  await new Promise((r) => setTimeout(r, 800));
  return {
    weightSeries: [84, 83.7, 83.5, 83.2, 82.9, 82.7, 82.3],
    strengthSeries: [120, 122.5, 125, 127.5, 130, 132.5, 135],
    bodyFat: 17.8,
    bodyFatDelta: -0.8,
    muscleMass: 39.1,
    muscleDelta: 0.6,
    consistency: 4.1,
    consistencyDeltaPct: 12,
    workoutVolume30d: 1200,
    workoutVolumeChangePct: 15,
    total6m: 3000,
    total6mChangePct: 20,
    prs: [
      { exercise: "Bench Press", weight: "225 lbs", date: "2023-08-15" },
      { exercise: "Squat", weight: "315 lbs", date: "2023-09-20" },
      { exercise: "Deadlift", weight: "405 lbs", date: "2023-10-25" },
      { exercise: "Overhead Press", weight: "135 lbs", date: "2023-11-30" },
      { exercise: "Pull-up", weight: "BW + 45 lbs", date: "2023-12-15" },
    ],
  };
}

// Hook صغير لإدارة اللودينج بدون TypeScript/SWR
import { useEffect, useState } from "react";
function useProgressData() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let mounted = true;
    fetchProgress()
      .then((d) => mounted && setData(d))
      .catch((e) => mounted && setError(e))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);
  return { data, isLoading, error };
}

function KpiSkeleton() {
  return (
    <div className="rounded-xl border border-blue-200 bg-white p-4 shadow animate-pulse">
      <div className="flex items-center justify-between">
        <div className="h-4 w-24 rounded bg-blue-50" />
        <div className="h-4 w-6 rounded bg-blue-50" />
      </div>
      <div className="mt-2 h-8 w-32 rounded bg-blue-100" />
      <div className="mt-3 h-16 w-full rounded bg-blue-50" />
    </div>
  );
}

export default function ProgressPage() {
  const { data, isLoading, error } = useProgressData();

  const weightNow = useMemo(() => (data ? data.weightSeries[data.weightSeries.length - 1] : null), [data]);
  const weightPad = 1;
  const strengthPad = 5;

  if (error) {
    return (
      <div className="p-8">
        <p className="text-red-600 font-semibold">Failed to load progress. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-background-light text-text-primary">
      <Header />

      <main className="flex-1 px-4 py-8 sm:px-6 lg:px-8" aria-busy={isLoading} aria-live="polite">
        <div className="mx-auto max-w-7xl">
          {/* Intro */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold">Progress Tracking</h2>
            <p className="text-text-secondary mt-1">
              Analyze your workout performance, body metrics, goals, and achievements over time.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-primary hover:bg-blue-200">
              <span className="material-symbols-outlined">fitness_center</span> All Exercises
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-text-secondary hover:bg-blue-50">
              <span className="material-symbols-outlined">calendar_month</span> Last 30 Days
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-text-secondary hover:bg-blue-50">
              <span className="material-symbols-outlined">star</span> PRs
            </button>
            <button
              className="ml-auto inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white hover:opacity-90 shadow"
              onClick={() => alert("Hook this to your backend to download a PDF summary.")}
            >
              <span className="material-symbols-outlined">download</span> Download Report (PDF)
            </button>
          </div>

          {/* KPI cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
            {/* Current Weight */}
            {isLoading ? (
              <KpiSkeleton />
            ) : (
              <div className="rounded-xl border border-blue-200 bg-white p-4 shadow">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-text-secondary">Current Weight</p>
                  <span className="material-symbols-outlined text-success">trending_down</span>
                </div>
                <p className="mt-1 text-3xl font-bold">
                  {weightNow} <span className="text-base font-medium text-text-secondary">kg</span>
                </p>
                <p className="text-xs mt-1 text-success font-medium">-1.7kg this month</p>
                <div className="text-blue-500">
                  <MiniLine series={data.weightSeries} pad={weightPad} gradId="gradWeight" />
                </div>
              </div>
            )}

            {/* Body Fat */}
            {isLoading ? (
              <KpiSkeleton />
            ) : (
              <div className="rounded-xl border border-blue-200 bg-white p-4 shadow">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-text-secondary">Body Fat %</p>
                  <span className="material-symbols-outlined text-success">south</span>
                </div>
                <p className="mt-1 text-3xl font-bold">
                  {data.bodyFat}
                  <span className="text-base font-medium text-text-secondary">%</span>
                </p>
                <p className="text-xs mt-1 text-success font-medium">
                  {data.bodyFatDelta > 0 ? "+" : ""}
                  {data.bodyFatDelta}% this month
                </p>
                <div className="mt-3 h-2 w-full rounded-full bg-blue-100" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={65}>
                  <div className="h-2 rounded-full bg-primary" style={{ width: "65%" }} />
                </div>
              </div>
            )}

            {/* Muscle Mass */}
            {isLoading ? (
              <KpiSkeleton />
            ) : (
              <div className="rounded-xl border border-blue-200 bg-white p-4 shadow">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-text-secondary">Muscle Mass</p>
                  <span className="material-symbols-outlined text-success">north_east</span>
                </div>
                <p className="mt-1 text-3xl font-bold">
                  {data.muscleMass} <span className="text-base font-medium text-text-secondary">kg</span>
                </p>
                <p className="text-xs mt-1 text-success font-medium">
                  {data.muscleDelta > 0 ? "+" : ""}
                  {data.muscleDelta}kg this month
                </p>
                <div className="text-blue-500">
                  <MiniLine series={data.strengthSeries} pad={strengthPad} gradId="gradStrength" />
                </div>
              </div>
            )}

            {/* Consistency */}
            {isLoading ? (
              <KpiSkeleton />
            ) : (
              <div className="rounded-xl border border-blue-200 bg-white p-4 shadow">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-text-secondary">Consistency</p>
                  <span className="material-symbols-outlined text-warning">schedule</span>
                </div>
                <p className="mt-1 text-3xl font-bold">
                  {data.consistency} <span className="text-base font-medium text-text-secondary">/ 5 sessions</span>
                </p>
                <p className="text-xs mt-1 font-medium text-success">
                  {data.consistencyDeltaPct > 0 ? "+" : ""}
                  {data.consistencyDeltaPct}% vs last month
                </p>
                <div className="mt-3 grid grid-cols-5 gap-1">
                  <div className="h-2 rounded-full bg-primary" />
                  <div className="h-2 rounded-full bg-primary" />
                  <div className="h-2 rounded-full bg-primary" />
                  <div className="h-2 rounded-full bg-primary" />
                  <div className="h-2 rounded-full bg-blue-100" />
                </div>
              </div>
            )}
          </section>

          {/* Charts (Placeholder أثناء اللود) */}
          <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {isLoading ? (
              <>
                <div className="rounded-xl border border-blue-200 bg-white p-6 shadow">
                  <div className="h-5 w-48 rounded bg-blue-50 animate-pulse" />
                  <div className="mt-6 h-48 w-full rounded bg-blue-50 animate-pulse" />
                </div>
                <div className="rounded-xl border border-blue-200 bg-white p-6 shadow">
                  <div className="h-5 w-48 rounded bg-blue-50 animate-pulse" />
                  <div className="mt-6 h-48 w-full rounded bg-blue-50 animate-pulse" />
                </div>
              </>
            ) : (
              <>
                <div className="rounded-xl border border-blue-200 bg-white p-6 shadow">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Workout Volume</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-primary">Last 30 Days</span>
                  </div>
                  <p className="text-4xl font-bold mt-2">
                    {data.workoutVolume30d.toLocaleString()}{" "}
                    <span className="text-base font-medium text-text-secondary">kg total</span>
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <p className="text-sm text-text-secondary">All lifts</p>
                    <p className="text-sm font-medium text-success">
                      {data.workoutVolumeChangePct > 0 ? "+" : ""}
                      {data.workoutVolumeChangePct}%
                    </p>
                  </div>
                  <div className="mt-6 h-48">
                    {/* استبدل بـ مكتبة شارتس Lazy لما تحب */}
                    <div className="h-full w-full rounded bg-blue-50" />
                  </div>
                </div>

                <div className="rounded-xl border border-blue-200 bg-white p-6 shadow">
                  <h3 className="text-lg font-semibold">Progress Over Time</h3>
                  <p className="text-4xl font-bold mt-2">
                    {data.total6m.toLocaleString()}{" "}
                    <span className="text-base font-medium text-text-secondary">kg</span>
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <p className="text-sm text-text-secondary">Last 6 Months</p>
                    <p className="text-sm font-medium text-success">
                      {data.total6mChangePct > 0 ? "+" : ""}
                      {data.total6mChangePct}%
                    </p>
                  </div>
                  <div className="mt-6 grid h-48 grid-flow-col items-end gap-4 px-2">
                    {["Jan","Feb","Mar","Apr","May","Jun"].map((m, idx) => (
                      <div key={m} className="flex h-full flex-col justify-end items-center gap-2">
                        <div className={`w-full rounded ${idx === 2 ? "bg-primary" : "bg-blue-100"}`} style={{ height: `${[70,90,50,70,10,70][idx]}%` }} />
                        <p className={`text-xs font-bold ${idx === 2 ? "text-primary" : "text-text-secondary"}`}>{m}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </section>

          {/* Personal Records */}
          <section className="mt-10">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Personal Records</h3>
              <div className="flex items-center gap-2">
                <button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-text-secondary hover:bg-blue-50 border border-blue-200">
                  <span className="material-symbols-outlined">filter_alt</span> Filter
                </button>
                <button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-text-secondary hover:bg-blue-50 border border-blue-200">
                  <span className="material-symbols-outlined">upload_file</span> Import
                </button>
              </div>
            </div>

            <div className="mt-4 overflow-x-auto">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden rounded-xl border border-blue-200 bg-white shadow">
                  {isLoading ? (
                    <div className="p-6 animate-pulse">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="flex items-center gap-6 border-t first:border-t-0 border-blue-100 py-3 px-6">
                          <div className="h-4 w-40 rounded bg-blue-50" />
                          <div className="h-4 w-24 rounded bg-blue-50" />
                          <div className="h-4 w-28 rounded bg-blue-50" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <table className="min-w-full divide-y divide-blue-200">
                      <thead className="bg-blue-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">Exercise</th>
                          <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">Weight</th>
                          <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-blue-200">
                        {data.prs.map((r) => (
                          <tr key={r.exercise} className="hover:bg-blue-50/40">
                            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">{r.exercise}</td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary">{r.weight}</td>
                            <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary">{r.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  );
}
