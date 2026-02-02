"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
    Command,
    CommandDialog as CommandDialogPrimitive,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { PackageIcon } from "lucide-react"
import { useAppStore } from "@/store/app-store"

export function CommandDialog() {
    const { 
        commandMenuOpen, 
        components, 
        componentsLoading, 
        setCommandMenuOpen,
        setCurrentComponentSlug 
    } = useAppStore()
    const router = useRouter()
    const lastNavigatedSlugRef = React.useRef<string | null>(null)
    
    const handleSelectComponent = (slug: string) => {
        setCommandMenuOpen(false)
        setCurrentComponentSlug(slug)
        router.push(`/components/${slug}`)
    }

    // Track value changes - this fires for both typing and arrow key navigation
    // When navigating with arrows, cmdk sets value to the item's full value
    // When typing, value is the search text, so exact match won't work
    const handleValueChange = React.useCallback((value: string) => {
        // Find the component that exactly matches the highlighted value
        const component = components.find(
            (comp) => `${comp.name} ${comp.slug}` === value
        )

        // Navigate immediately when a component is highlighted via arrow keys
        // (exact match means it's not just search text)
        if (component && component.slug !== lastNavigatedSlugRef.current) {
            lastNavigatedSlugRef.current = component.slug
            setCurrentComponentSlug(component.slug)
            router.push(`/components/${component.slug}`)
        }
    }, [components, router, setCurrentComponentSlug])

    // Reset when dialog closes
    React.useEffect(() => {
        if (!commandMenuOpen) {
            lastNavigatedSlugRef.current = null
        }
    }, [commandMenuOpen])

    return (
        <CommandDialogPrimitive open={commandMenuOpen} onOpenChange={setCommandMenuOpen}>
            <Command onValueChange={handleValueChange}>
                <CommandInput placeholder="Search components..." />
                <CommandList>
                    <CommandEmpty>
                        {componentsLoading ? "Loading components..." : "No components found."}
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
        </CommandDialogPrimitive>
    )
}
