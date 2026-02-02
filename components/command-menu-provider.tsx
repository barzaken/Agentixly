"use client"

import { useEffect } from "react"
import { useAppStore } from "@/store/app-store"

export function CommandMenuProvider() {
  const fetchComponents = useAppStore((state) => state.fetchComponents)
  const toggleCommandMenu = useAppStore((state) => state.toggleCommandMenu)

  useEffect(() => {
    fetchComponents()
  }, [fetchComponents])

  // Single keyboard event listener for Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        toggleCommandMenu()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [toggleCommandMenu])

  return null
}
