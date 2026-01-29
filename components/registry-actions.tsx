 "use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TerminalSquare, Sparkles, FileCode2 } from "lucide-react";

type RegistryActionsProps = {
  slug: string;
  name: string;
  code: string;
  className?: string;
};

export function RegistryActions({
  slug,
  name,
  code,
  className,
}: RegistryActionsProps) {
  const [copied, setCopied] = useState<"npx" | "prompt" | "code" | null>(null);

  const npxCommand = `npx shadcn@latest add https://agentixui.com/registry/${slug}.json`;

  const aiPrompt = [
    "You are my senior TypeScript & Next.js assistant.",
    "Install the following Agentix UI component into my project using the shadcn CLI.",
    "",
    `Component: ${name}`,
    `Registry URL: https://agentixui.com/registry/${slug}.json`,
    "",
    "Steps:",
    "1. Run the npx command to download the component.",
    "2. Ensure all dependencies are installed.",
    "3. Wire the component into a new route and show a minimal working example.",
    "",
    "Return the exact commands and code changes you would make.",
  ].join("\n");

  const handleCopy = async (type: "npx" | "prompt" | "code") => {
    const text =
      type === "npx" ? npxCommand : type === "prompt" ? aiPrompt : code;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 1500);
    } catch (e) {
      console.error("Failed to copy", e);
    }
  };

  const label = (type: "npx" | "prompt" | "code", fallback: string) =>
    copied === type ? "Copied" : fallback;

  return (
    <div
      className={cn(
        "flex flex-row gap-2 items-center sm:gap-3",
        className,
      )}
    >
      <Button
        size="sm"
        className="w-full sm:w-auto font-mono text-xs"
        onClick={() => handleCopy("npx")}
      >
        <TerminalSquare className="mr-2 h-3.5 w-3.5" />
        {label("npx", "npx command")}
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="w-full sm:w-auto font-mono text-xs"
        onClick={() => handleCopy("prompt")}
      >
        <Sparkles className="mr-2 h-3.5 w-3.5" />
        {label("prompt", "AI prompt")}
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="w-full sm:w-auto font-mono text-xs"
        onClick={() => handleCopy("code")}
      >
        <FileCode2 className="mr-2 h-3.5 w-3.5" />
        {label("code", "source code")}
      </Button>
    </div>
  );
}


