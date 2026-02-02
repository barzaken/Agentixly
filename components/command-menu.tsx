"use client"

import * as React from "react"
import { useAppStore } from "@/store/app-store"

interface CommandMenuProps {
    compact?: boolean
}

export function CommandMenu({ compact = false }: CommandMenuProps) {
    const { setCommandMenuOpen, toggleCommandMenu } = useAppStore()

    // Toggle the menu when ⌘K is pressed
    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                toggleCommandMenu()
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [toggleCommandMenu])
    
    const button = (
        <button
            onClick={() => setCommandMenuOpen(true)}
            type="button"
            className={`${compact ? 'w-full' : 'w-full'} rounded-md bg-gray-100 dark:bg-neutral-900 cursor-pointer h-8 flex items-center flex-row gap-2 justify-between border border-divide text-sm pl-2 pr-1.5`}
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

    if (compact) {
        return button
    }

    return (
        <div className="flex flex-col gap-4">
            {button}
        </div>
    )
}
