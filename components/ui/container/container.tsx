import { cn } from "@/lib/utils";
import React from "react";
import { DotPattern } from "@/components/dot-pattern";

type ContainerProps<T extends React.ElementType = "div"> = {
    children: React.ReactNode;
    className?: string;
    as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, "children" | "className" | "as">;

export function Container<T extends React.ElementType = "div">({
    children,
    className,
    as,
    ...props
}: ContainerProps<T>) {
    const Component = (as || "div") as React.ComponentType<{
        children?: React.ReactNode;
        className?: string;
        [key: string]: any;
    }>;
    return (
        <Component 
            {...(props as any)}
            className={cn("max-w-7xl mx-auto", className)}
        >
            {children}
        </Component>
    );
}
