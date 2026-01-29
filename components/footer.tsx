


import Link from "next/link";
import { Button } from "./ui/container/button";
import { Container } from "./ui/container/container";
import { Logo } from "./logo";
import { SubHeading } from "./subheading";
// import { SendIcon } from "@/src/icons/bento-icons";
import { FlickeringGrid } from "./flickering-grid";

export const Footer = () => {
    const product = [
        {
            title: "Agent Builder",
            href: "#",
        },
        {
            title: "Simulation",
            href: "#",
        },
        {
            title: "Integrations",
            href: "#",
        },
        {
            title: "Multi Agent",
            href: "#",
        },
        {
            title: "Workflow API",
            href: "#",
        },
    ];

    const company = [
        {
            title: "Sign In",
            href: "/sign-in",
        },
        {
            title: "About",
            href: "/about",
        },
        {
            title: "Contact",
            href: "/contact",
        },
        {
            title: "Pricing",
            href: "/pricing",
        },
        {
            title: "Careers",
            href: "/careers",
        },
        {
            title: "Docs",
            href: "#",
        },
        {
            title: "Changelog",
            href: "#",
        },
        {
            title: "Glossary",
            href: "#",
        },
    ];

    const legal = [
        {
            title: "Privacy Policy",
            href: "/privacy-policy",
        },
        {
            title: "Terms of Service",
            href: "/terms-of-service",
        },
        {
            title: "Cookie Policy",
            href: "/cookie-policy",
        },
    ];
    return (
        <Container>
            <div className="grid grid-cols-1 px-4 py-20 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
                <div className="mb-6 sm:col-span-2 md:col-span-4 lg:col-span-3">
                    <Logo />
                    <SubHeading as="p" className="mt-4 max-w-lg text-left">
                        AI UI components for AI Apps
                    </SubHeading>
                    <Button as={Link} href="/components" className="mt-4 mb-8 lg:mb-0">Browse components</Button>
                </div>
                {/* <div className="col-span-1 mb-4 flex flex-col gap-2 md:col-span-1 md:mb-0">
                    <p className="text-sm font-medium text-gray-600">Product</p>
                    {product.map((item) => (
                        <Link
                            href={item.href}
                            key={item.title}
                            className="text-footer-link my-2 text-sm font-medium"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
                <div className="col-span-1 mb-4 flex flex-col gap-2 md:col-span-1 md:mb-0">
                    <p className="text-sm font-medium text-gray-600">Company</p>
                    {company.map((item) => (
                        <Link
                            href={item.href}
                            key={item.title}
                            className="text-footer-link my-2 text-sm font-medium"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
                <div className="col-span-1 mb-4 flex flex-col gap-2 md:col-span-1 md:mb-0">
                    <p className="text-sm font-medium text-gray-600">Legal</p>
                    {legal.map((item) => (
                        <Link
                            href={item.href}
                            key={item.title}
                            className="text-footer-link my-2 text-sm font-medium"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div> */}
                {/* <div className="col-span-1 mb-4 flex flex-col items-start md:col-span-1 md:mb-0 lg:col-span-2">
                    <p className="text-footer-link text-sm font-medium">Newsletter</p>
                    <div className="mt-2 flex w-full items-center rounded-xl border border-gray-300 bg-gray-200 p-1 placeholder-gray-600 dark:border-neutral-700 dark:bg-neutral-800">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="flex-1 bg-transparent px-2 text-sm outline-none focus:outline-none"
                        />
                    </div>
                    <SubHeading
                        as="p"
                        className="mt-4 text-left text-sm md:text-sm lg:text-sm"
                    >
                        Get the latest product news and behind the scenes updates.
                    </SubHeading>
                </div> */}
            </div>
            <div className="relative h-[200px]">
                <FlickeringGrid
                    text={"Agentix"}
                    fontSize={90}
                    className="h-full w-full"
                    squareSize={2}
                    gridGap={2}
                    color="#6B7280"
                    maxOpacity={0.3}
                    flickerChance={0.1}
                />
            </div>
        </Container>
    );
};
