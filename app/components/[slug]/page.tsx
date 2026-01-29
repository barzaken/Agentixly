import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container/container";
import { RegistryActions } from "@/components/registry-actions";
import { ComponentScroller } from "@/components/component-scroller";
import { ComponentCodePreview } from "@/components/component-code-preview";

type RegistryFile = {
  path: string;
  content: string;
  type: string;
};

type RegistryItem = {
  name: string;
  type: string;
  dependencies: string[];
  registryDependencies: string[];
  files: RegistryFile[];
};

async function getRegistryItem(slug: string): Promise<RegistryItem | null> {
  const filePath = path.join(process.cwd(), "public/registry", `${slug}.json`);

  try {
    const raw = await fs.promises.readFile(filePath, "utf8");
    return JSON.parse(raw) as RegistryItem;
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "public/registry");
  const entries = await fs.promises.readdir(dir);

  return entries
    .filter((file) => file.endsWith(".json"))
    .map((file) => ({
      slug: file.replace(".json", ""),
    }));
}

export default async function ComponentInstallPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const registry = await getRegistryItem(slug);

  if (!registry) {
    notFound();
  }

  const dir = path.join(process.cwd(), "public/registry");
  const entries = await fs.promises.readdir(dir);
  const slugs = entries
    .filter((file) => file.endsWith(".json"))
    .map((file) => file.replace(".json", ""))
    .sort();

  const codeBundle = registry.files
    .map(
      (file) =>
        `// File: components/agentix-ui/${file.path}\n${file.content.trim()}\n`,
    )
    .join("\n\n");

  return (
    <Container className="px-4 py-20 md:py-16 min-h-[calc(100vh-0rem)] md:flex md:items-center">
      <ComponentScroller slugs={slugs} currentSlug={slug} />
      <div className="grid w-full  justify-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.6fr)] items-start">
        {/* Left: meta + actions */}
        <div className="space-y-6">
          <div className="space-y-3">
            {/* <p className="inline-flex items-center gap-2 rounded-full border border-divide bg-muted/50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Agentix component
            </p> */}
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {registry.name} 
            </h1>
            {/* <p className="text-sm md:text-base text-muted-foreground max-w-md">
              Install this component into your project using the shadcn CLI or
              let your AI assistant handle it with a pre-filled prompt.
            </p> */}
          </div>

          <div className="space-y-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Install
            </p>
            <RegistryActions
              slug={slug}
              name={registry.name}
              code={codeBundle}
            />
          </div>
        </div>

        {/* Right: live preview / code */}
        <div className="w-full min-h-full">
          {registry.files[0] && (
            <ComponentCodePreview
              slug={slug}
              filePath={registry.files[0].path}
              code={registry.files[0].content}
            />
          )}
        </div>
      </div>
    </Container>
  );
}


