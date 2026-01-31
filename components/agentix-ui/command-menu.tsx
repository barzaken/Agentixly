"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { PackageIcon } from "lucide-react"

interface CommandMenuProps {
    compact?: boolean
}

type Component = {
    slug: string
    name: string
    type: string
    dependencies: string[]
    registryDependencies: string[]
}

// Demo data for components
const DEMO_COMPONENTS: Component[] = [
    {
        slug: "ai-chat-input",
        name: "AI Chat Input",
        type: "registry:ui",
        dependencies: ["lucide-react", "framer-motion"],
        registryDependencies: []
    },
    {
        slug: "ai-chat-input-2",
        name: "AI Chat Input 2",
        type: "registry:ui",
        dependencies: ["lucide-react"],
        registryDependencies: []
    },
    {
        slug: "social-card",
        name: "Social Card",
        type: "registry:ui",
        dependencies: [],
        registryDependencies: []
    },
    {
        slug: "subscription-card",
        name: "Subscription Card",
        type: "registry:ui",
        dependencies: [],
        registryDependencies: []
    },
    {
        slug: "team-invitation",
        name: "Team Invitation",
        type: "registry:ui",
        dependencies: [],
        registryDependencies: []
    },
    {
        slug: "x-card",
        name: "X Card",
        type: "registry:ui",
        dependencies: [],
        registryDependencies: []
    },
    {
        slug: "rotating-logos",
        name: "Rotating Logos",
        type: "registry:ui",
        dependencies: [],
        registryDependencies: []
    },
    {
        slug: "divide",
        name: "Divide",
        type: "registry:ui",
        dependencies: [],
        registryDependencies: []
    }
]

export function CommandMenu({ compact = false }: CommandMenuProps) {
    const [open, setOpen] = React.useState(false)
    const router = useRouter()
    
    // Use demo data instead of fetching
    const components = DEMO_COMPONENTS

    // Toggle the menu when ⌘K is pressed
    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open: boolean) => !open as boolean)
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])
    
    const handleSelectComponent = (slug: string) => {
        router.push(`/components/${slug}`)
        setOpen(false)
    }
    
    const button = (
        <button
            onClick={() => setOpen(true)}
            type="button"
            className={`${compact ? 'w-full' : 'w-full max-w-xs'} self-center rounded-md bg-gray-100 dark:bg-neutral-900 cursor-pointer h-8 flex items-center flex-row gap-2 justify-between border border-divide text-sm pl-2 pr-1.5`}
        >
            <span className="text-gray-700 dark:text-gray-600 truncate max-[640px]:hidden">
                Search Components
            </span>
            <span className="text-gray-700 dark:text-gray-600 truncate min-[640px]:hidden">
                Search...
            </span>
            <kbd
                className="font-sans shadow-[0_0_0_1px_rgb(0_0_0_/0.1)] dark:shadow-[0_0_0_1px_rgb(255_255_255_/0.2)] !leading-[1.7em] inline-block text-center rounded-sm text-xs [&>span]:text-xs [&>span]:!leading-[1.7em] py-0 h-5 px-1.5 min-w-5 min-h-5 ml-0.5 leading-5 bg-background text-gray-900 dark:text-gray-100 shrink-0"
                data-geist-kbd=""
                data-version="v1"
            >
                <span>⌘ K</span>
            </kbd>
        </button>
    )

    const renderCommandContent = () => (
        <Command>
            <CommandInput placeholder="Search components..." />
            <CommandList>
                <CommandEmpty>
                    No components found.
                </CommandEmpty>
                {components.length > 0 && (
                    <CommandGroup heading="Components">
                        {components.map((component) => (
                            <CommandItem
                                key={component.slug}
                                value={`${component.name} ${component.slug}`}
                                onSelect={() => handleSelectComponent(component.slug)}
                            >
                                <PackageIcon className="mr-2 h-4 w-4" />
                                <span>{component.name}</span>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                )}
            </CommandList>
        </Command>
    )

    if (compact) {
        return (
            <>
                {button}
                <CommandDialog open={open} onOpenChange={setOpen}>
                    {renderCommandContent()}
                </CommandDialog>
            </>
        )
    }

    return (
        <div className="flex flex-col gap-4">
            {button}
            <CommandDialog open={open} onOpenChange={setOpen}>
                {renderCommandContent()}
            </CommandDialog>
        </div>
    )
}
