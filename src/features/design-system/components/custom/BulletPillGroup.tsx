"use client";

export function BulletPillGroup({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((it, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-xs sm:text-sm"
        >
          <span className="inline-block size-2 rounded-full bg-black/40" />
          {it}
        </span>
      ))}
    </div>
  );
}
