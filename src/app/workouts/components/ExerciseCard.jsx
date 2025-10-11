"use client";
import { useState } from "react";

const format = (v) => (Array.isArray(v) ? v : v ? [v] : []);
const titlecase = (s = "") =>
  s.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase()).replace(/_/g, " ");

export default function ExerciseCard({ item }) {
  const {
    exerciseId,
    name,
    imageUrl,
    bodyParts = [],
    equipments = [],
    exerciseType,
    targetMuscles = [],
    secondaryMuscles = [],
    keywords = [],
  } = item || {};

  const [showAllKeywords, setShowAllKeywords] = useState(false);
  const shownKeywords = showAllKeywords ? keywords : keywords.slice(0, 6);

  return (
    <article className="group relative overflow-hidden rounded-2xl border bg-white/70 dark:bg-gray-900/60 backdrop-blur shadow-sm hover:shadow-md transition">
      <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={imageUrl || "/placeholder.png"}
          alt={name ? `${name} - exercise preview` : "exercise image"}
          className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.png";
            e.currentTarget.onerror = null;
          }}
        />
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold leading-snug text-gray-900 dark:text-gray-100">
            {(name || "Unnamed Exercise").trim()}
          </h3>
          {exerciseType && (
            <span className="shrink-0 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-200 px-3 py-1 text-xs font-medium">
              {titlecase(exerciseType)}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {format(bodyParts).map((bp) => (
            <span
              key={`bp-${bp}`}
              className="rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200 px-2.5 py-1 text-xs font-medium"
            >
              {titlecase(bp)}
            </span>
          ))}
          {format(equipments).map((eq) => (
            <span
              key={`eq-${eq}`}
              className="rounded-full bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-200 px-2.5 py-1 text-xs font-medium"
            >
              {titlecase(eq)}
            </span>
          ))}
        </div>

        {(targetMuscles.length > 0 || secondaryMuscles.length > 0) && (
          <div className="grid sm:grid-cols-2 gap-2">
            {targetMuscles.length > 0 && (
              <div className="text-sm">
                <span className="font-medium text-gray-700 dark:text-gray-200">Target:</span>{" "}
                <span className="text-gray-600 dark:text-gray-400">
                  {targetMuscles.map(titlecase).join(", ")}
                </span>
              </div>
            )}
            {secondaryMuscles.length > 0 && (
              <div className="text-sm">
                <span className="font-medium text-gray-700 dark:text-gray-200">Secondary:</span>{" "}
                <span className="text-gray-600 dark:text-gray-400">
                  {secondaryMuscles.map(titlecase).join(", ")}
                </span>
              </div>
            )}
          </div>
        )}

        {keywords?.length > 0 && (
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Keywords</span>
              {keywords.length > 6 && (
                <button
                  onClick={() => setShowAllKeywords((s) => !s)}
                  className="text-xs underline decoration-dotted text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  {showAllKeywords ? "Show less" : `Show all (${keywords.length})`}
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {shownKeywords.map((kw, i) => (
                <span
                  key={`kw-${i}`}
                  className="rounded-lg bg-gray-100 dark:bg-gray-800 px-2.5 py-1 text-[11px] text-gray-700 dark:text-gray-300"
                  title={kw}
                >
                  {kw.length > 28 ? kw.slice(0, 28) + "…" : kw}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-gray-400">ID: {exerciseId}</span>
          <a
            href={imageUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-blue-600 hover:text-blue-700 dark:text-blue-300"
          >
            View Image
          </a>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-16 h-24 bg-gradient-to-t from-blue-50/60 dark:from-blue-900/10 blur-2xl opacity-0 group-hover:opacity-100 transition"
      />
    </article>
  );
}
