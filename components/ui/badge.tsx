import * as React from "react";
import { cn } from "@/lib/utils";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--brand-red)]/50 bg-[var(--brand-red-dark)]/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_0_26px_rgba(155,11,11,0.35)]",
        className
      )}
      {...props}
    />
  );
}
