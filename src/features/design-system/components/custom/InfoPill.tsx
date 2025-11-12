"use client";
import React from "react";

type InfoPillProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
  underline?: boolean;
  className?: string;
};

// Reservation variant: fixed height 38px / large email pill (width auto but min-w) / phone pill / address pill.
export function InfoPill({ icon, children, underline, className }: InfoPillProps) {
  return (
    <div
      className={`flex h-[38px] items-center gap-3 rounded-full bg-[rgba(226,83,31,0.4)] px-5 py-2 text-sm font-semibold text-black ${className || ""}`}
    >
      <div className="flex size-7 items-center justify-center rounded-full bg-black text-white ring-1 ring-white">
        {icon}
      </div>
      <span className={`truncate ${underline ? "underline" : ""}`}>{children}</span>
    </div>
  );
}
