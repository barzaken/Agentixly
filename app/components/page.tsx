import Link from "next/link"

import { Container } from "@/components/ui/container/container"
import { DivideX } from "@/components/agentix-ui/divide"
import SubscriptionCard from "@/components/agentix-ui/subscription-card"

export const metadata = {
  title: "Components - Agentix",
  description: "Browse our collection of AI-themed UI components",
}

const components = [
  {
    slug: "subscription-card",
    name: "Subscription Card",
    description:
      "An animated subscription card with expandable details, status indicators, and rich motion.",
    tech: ["Framer Motion", "shadcn/ui", "Tailwind CSS"],
    preview: <SubscriptionCard />,
  },
  {
    slug: "divide",
    name: "DivideX",
    description: "A subtle divider component used to separate sections of your UI.",
    tech: ["Tailwind CSS"],
    preview: <DivideX />,
  },
] as const

export default function ComponentsPage() {
  return (
    <>
      <DivideX />
      <Container className="py-16 px-4">
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
            {components.map((component) => (
              <Link
                key={component.slug}
                href={`/components/${component.slug}`}
                className="group rounded-xl border border-divide bg-background/40 p-4 transition hover:border-foreground/40 hover:bg-background/80"
              >
                <div className="mb-4">
                  <h2 className="text-xl font-semibold mb-1 flex items-center justify-between">
                    {component.name}
                    <span className="text-xs rounded-full border border-divide px-2 py-0.5 font-mono uppercase tracking-wide text-muted-foreground group-hover:border-foreground/40">
                      Preview
                    </span>
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {component.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {component.tech.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-1 rounded-md bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-dashed border-divide bg-muted/40 p-3 group-hover:border-foreground/30">
                  <div className="pointer-events-none">
                    {component.preview}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Container>
      <DivideX />
    </>
  )
}

