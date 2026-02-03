import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container/container";
import { RegistryActions } from "@/components/registry-actions";
import { ComponentScroller } from "@/components/component-scroller";
import { ComponentCodePreview } from "@/components/component-code-preview";
import { Heading } from "@/components/heading";
import { Badge } from "@/components/badge";

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
    // <Container className="px-4 py-20 md:py-16 min-h-[calc(100vh-0rem)] md:flex md:items-center">
    <Container className="border-divide flex flex-col md:flex-row items-center border-x border-b pt-20 pb-10 min-h-[calc(100vh-0rem)] px-8">
      <ComponentScroller slugs={slugs} currentSlug={slug} />
      {/* <div className="border-divide divide-divide  flex w-full flex-col md:flex-row items-start justify-center px-4 flex-1 "> */}
      {/* <div className="grid w-full  justify-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.6fr)] items-start"> */}
      {/* Left: meta + actions */}
      <div className="space-y-6 flex-1 flex flex-col  ">
        <Heading>
          {registry.name}
        </Heading>
        <div className="self-center mt-2">
          <RegistryActions
            slug={slug}
            name={registry.name}
            code={codeBundle}
          />
        </div>
      </div>

      {/* Right: live preview / code */}
      <div className="flex-1 min-h-full w-full">
        {registry.files[0] && (
          <ComponentCodePreview
            slug={slug}
            filePath={registry.files[0].path}
            code={registry.files[0].content}
          />
        )}
      </div>
      {/* </div> */}
    </Container>

  );
}


