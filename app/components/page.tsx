import { Container } from "@/components/ui/container/container"
import { AICard } from "@/components/ui/ai-card"
import { DivideX } from "@/components/agentix-ui/divide"
import SubscriptionCard from "@/components/agentix-ui/subscription-card"

export const metadata = {
  title: "Components - Agentix",
  description: "Browse our collection of AI-themed UI components",
}

export default function ComponentsPage() {
  return (
    <>
      <DivideX />
      <Container className="py-16 px-4">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Components</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A collection of AI-themed UI components built with Framer Motion and Tailwind CSS.
            Each component is designed for modern AI applications with smooth animations and beautiful interactions.
          </p>
        </div>

        {/* AI Card Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-3">AI Card</h2>
            <p className="text-muted-foreground mb-2">
              An animated card component with hover effects and glow animations. Built on top of shadcn/ui Card component.
            </p>
            <div className="flex gap-2 mt-4">
              <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">Framer Motion</span>
              <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">shadcn/ui</span>
              <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">Tailwind CSS</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SubscriptionCard />
          </div>
        </section>

        {/* More Components Coming Soon */}
        <section className="border-t pt-16">
          <h2 className="text-3xl font-semibold mb-3">More Components</h2>
          <p className="text-muted-foreground">
            More AI-themed components coming soon. Stay tuned for updates!
          </p>
        </section>
      </Container>
      <DivideX />
    </>
  )
}

