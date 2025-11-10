import { cn } from "@/lib/utils";
import React from "react";

interface BadgeIconProps {
  icon: React.ReactNode;
  label: string;
  className?: string;
}

export function BadgeIcon({ icon, label, className }: BadgeIconProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2 rounded-lg bg-white p-4 shadow-sm transition-all hover:shadow-md",
        className
      )}
    >
      <div className="bg-primary-madabest flex h-12 w-12 items-center justify-center rounded-full text-white">
        {icon}
      </div>
      <span className="text-dark-madabest text-sm font-medium">{label}</span>
    </div>
  );
}
