"use client";

import React, { useEffect, useState } from "react";

interface ComponentPreviewProps {
  slug: string;
}

type LoadedComponent = React.ComponentType | null;

export default function ComponentPreview({ slug }: ComponentPreviewProps) {
  const [Component, setComponent] = useState<LoadedComponent>(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const mod = await import(`@/components/agentix-ui/${slug}`);
        const Resolved = (mod as any).default || (mod as any)[Object.keys(mod)[0]];

        if (mounted) {
          setComponent(() => Resolved as React.ComponentType);
        }
      } catch {
        if (mounted) {
          setComponent(
            () =>
              () =>
                (
                  <div className="text-sm text-muted-foreground p-4 text-center">
                    Could not load preview for <span className="font-mono">{slug}</span>
                    <br />
                    Make sure the file exists in components/agentix-ui
                  </div>
                ),
          );
        }
      }
    }

    load();

    return () => {
      mounted = false;
    };
  }, [slug]);

  if (!Component) {
    return (
      <div className="flex items-center justify-center h-40 text-muted-foreground text-sm">
        Loading preview...
      </div>
    );
  }

  return <Component />;
}
