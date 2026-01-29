"use client";

import { useState } from "react";

import { IconCard } from "@/components/ui/cards/icon-card";
import ComponentPreview from "@/components/component-preview";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { IconModal } from "@/components/ui/icon-modal";
import { Button } from "@/components/ui/button";
import { FileCode2 } from "lucide-react";

interface ComponentCodePreviewProps {
  slug: string;
  filePath: string;
  code: string;
}

export function ComponentCodePreview({
  slug,
  filePath,
  code,
}: ComponentCodePreviewProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
    if (typeof document !== "undefined") {
      document.body.dataset.agentixModalOpen = "true";
    }
  };

  const handleDialogChange = (open: boolean) => {
    setDialogOpen(open);
    if (typeof document !== "undefined") {
      if (open) {
        document.body.dataset.agentixModalOpen = "true";
      } else {
        delete document.body.dataset.agentixModalOpen;
      }
    }
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error("Failed to copy code", e);
    }
  };

  return (
    <>
      <IconCard className="bg-background/60">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-mono uppercase tracking-[0.2em]">
              Preview
            </span>
            <button
              type="button"
              onClick={handleOpenDialog}
              className="rounded-full border border-divide bg-muted/40 px-3 py-1 cursor-pointer hover:bg-muted/70 transition-colors"
            >
              <span className="font-mono text-[11px]">
                components/agentix-ui/{filePath}
              </span>
            </button>
          </div>
          <div className="rounded-lg border border-divide bg-muted/40 p-4 md:p-6">
            <div className="max-h-[480px] overflow-hidden">
              <ComponentPreview slug={slug} />
            </div>
          </div>
        </div>
      </IconCard>

      <Dialog open={dialogOpen} onOpenChange={handleDialogChange}>
        <DialogContent className="px-4 max-w-3xl w-[94vw]">
          <IconModal>
            <DialogHeader className="mb-3">
              <DialogTitle className="flex items-center justify-between w-full text-xs">
                <span className="font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  Code preview
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  components/agentix-ui/{filePath}
                </span>
              </DialogTitle>
            </DialogHeader>

            <div className="mb-3 flex items-center justify-end gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="font-mono text-[11px]"
                onClick={handleCopyCode}
              >
                <FileCode2 className="mr-2 h-3.5 w-3.5" />
                {copied ? "Copied" : "source code"}
              </Button>
            </div>

            <div className="rounded-lg border border-divide bg-muted/40 p-4 max-h-[70vh] overflow-auto">
              <pre className="font-mono text-xs whitespace-pre text-foreground">
                <code>{code}</code>
              </pre>
            </div>
          </IconModal>
        </DialogContent>
      </Dialog>
    </>
  );
}

