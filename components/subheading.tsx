import React from "react";
import { cn } from "@/lib/utils";

type SubHeadingProps<T extends React.ElementType = "h2"> = {
  children: React.ReactNode;
  className?: string;
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, "children" | "className" | "as">;

export function SubHeading<T extends React.ElementType = "h2">({
  children,
  className,
  as,
  ...props
}: SubHeadingProps<T>) {
  const Component = (as || "h2") as React.ComponentType<{
    children?: React.ReactNode;
    className?: string;
    [key: string]: any;
  }>;
  
  return (
    <Component
      {...(props as any)}
      className={cn(
        "text-center text-sm font-medium tracking-tight text-gray-600 md:text-sm lg:text-base dark:text-gray-300",
        className,
      )}
    >
      {children}
    </Component>
  );
}
