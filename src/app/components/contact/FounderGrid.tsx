"use client";
import FounderCard from "./FounderCard";
import { founders } from "./founders";

export default function FoundersGrid() {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      {founders.map((f) => (
        <FounderCard key={f.id} founder={f} />
      ))}
    </div>
  );
}