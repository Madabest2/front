"use client";

export function CancellationRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
      <span className="text-sm sm:text-base">{label}</span>
      <span className="inline-flex h-7 shrink-0 items-center justify-center rounded-full border border-[#E2531F] bg-[rgba(226,83,31,0.21)] px-4 text-[16px] leading-[23px] font-semibold text-black">
        {value}
      </span>
    </div>
  );
}
