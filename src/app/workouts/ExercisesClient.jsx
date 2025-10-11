"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import ExerciseCard from "./components/ExerciseCard";
import { GridSkeleton } from "./components/Skeletons";

const LIMIT = 18;

export default function ExercisesClient() {
  const [items, setItems] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bootLoading, setBootLoading] = useState(true);
  const [error, setError] = useState(null);

  // فلاتر بسيطة (اختياري — لو مش محتاجها خليك سايبها)
  const [q, setQ] = useState("");
  const [bodyPart, setBodyPart] = useState("");
  const [equipment, setEquipment] = useState("");

  const mountedRef = useRef(true);
  useEffect(() => () => { mountedRef.current = false; }, []);

  const load = useCallback(async (params = {}, append = true) => {
    try {
      if (!append) setItems([]);
      setLoading(true);
      setError(null);

      const url = new URL("/api/exercises", window.location.origin);
      const effective = {
  limit: LIMIT,
  cursor: params.cursor ?? (append ? nextCursor : null),
  q: params.q ?? q ?? "",
  bodyPart: params.bodyPart ?? bodyPart ?? "",
  equipment: params.equipment ?? equipment ?? "",
};

Object.entries(effective).forEach(([k, v]) => {
  if (v !== null && v !== undefined && v !== "") {
    url.searchParams.set(k, v);
  }
});


      const res = await fetch(url.toString(), { cache: "no-store" });
      const json = await res.json();

      if (!res.ok || json.error) throw new Error(json.error || `Request failed ${res.status}`);

      const newItems = json.data || [];
      if (!mountedRef.current) return;

      setItems(prev => (append ? [...prev, ...newItems] : newItems));
      setNextCursor(json.meta?.nextCursor ?? null);
    } catch (e) {
      if (mountedRef.current) setError(e?.message || "Something went wrong");
    } finally {
      if (mountedRef.current) {
        setLoading(false);
        setBootLoading(false);
      }
    }
  }, [q, bodyPart, equipment, nextCursor]);

  // أول تحميل
  useEffect(() => { load({}, false); }, []); // eslint-disable-line

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-primary">Exercises Library</h1>

      {/* شريط أدوات بسيط (اختياري) */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by name…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-full sm:w-72 px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          value={bodyPart}
          onChange={(e) => setBodyPart(e.target.value)}
          className="px-3 py-2 border rounded-lg"
        >
          <option value="">All body parts</option>
          <option value="Chest">Chest</option>
          <option value="Waist">Waist</option>
          <option value="Shoulders">Shoulders</option>
          <option value="Upper%20Arms">Upper Arms</option>
        </select>
        <select
          value={equipment}
          onChange={(e) => setEquipment(e.target.value)}
          className="px-3 py-2 border rounded-lg"
        >
          <option value="">All equipment</option>
          <option value="Body%20Weight">Body Weight</option>
          <option value="Barbell">Barbell</option>
          <option value="Dumbbell">Dumbbell</option>
        </select>
        <button
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
          onClick={() => { setQ(""); setBodyPart(""); setEquipment(""); }}
        >
          Reset
        </button>
      </div>

      {/* حالات التحميل الأولى */}
      {bootLoading && <GridSkeleton count={9} />}

      {/* أخطاء */}
      {error && !bootLoading && (
        <div className="p-4 rounded-lg border border-red-200 bg-red-50 text-red-700 mb-4">
          {error}
        </div>
      )}

      {/* الشبكة */}
      {!bootLoading && (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((ex) => (
              <ExerciseCard key={ex.exerciseId} item={ex} />
            ))}
          </div>

          {/* أزرار التحكم */}
          <div className="flex items-center gap-3 mt-6">
            <button
              className="px-4 py-2 bg-primary text-white rounded-lg shadow hover:bg-blue-600 transition disabled:opacity-60"
              disabled={loading}
              onClick={() => load({ cursor: null }, false)}
            >
              {loading ? "Loading…" : "Reload"}
            </button>

            {nextCursor && (
              <button
                className="px-4 py-2 bg-gray-200 rounded-lg shadow hover:bg-gray-300 transition disabled:opacity-60"
                disabled={loading}
                onClick={() => load({ cursor: nextCursor }, true)}
              >
                {loading ? "Loading…" : "Load More"}
              </button>
            )}
          </div>

          {/* Skeleton خفيف أثناء تحميل المزيد */}
          {loading && items.length > 0 && <div className="mt-6"><GridSkeleton count={3} /></div>}

          {!loading && !error && items.length === 0 && (
            <p className="text-gray-400 mt-4">No exercises found.</p>
          )}
        </>
      )}
    </div>
  );
}
