import React from "react";

export default function PaymentLayout({ children }: { children: React.ReactNode }) {
  return <div className="text-foreground min-h-dvh w-full bg-[#090909]">{children}</div>;
}
