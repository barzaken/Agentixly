"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/app-store";

type ComponentScrollerProps = {
  slugs: string[];
  currentSlug: string;
};

const NAVIGATION_COOLDOWN_MS = 900;
const NAVIGATION_STORAGE_KEY = "agentix-components-last-nav";

export function ComponentScroller({
  slugs,
  currentSlug,
}: ComponentScrollerProps) {
  const router = useRouter();
  const setCurrentComponentSlug = useAppStore(
    (state) => state.setCurrentComponentSlug,
  );
  const [isThrottled, setIsThrottled] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchStartTime = useRef<number | null>(null);
  const ignoreGesture = useRef(false);

  const EDGE_THRESHOLD = 40; // px from left edge reserved for browser back

  // Sync current slug with store
  useEffect(() => {
    setCurrentComponentSlug(currentSlug);
  }, [currentSlug, setCurrentComponentSlug]);

  const isModalOpen = () => {
    if (typeof document === "undefined") return false;
    return document.body.dataset.agentixModalOpen === "true";
  };

  const canNavigate = () => {
    if (typeof window === "undefined") return false;

    const last = window.sessionStorage.getItem(NAVIGATION_STORAGE_KEY);
    const lastTime = last ? parseInt(last, 10) : 0;
    const now = Date.now();

    return now - lastTime > NAVIGATION_COOLDOWN_MS;
  };

  const recordNavigation = () => {
    if (typeof window === "undefined") return;
    window.sessionStorage.setItem(
      NAVIGATION_STORAGE_KEY,
      Date.now().toString(),
    );
  };

  const index = slugs.indexOf(currentSlug);
  const hasPrev = index > 0;
  const hasNext = index >= 0 && index < slugs.length - 1;

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isThrottled || !canNavigate() || isModalOpen()) return;

      const threshold = 40;
      if (event.deltaY > threshold && hasNext) {
        setIsThrottled(true);
        recordNavigation();
        const nextSlug = slugs[index + 1];
        router.push(`/components/${nextSlug}`);
        setTimeout(() => setIsThrottled(false), 800);
      } else if (event.deltaY < -threshold && hasPrev) {
        setIsThrottled(true);
        recordNavigation();
        const prevSlug = slugs[index - 1];
        router.push(`/components/${prevSlug}`);
        setTimeout(() => setIsThrottled(false), 800);
      }
    };

    const handleKey = (event: KeyboardEvent) => {
      if (isThrottled || !canNavigate() || isModalOpen()) return;
      if ((event.key === "ArrowDown" || event.key === "PageDown") && hasNext) {
        setIsThrottled(true);
        recordNavigation();
        const nextSlug = slugs[index + 1];
        router.push(`/components/${nextSlug}`);
        setTimeout(() => setIsThrottled(false), 800);
      }
      if ((event.key === "ArrowUp" || event.key === "PageUp") && hasPrev) {
        setIsThrottled(true);
        recordNavigation();
        const prevSlug = slugs[index - 1];
        router.push(`/components/${prevSlug}`);
        setTimeout(() => setIsThrottled(false), 800);
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (isModalOpen()) return;
      if (event.touches.length === 1) {
        const touch = event.touches[0];
        touchStartY.current = touch.clientY;
        touchStartX.current = touch.clientX;
        touchStartTime.current = Date.now();

        // If swipe starts near the left edge, let the browser handle it (back gesture)
        ignoreGesture.current = touchStartX.current < EDGE_THRESHOLD;
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (isModalOpen() || ignoreGesture.current) return;
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
      if (ignoreGesture.current) {
        // This was likely a browser back swipe – reset and bail
        touchStartY.current = null;
        touchStartX.current = null;
        touchStartTime.current = null;
        ignoreGesture.current = false;
        return;
      }

      if (
        isThrottled ||
        !canNavigate() ||
        isModalOpen() ||
        touchStartY.current === null ||
        touchStartTime.current === null
      ) {
        touchStartY.current = null;
        touchStartX.current = null;
        touchStartTime.current = null;
        return;
      }

      if (event.changedTouches.length === 1) {
        const touchEndX = event.changedTouches[0].clientX;
        const touchEndY = event.changedTouches[0].clientY;
        const touchEndTime = Date.now();
        const deltaX =
          touchEndX - (touchStartX.current ?? touchEndX);
        const deltaY = touchEndY - touchStartY.current;
        const deltaTime = touchEndTime - touchStartTime.current;

        // Only treat as our gesture if vertical component dominates
        if (Math.abs(deltaY) < Math.abs(deltaX)) {
          touchStartY.current = null;
          touchStartX.current = null;
          touchStartTime.current = null;
          return;
        }
        
        // Minimum swipe distance (in pixels)
        const minSwipeDistance = 50;
        // Maximum swipe time (in milliseconds) to be considered a swipe
        const maxSwipeTime = 300;
        
        // Check if it's a valid swipe gesture
        if (Math.abs(deltaY) >= minSwipeDistance && deltaTime <= maxSwipeTime) {
          // Swipe down (scroll up) - go to next component
          if (deltaY > 0 && hasNext) {
            setIsThrottled(true);
            recordNavigation();
            const nextSlug = slugs[index + 1];
            router.push(`/components/${nextSlug}`);
            setTimeout(() => setIsThrottled(false), 800);
          }
          // Swipe up (scroll down) - go to previous component
          else if (deltaY < 0 && hasPrev) {
            setIsThrottled(true);
            recordNavigation();
            const prevSlug = slugs[index - 1];
            router.push(`/components/${prevSlug}`);
            setTimeout(() => setIsThrottled(false), 800);
          }
        }
      }

      touchStartY.current = null;
      touchStartX.current = null;
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
    <>
      {/* Desktop: vertical line indicator */}
      <div className="pointer-events-none fixed inset-y-0 right-6 z-40 hidden flex-col items-center justify-center gap-3 text-[10px] text-muted-foreground md:flex">
        <div className="relative flex flex-col items-center gap-2 rounded-full border border-divide bg-background/80 px-3 py-4 shadow-sm">
          {/* Vertical rail */}
          <div className="pointer-events-none absolute inset-y-3 left-1/2 w-px -translate-x-1/2 bg-divide/70" />

          {slugs.map((slug, i) => (
            <button
              key={slug}
              type="button"
              onClick={() => {
                router.push(`/components/${slug}`);
              }}
              className={cn(
                "relative flex h-3 w-3 items-center justify-center rounded-full border border-divide bg-background/80 transition pointer-events-auto",
                i === index
                  ? "rotate-45 border-foreground/80 bg-foreground/90 text-background shadow-[0_0_12px_rgba(255,255,255,0.35)]"
                  : "bg-muted/40 hover:bg-foreground/30 hover:border-foreground/40",
              )}
              aria-label={`Go to component ${i + 1}`}
            >
              {/* Inner node */}
              <span
                className={cn(
                  "block h-1.5 w-1.5 rounded-full bg-foreground/50 transition-transform",
                  i === index ? "scale-90 bg-background" : "scale-75",
                )}
              />
            </button>
          ))}
        </div>
        <div className="rounded-full border border-divide bg-background/80 px-2 py-1">
          <span className="font-mono">
            {index + 1}/{slugs.length}
          </span>
        </div>
      </div>

      {/* Mobile: bottom progress line indicator */}
      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex items-center justify-center gap-3 text-[10px] text-muted-foreground md:hidden">
        <div className="relative h-px w-32 overflow-hidden rounded-full bg-divide/60">
          {/* Filled progress */}
          <div
            className="absolute inset-y-0 left-0 bg-foreground/80 transition-all duration-300"
            style={{ width: `${((index + 1) / slugs.length) * 100}%` }}
          />

          {/* Glowing node */}
          <div
            className="pointer-events-none absolute -top-[3px] h-2 w-2 -translate-x-1/2 rounded-full bg-background"
            style={{
              left: `${((index + 1) / slugs.length) * 100}%`,
            }}
          >
            <div className="h-full w-full rounded-full bg-foreground shadow-[0_0_16px_rgba(255,255,255,0.55)]" />
          </div>
        </div>
        <div className="rounded-full border border-divide bg-background/80 px-2 py-1">
          <span className="font-mono">
            {index + 1}/{slugs.length}
          </span>
        </div>
      </div>
    </>
  );
}


