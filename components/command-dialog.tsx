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
    const { commandMenuOpen, components, componentsLoading, setCommandMenuOpen } = useAppStore()
    const router = useRouter()
    
    const handleSelectComponent = (slug: string) => {
        setCommandMenuOpen(false)
        router.push(`/components/${slug}`)
    }

    return (
        <CommandDialogPrimitive open={commandMenuOpen} onOpenChange={setCommandMenuOpen}>
            <Command>
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
