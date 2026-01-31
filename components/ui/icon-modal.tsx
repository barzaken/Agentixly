"use client";

import { ReactNode } from "react";

import { Icons as CornerIcons } from "@/components/ui/cards/icon-card";
import { cn } from "@/lib/utils";

interface IconModalProps {
  children: ReactNode;
  className?: string;
}

export function IconModal({ children, className }: IconModalProps) {
  return (
    <div
      className={cn(
        // "relative px-6 py-6 md:px-8 md:py-6 bg-background/95 backdrop-blur-xl bg-white dark:bg-neutral-900 border border-[0.5px] border-divide",
        "relative backdrop-blur-xl max-w-full overflow-hidden bg-white dark:bg-neutral-900 ",
        className,
      )}
    >
      {/* <CornerIcons /> */}
      {children}
    </div>
  );
}


