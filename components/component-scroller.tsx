"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

type ComponentScrollerProps = {
  slugs: string[];
  currentSlug: string;
};

export function ComponentScroller({
  slugs,
  currentSlug,
}: ComponentScrollerProps) {
  const router = useRouter();
  const [isThrottled, setIsThrottled] = useState(false);

  const index = slugs.indexOf(currentSlug);
  const hasPrev = index > 0;
  const hasNext = index >= 0 && index < slugs.length - 1;

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isThrottled) return;

      const threshold = 40;
      if (event.deltaY > threshold && hasNext) {
        setIsThrottled(true);
        router.push(`/components/${slugs[index + 1]}`);
        setTimeout(() => setIsThrottled(false), 800);
      } else if (event.deltaY < -threshold && hasPrev) {
        setIsThrottled(true);
        router.push(`/components/${slugs[index - 1]}`);
        setTimeout(() => setIsThrottled(false), 800);
      }
    };

    const handleKey = (event: KeyboardEvent) => {
      if (isThrottled) return;
      if (event.key === "ArrowDown" && hasNext) {
        setIsThrottled(true);
        router.push(`/components/${slugs[index + 1]}`);
        setTimeout(() => setIsThrottled(false), 800);
      }
      if (event.key === "ArrowUp" && hasPrev) {
        setIsThrottled(true);
        router.push(`/components/${slugs[index - 1]}`);
        setTimeout(() => setIsThrottled(false), 800);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
    };
  }, [hasNext, hasPrev, index, isThrottled, router, slugs]);

  if (index === -1) return null;

  return (
    <div className="pointer-events-none fixed inset-y-0 right-3 z-40 hidden flex-col items-center justify-center gap-3 text-[10px] text-muted-foreground md:flex">
      <div className="flex flex-col items-center gap-1 rounded-full border border-divide bg-background/80 px-2 py-2 shadow-sm">
        {slugs.map((slug, i) => (
          <button
            key={slug}
            type="button"
            onClick={() => router.push(`/components/${slug}`)}
            className={cn(
              "h-1.5 w-1.5 rounded-full border border-divide transition",
              i === index
                ? "bg-foreground"
                : "bg-muted hover:bg-foreground/40 pointer-events-auto",
            )}
          />
        ))}
      </div>
      <div className="rounded-full border border-divide bg-background/80 px-2 py-1">
        <span className="font-mono">
          {index + 1}/{slugs.length}
        </span>
      </div>
    </div>
  );
}


