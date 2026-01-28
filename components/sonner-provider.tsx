"use client";

import { Toaster } from "sonner";

export function SonnerProvider() {
  return (
    <Toaster
      richColors={false}
      position="top-center"
      closeButton
      toastOptions={{
        classNames: {
          toast:
            "border border-divide bg-background/95 backdrop-blur-md text-sm text-foreground",
        },
      }}
    />
  );
}


