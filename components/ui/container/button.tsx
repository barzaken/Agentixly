import { cn } from "@/lib/utils";
import React from "react";

type ButtonProps<T extends React.ElementType = "button"> = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "brand";
  className?: string;
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, "children" | "variant" | "className" | "as">;

export function Button<T extends React.ElementType = "button">({
  children,
  variant = "primary",
  className,
  as,
  ...props
}: ButtonProps<T>) {
  const Component = (as || "button") as React.ComponentType<{
    children?: React.ReactNode;
    className?: string;
    [key: string]: any;
  }>;

  return (
    <Component
      {...(props as any)}
      className={cn(
        "block roundedxl px-6 py-2 text-center text-sm font-medium transition duration-150 active:scale-[0.98] sm:text-base",
        variant === "primary"
          ? "bg-charcoal-900 text-white dark:bg-white dark:text-black"
          : variant === "brand"
            ? "bg-brand text-white"
            : "border-divide border bg-white text-black transition duration-200 hover:bg-gray-300 dark:border-neutral-700 dark:bg-neutral-950 dark:text-white dark:hover:bg-neutral-800",
        className,
      )}
    >
      {children}
    </Component>
  );
}
