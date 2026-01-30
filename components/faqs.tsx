"use client";
import React, { useMemo, useState } from "react";
import { SubHeading } from "./subheading";
import { Container } from "@/components/ui/container/container";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "./badge";
import { Button } from "@/components/ui/container/button";
import { DivideX } from "@/components/agentix-ui/divide";
import { AnimatePresence, motion } from "motion/react";
import useMeasure from "react-use-measure";

export const faqs = [
    {
      question: "What is Agentixly?",
      answer:
        "Agentixly is a comprehensive UI kit designed specifically for AI applications. It provides developers and technical teams with the tools to create, simulate, and manage agentic workflows visually, making it easier to build modern AI-powered interfaces.",
    },
    {
      question: "How does Agentixly help with agentic workflows?",
      answer:
        "Our platform empowers developers to visually design and simulate AI-driven workflows. You can create complex agentic systems, test their behavior, and manage their execution all through an intuitive interface that simplifies the development process.",
    },
    {
      question: "Can I customize the components for my project?",
      answer:
        "Yes. Agentixly provides a comprehensive set of customizable UI components. You can adapt the components to match your brand, modify their behavior, and integrate them seamlessly into your existing AI applications.",
    },
    {
      question: "How does the platform help improve my development workflow?",
      answer:
        "We provide pre-built, production-ready components that follow best practices for AI applications. By using Agentixly, you can accelerate development, ensure consistency across your app, and focus on building unique features rather than reinventing common UI patterns.",
    },
    {
      question: "Does Agentixly support different frameworks?",
      answer:
        "Absolutely. Agentixly is built with React and Next.js, making it compatible with modern web development stacks. The components are designed to work seamlessly with TypeScript and can be easily integrated into your existing projects.",
    },
    {
      question: "Is it possible to use these components in production?",
      answer:
        "Yes, Agentixly offers production-ready components that are fully tested and optimized. You can use them directly in your applications or customize them to fit your specific needs, ensuring a smooth development experience from prototype to production.",
    },
  ];


const ChevronDownIcon = (
  props: React.SVGProps<SVGSVGElement> & { rotated?: boolean },
) => {
  const { rotated, className, ...rest } = props;
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        d="M3.75 6.5L8 10.75L12.25 6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const FAQs = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <Container className="border-divide flex flex-col items-center border-x pt-12">
      <Badge text="FAQs" />
      <SectionHeading className="mt-4">
        Frequently Asked Questions
      </SectionHeading>

      <SubHeading as="p" className="mx-auto mt-6 max-w-lg px-2">
        Find all your doubts and questions in one place. Still couldn't find
        what you're looking for?
      </SubHeading>
      <div className="mt-8 mb-12 flex w-full flex-col justify-center gap-4 px-4 sm:flex-row">
        <Button variant="primary" className="w-full sm:w-auto">
          Read Docs
        </Button>
        <Button
          as="a"
          href="mailto:support@example.com"
          variant="secondary"
          className="w-full sm:w-auto"
        >
          Contact Us
        </Button>
      </div>
      <DivideX />
      <div className="divide-divide w-full divide-y">
        {faqs.map((item, index) => (
          <AccordionItem
            key={item.question}
            index={index}
            question={item.question}
            answer={item.answer}
            isOpen={openItems.has(index)}
            onToggle={() => toggle(index)}
          />
        ))}
      </div>
    </Container>
  );
};

const AccordionItem = ({
  index,
  question,
  answer,
  isOpen,
  onToggle,
}: {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const [ref, { height }] = useMeasure();
  const targetHeight = useMemo(() => (isOpen ? height : 0), [isOpen, height]);

  return (
    <div className="group">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${index}`}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-8 py-6 text-left"
      >
        <span className="text-charcoal-700 text-base font-medium dark:text-neutral-100">
          {question}
        </span>
        <motion.span
          className="text-charcoal-700 shadow-agentix inline-flex size-6 items-center justify-center rounded-md bg-white dark:bg-neutral-950"
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDownIcon className="dark:text-neutral-100" />
        </motion.span>
      </button>

      <motion.div
        id={`faq-panel-${index}`}
        role="region"
        aria-hidden={!isOpen}
        initial={false}
        animate={{ height: targetHeight, opacity: isOpen ? 1 : 0 }}
        transition={{ height: { duration: 0.35 }, opacity: { duration: 0.2 } }}
        className="overflow-hidden px-8"
        onClick={onToggle}
      >
        <div ref={ref} className="pr-2 pb-5 pl-2 sm:pr-0 sm:pl-0">
          <AnimatePresence mode="popLayout">
            {isOpen && (
              <motion.p
                key="content"
                initial={{ y: -6, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -6, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="text-gray-600 dark:text-neutral-400"
              >
                {answer}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
