"use client";
import { memo, useMemo } from "react";

function MiniLine({ series, width = 240, height = 60, pad = 0, gradId = "miniGrad" }) {
  const paths = useMemo(() => {
    const w = width, h = height, n = series?.length || 0;
    if (!n) return { dLine: "", dFill: "" };
    const minY = Math.min(...series) - pad;
    const maxY = Math.max(...series) + pad;
    const step = n > 1 ? w / (n - 1) : w;
    const mapY = (v) => h - ((v - minY) / (maxY - minY || 1)) * h;

    let d = "";
    series.forEach((v, i) => {
      const x = i * step;
      const y = mapY(v);
      d += `${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)} `;
    });
    return { dLine: d.trim(), dFill: `${d} L ${w} ${h} L 0 ${h} Z` };
  }, [series, width, height, pad]);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="mt-3 w-full h-16" aria-hidden>
      <defs>
        <linearGradient id={gradId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopOpacity="0.35" />
          <stop offset="100%" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={paths.dFill} fill={`url(#${gradId})`} />
      <path d={paths.dLine} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default memo(MiniLine);
