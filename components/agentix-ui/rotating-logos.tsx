"use client";

import React, { useState, useEffect } from "react";
import { Container } from "@/components/ui/container/container";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
export const logos = [
    {
      title: "First",
      src: "/logos/1.png",
      className: "h-10 w-auto ",
    },
    {
      title: "Second",
      src: "/logos/2.png",
      className: "h-6 w-auto ",
    },
    {
      title: "Third",
      src: "/logos/3.png",
      className: "h-6 w-auto ",
    },
    {
      title: "Fourth",
      src: "/logos/4.png",
      className: "h-8 w-auto ",
    },
    {
      title: "Fifth",
      src: "/logos/5.png",
      className: "h-8 w-auto ",
    },
    {
      title: "Sixth",
      src: "/logos/6.png",
      className: "h-10 w-auto ",
    },
    {
      title: "Seventh",
      src: "/logos/7.png",
      className: "h-10 w-auto ",
    },
    {
      title: "Eighth",
      src: "/logos/8.png",
      className: "h-10 w-auto ",
    },
    {
      title: "Ninth",
      src: "/logos/9.png",
      className: "h-6 w-auto ",
    },
    {
      title: "Tenth",
      src: "/logos/10.png",
      className: "h-10 w-auto ",
    },
  ];
  


export const LogoCloud = () => {
  // Track which logos are currently displayed (indices)
  const [displayedIndices, setDisplayedIndices] = useState<number[]>(() =>
    Array.from({ length: 8 }, (_, i) => i),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const notDisplayedIndices = logos
        .map((_, index) => index)
        .filter((index) => !displayedIndices.includes(index));

      if (notDisplayedIndices.length > 0) {
        const randomDisplayedIndex = Math.floor(
          Math.random() * displayedIndices.length,
        );
        const positionToReplace = randomDisplayedIndex;

        const randomNotDisplayedIndex = Math.floor(
          Math.random() * notDisplayedIndices.length,
        );
        const newLogoIndex = notDisplayedIndices[randomNotDisplayedIndex];

        setDisplayedIndices((prev) => {
          const newIndices = [...prev];
          newIndices[positionToReplace] = newLogoIndex;
          return newIndices;
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [displayedIndices, logos]);

  return (
    <Container className="border-divide border-x">
      <h2 className="py-8 text-center font-mono text-sm tracking-tight text-neutral-500 uppercase dark:text-gray-300">
        Trusted by Developers from
      </h2>
      <div className="border-divide grid grid-cols-2 border-t md:grid-cols-4">
        {displayedIndices.map((logoIndex, position) => {
          const logo = logos[logoIndex];

          return (
            <div
              key={position}
              className={cn(
                "border-divide group relative overflow-hidden",
                "border-r md:border-r-0",
                position % 2 === 0 ? "border-r" : "",
                position < 6 ? "border-b md:border-b-0" : "",
                "md:border-r-0",
                position % 4 !== 3 ? "md:border-r" : "",
                position < 4 ? "md:border-b" : "",
              )}
            >
              <div className="animate-move-left-to-right bg-brand/5 absolute inset-x-0 bottom-0 h-full translate-y-full transition-all duration-200 group-hover:translate-y-0"></div>
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={logoIndex}
                  className="group flex min-h-32 items-center justify-center p-4 py-10 grayscale"
                  initial={{
                    y: 100,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -100,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    opacity: 1,
                  }}
                >
                  <motion.img
                    src={logo.src}
                    alt={logo.title}
                    className={cn(
                      "h-8 w-auto object-contain transition-all duration-500 dark:invert dark:filter",
                      logo.className,
                    )}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
