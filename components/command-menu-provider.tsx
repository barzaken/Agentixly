"use client"

import { useEffect } from "react"
import { useAppStore } from "@/store/app-store"

export function CommandMenuProvider() {
  const fetchComponents = useAppStore((state) => state.fetchComponents)

  useEffect(() => {
    fetchComponents()
  }, [fetchComponents])

  return null
}
