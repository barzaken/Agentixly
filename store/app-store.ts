import { create } from 'zustand'

export type Component = {
  slug: string
  name: string
  type: string
  dependencies: string[]
  registryDependencies: string[]
}

interface AppStore {
  // Command menu modal state
  commandMenuOpen: boolean
  setCommandMenuOpen: (open: boolean) => void
  toggleCommandMenu: () => void
  
  // Current component state (shared across the app)
  currentComponentSlug: string | null
  setCurrentComponentSlug: (slug: string | null) => void
  
  // Components data (shared across the app)
  components: Component[]
  componentsLoading: boolean
  setComponents: (components: Component[]) => void
  setComponentsLoading: (loading: boolean) => void
  fetchComponents: () => Promise<void>
}

export const useAppStore = create<AppStore>((set, get) => ({
  // Command menu modal state
  commandMenuOpen: false,
  setCommandMenuOpen: (open) => set({ commandMenuOpen: open }),
  toggleCommandMenu: () => set((state) => ({ commandMenuOpen: !state.commandMenuOpen })),
  
  // Current component state
  currentComponentSlug: null,
  setCurrentComponentSlug: (slug) => set({ currentComponentSlug: slug }),
  
  // Components data
  components: [],
  componentsLoading: true,
  setComponents: (components) => set({ components }),
  setComponentsLoading: (loading) => set({ componentsLoading: loading }),
  fetchComponents: async () => {
    // Only fetch if components haven't been loaded yet
    if (get().components.length > 0) {
      set({ componentsLoading: false })
      return
    }

    set({ componentsLoading: true })
    try {
      const response = await fetch('/api/components')
      if (response.ok) {
        const data = await response.json()
        set({ components: data, componentsLoading: false })
      } else {
        set({ componentsLoading: false })
      }
    } catch (error) {
      console.error('Failed to fetch components:', error)
      set({ componentsLoading: false })
    }
  },
}))

// Initialize components fetching when the store is first used in the browser
if (typeof window !== 'undefined') {
  // Fire-and-forget; errors are already handled inside fetchComponents
  useAppStore.getState().fetchComponents()
}
