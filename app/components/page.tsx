import Link from "next/link"

import { Container } from "@/components/ui/container/container"
import { DivideX } from "@/components/agentix-ui/divide"
import ComponentPreview from "@/components/component-preview"
import { Badge } from "@/components/badge"
import { Heading } from "@/components/heading"
import { SubHeading } from "@/components/subheading";
import { Footer } from "@/components/footer";
import { getSEOTags } from "@/lib/seo"
import { Component } from "@/store/app-store"
export const metadata = getSEOTags({
  title: "All components | Agentix UI",
  description: "Browse our collection of AI-themed UI components",
})


export const GridLayout = ({ components }: { components: Component[] }) => {
  return (
    <div className="divide-divide grid grid-cols-1 divide-y lg:grid-cols-3 lg:divide-x lg:divide-y-0">
      {components.map((component, index) => (
        <Link
          key={component.name}
          href={`/components/${component.slug}`}
          className="p-4 hover:bg-gray-50 md:p-8 dark:hover:bg-neutral-800 border-b border-divide"
        >
          <div className="shadow-agentix h-60 w-full rounded-lg border border-divide bg-muted/40 p-3 md:h-80 lg:h-60">
            <div className="pointer-events-none h-full w-full overflow-y-scroll flex items-center justify-center">
              <ComponentPreview slug={component.slug} />
            </div>
          </div>
          <div>
            <h2 className="text-primary mt-2 text-lg font-medium tracking-tight">
              {component.name}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

async function getComponentsFromStore(): Promise<Component[]> {
  // Fetch from the API route (same source the store uses)
  // For server components, construct the base URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL 
    || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')
  
  const response = await fetch(`${baseUrl}/api/components`, {
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  
  if (!response.ok) {
    throw new Error('Failed to fetch components')
  }
  
  const components = await response.json() as Component[]
  return components
}

export default async function ComponentsPage() {
  const components = await getComponentsFromStore()
  return (
    <>
      {/* <DivideX /> */}
      {/* <Container className="py-22 px-4">
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
      <DivideX /> */}
      <DivideX />
      <Container className="border-divide flex flex-col items-center border-x pt-20 md:pb-10">
        <Badge text=" All components" />
        <Heading>All components</Heading>
        <SubHeading className="mx-auto mt-2 max-w-sm px-4">
          All components available in the Agentix UI library.
        </SubHeading>
        <div className="border-divide divide-divide mt-10 flex w-full flex-col divide-y border-y">
          <GridLayout components={components} />
        </div>
      </Container>
      <DivideX />
      <Footer />

    </>
  )
}

