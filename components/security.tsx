import React from "react";
import { Container } from "@/components/ui/container/container";
import { DivideX } from "@/components/agentix-ui/divide";
import { SectionHeading } from "@/components/section-heading";
import { SubHeading } from "@/components/subheading";
import { Button } from "@/components/ui/container/button";
import  Link from "next/link";

export const Security = () => {
  return (
    <>
      <Container className="border-divide border-x">
        <h2 className="pt-10 pb-5 text-center font-mono text-sm tracking-tight text-neutral-500 uppercase md:pt-20 md:pb-10 dark:text-neutral-400">
          FOR SECURITY FIRST TEAMS
        </h2>
      </Container>
      <DivideX />
      <Container className="border-divide grid grid-cols-1 border-x bg-gray-100 px-8 py-12 md:grid-cols-2 dark:bg-neutral-900">
        <div>
          <SectionHeading className="text-left">
            Build securely with confidence
          </SectionHeading>
          <SubHeading as="p" className="mt-4 text-left">
            Our UI components are designed with enterprise-grade security
            practices and built following industry best practices for modern web applications.
          </SubHeading>
          <Button
            className="mt-4 mb-8 inline-block w-full md:w-auto"
            as={Link}
            // href="/pricing"
            href="/components"
          >
            Start for free
          </Button>
        </div>
        <div className="flex items-center justify-center gap-10">
          <img
            src="/logos/CCPA.png"
            alt="CCPA"
            className="h-auto w-14"
            draggable={false}
          />
          <img
            src="/logos/GDPR.png"
            alt="GDPR"
            className="h-auto w-14"
            draggable={false}
          />
          <img
            src="/logos/ISO.png"
            alt="ISO"
            className="h-auto w-14"
            draggable={false}
          />
        </div>
      </Container>
    </>
  );
};
