"use client";

import React from "react";
import dynamic from "next/dynamic";

interface ComponentPreviewProps {
  slug: string;
}

export default function ComponentPreview({ slug }: ComponentPreviewProps) {
  // השימוש ב-dynamic כאן מותר כי אנחנו ב-"use client"
  const Component = dynamic(
    () =>
      import(`@/components/agentix-ui/${slug}`)
        .then((mod) => {
          // לוקח את ה-default export או את ה-export הראשון (עבור Named Exports)
          return mod.default || mod[Object.keys(mod)[0]];
        })
        .catch(() => () => (
          <div className="text-sm text-muted-foreground p-4 text-center">
            Could not load preview for <span className="font-mono">{slug}</span>
            <br />
            Make sure the file exists in components/agentix-ui
          </div>
        )),
    {
      ssr: false, // עכשיו זה חוקי ועובד!
      loading: () => (
        <div className="flex items-center justify-center h-40 text-muted-foreground text-sm">
          Loading preview...
        </div>
      ),
    }
  );

  return <Component />;
}