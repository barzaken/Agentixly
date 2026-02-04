"use client"
import Link from "next/link"

import { Container } from "@/components/ui/container/container"
import { DivideX } from "@/components/agentix-ui/divide"
import ComponentPreview from "@/components/component-preview"
import { Badge } from "@/components/badge"
import { Heading } from "@/components/heading"
import { SubHeading } from "@/components/subheading";
import { Footer } from "@/components/footer";
import { Component, useAppStore } from "@/store/app-store"


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



export default function ComponentsPage() {
  const components = useAppStore((state) => state.components)
  const componentsLoading = useAppStore((state) => state.componentsLoading)
  return (
    <>
      <DivideX />
      <Container className="border-divide flex flex-col items-center border-x pt-20 md:pb-10">
        <Badge text=" All components" />
        <Heading>All components</Heading>
        <SubHeading className="mx-auto mt-2 max-w-sm px-4">
          All components available in the Agentix UI library.
        </SubHeading>
        <div className="border-divide divide-divide mt-10 flex w-full flex-col divide-y border-y">
          {componentsLoading || components.length < 1 ? (
            <div className="p-8 text-center text-muted-foreground">
              Loading components...
            </div>
          ) : (
            <GridLayout components={components} />
          )}
        </div>
      </Container>
      <DivideX />
      <Footer />
    </>
  )
}

