import fs from "fs"
import path from "path"
import Link from "next/link"

import { Container } from "@/components/ui/container/container"
import { DivideX } from "@/components/agentix-ui/divide"
import ComponentPreview from "@/components/component-preview"

export const metadata = {
  title: "Components - Agentix",
  description: "Browse our collection of AI-themed UI components",
}

type RegistryFile = {
  path: string
  content: string
  type: string
}

type RegistryItem = {
  slug: string
  name: string
  type: string
  dependencies: string[]
  registryDependencies: string[]
  files: RegistryFile[]
}

async function getAllRegistryItems(): Promise<RegistryItem[]> {
  const dir = path.join(process.cwd(), "public/registry")
  const entries = await fs.promises.readdir(dir)

  const items: RegistryItem[] = []

  for (const file of entries) {
    if (!file.endsWith(".json")) continue

    const slug = file.replace(".json", "")
    const raw = await fs.promises.readFile(path.join(dir, file), "utf8")
    const json = JSON.parse(raw) as Omit<RegistryItem, "slug">

    items.push({ ...json, slug })
  }

  return items.sort((a, b) => a.name.localeCompare(b.name))
}

export default async function ComponentsPage() {
  const components = await getAllRegistryItems()

  return (
    <>
      {/* <DivideX /> */}
      <Container className="py-22 px-4">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Components</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A growing collection of AI-themed UI components. Click any component
            below to view its installation instructions, required dependencies,
            and full source code.
          </p>
        </div>

        <section className="mb-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {components.map((component) => {
              const tech = Array.from(
                new Set([
                  ...(component.dependencies ?? []),
                  ...(component.registryDependencies ?? []),
                ]),
              )

              return (
              <Link
                key={component.slug}
                href={`/components/${component.slug}`}
                className="group rounded-xl border border-divide bg-background/40 p-4 transition hover:border-foreground/40 hover:bg-background/80"
              >
                <div className="mb-4">
                  <h2 className="text-xl font-semibold mb-1 flex items-center justify-between">
                    {component.name}
                    <span className="text-xs px-2 py-0.5 font-mono uppercase tracking-wide text-muted-foreground group-hover:border-foreground/40">
                      Preview
                    </span>
                  </h2>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {tech.length > 0
                      ? tech.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2 py-1 rounded-md bg-muted text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))
                      : null}
                  </div>
                </div>

                <div className="rounded-lg border border-dashed border-divide bg-muted/40 p-3 group-hover:border-foreground/30">
                  <div className="pointer-events-none">
                    <ComponentPreview slug={component.slug} />
                  </div>
                </div>
              </Link>
              )
            })}
          </div>
        </section>
      </Container>
      <DivideX />
    </>
  )
}

