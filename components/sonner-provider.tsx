"use client";

import { Toaster } from "sonner";

export function SonnerProvider() {
  return (
    <Toaster
      richColors
      position="top-center"
      closeButton
      toastOptions={{
        classNames: {
          toast:
            "border border-divide bg-background/90 backdrop-blur-md text-sm",
        },
      }}
    />
  );
}


