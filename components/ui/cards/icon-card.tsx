import React from "react";
import { cn } from "@/lib/utils";

type IconCardProps = {
    children: React.ReactNode;
    className?: string;
};

const Icon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            strokeWidth="1"
            stroke="currentColor"
            className={cn("text-foreground size-6 absolute", className)}
        >
            <title>Icon</title>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};

const Icons = () => (
    <>
        <Icon className="-top-3 -left-3 text-brand" />
        <Icon className="-top-3 -right-3" />
        <Icon className="-bottom-3 -left-3" />
        <Icon className="-bottom-3 -right-3 text-brand" />
    </>
);

export const IconCard = ({ children, className }: IconCardProps) => {
    return (
            <div
                className={cn(
                    "relative px-6 py-6 md:px-10 md:py-8 border border-divide",
                    // "shadow-[0_0_0_1px_rgba(148,163,184,0.1)]",
                    "pointer-events-auto",
                    className,
                )}
            >
                <Icons />
                {children}
            </div>

    );
};

export default IconCard;


