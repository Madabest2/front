"use client";
import React from "react";

export function PercentageBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="ml-1 inline-flex h-[23px] items-center justify-center rounded-full border border-[#E2531F] bg-[rgba(226,83,31,0.21)] px-2 text-[16px] leading-[23px] font-bold text-black"
      aria-label="percentage-badge"
    >
      {children}
    </span>
  );
}
