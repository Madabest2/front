"use client";
import React from "react";
import { Badge } from "../ui/badge";

export function InfoBadge({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Badge
      variant="outline"
      className="w-full justify-start gap-2 rounded-lg px-3 py-2 text-[13px] sm:text-sm"
    >
      {icon}
      <span className="truncate">{children}</span>
    </Badge>
  );
}
