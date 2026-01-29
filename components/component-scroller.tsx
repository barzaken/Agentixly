"use client";

import { useEffect, useState, useRef } from "react";
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
  const touchStartY = useRef<number | null>(null);
  const touchStartTime = useRef<number | null>(null);

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

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        touchStartY.current = event.touches[0].clientY;
        touchStartTime.current = Date.now();
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      // Prevent default scrolling if we're going to handle the swipe
      if (touchStartY.current !== null && event.touches.length === 1) {
        const currentY = event.touches[0].clientY;
        const deltaY = currentY - touchStartY.current;
        
        // If the swipe is significant, prevent default scrolling
        if (Math.abs(deltaY) > 10) {
          event.preventDefault();
        }
      }
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (isThrottled || touchStartY.current === null || touchStartTime.current === null) {
        touchStartY.current = null;
        touchStartTime.current = null;
        return;
      }

      if (event.changedTouches.length === 1) {
        const touchEndY = event.changedTouches[0].clientY;
        const touchEndTime = Date.now();
        const deltaY = touchEndY - touchStartY.current;
        const deltaTime = touchEndTime - touchStartTime.current;
        
        // Minimum swipe distance (in pixels)
        const minSwipeDistance = 50;
        // Maximum swipe time (in milliseconds) to be considered a swipe
        const maxSwipeTime = 300;
        
        // Check if it's a valid swipe gesture
        if (Math.abs(deltaY) >= minSwipeDistance && deltaTime <= maxSwipeTime) {
          // Swipe down (scroll up) - go to next component
          if (deltaY > 0 && hasNext) {
            setIsThrottled(true);
            router.push(`/components/${slugs[index + 1]}`);
            setTimeout(() => setIsThrottled(false), 800);
          }
          // Swipe up (scroll down) - go to previous component
          else if (deltaY < 0 && hasPrev) {
            setIsThrottled(true);
            router.push(`/components/${slugs[index - 1]}`);
            setTimeout(() => setIsThrottled(false), 800);
          }
        }
      }

      touchStartY.current = null;
      touchStartTime.current = null;
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("keydown", handleKey);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
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


