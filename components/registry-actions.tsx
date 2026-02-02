"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TerminalSquare, Sparkles, Code2 } from "lucide-react";

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

  const v0Url = `https://v0.app/chat/api/open?title=${encodeURIComponent(name)}&prompt=${encodeURIComponent(aiPrompt)}&url=${encodeURIComponent(`https://agentixui.com/registry/${slug}.json`)}`;

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

  const handleV0Open = () => {
    window.open(v0Url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={cn(
        "flex-1 flex flex-row flex-nowrap gap-2 items-center overflow-x-auto",
        className,
      )}
    >

      <Button
        size="sm"
        className="flex-shrink-0 font-mono text-xs w-fit px-0"
        onClick={() => handleV0Open()}
      >
        <img
          src="https://v0.app/chat-static/button.svg"
          alt="Open in v0"
          // width={99}
          // height={32}
          className="dark:bg-black"
        />
      </Button>
      <Button
        size="sm"
        className="flex-shrink-0 font-mono text-xs"
        onClick={() => handleCopy("npx")}
      >
        <TerminalSquare className="mr-1 h-3.5 w-3.5" />
        {label("npx", "CLI")}
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="flex-shrink-0 font-mono text-xs"
        onClick={() => handleCopy("prompt")}
      >
        <Sparkles className="mr-1 h-3.5 w-3.5" />
        {label("prompt", "AI")}
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="flex-shrink-0 font-mono text-xs"
        onClick={() => handleCopy("code")}
      >
        <Code2 className="mr-1 h-3.5 w-3.5" />
        {label("code", "code")}
      </Button>
    </div>
  );
}


