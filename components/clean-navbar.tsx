"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { ModeToggle } from "./mode-toggle"
import { AnimatePresence, motion } from "motion/react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { CommandMenu } from "./command-menu"
export function CleanNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isComponentsPage = pathname?.startsWith("/components")
  const router = useRouter()
  return (
    <nav className="fixed top-0 left-0 px-4 xs:px-0 right-0 z-40  backdrop-blur-2xl border-b border-divide">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center h-12">
          {/* Logo - Desktop */}
          <div className="hidden md:block flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop CTA + Theme toggle */}
          <div className="hidden md:flex items-center gap-4 ml-auto">
            {isComponentsPage ? (
              <div className="w-64">
                <CommandMenu compact />
              </div>
            ) : (
              <Button
                onClick={() => router.push("/components")}
                variant="secondary"
                size="sm"
              >
                View Components
              </Button>
            )}
                        <ModeToggle />

          </div>

          {/* Mobile: Logo | CommandMenu (centered) | Theme toggle + menu button */}
          <div className="md:hidden flex items-center w-full">
            <div className="flex-shrink-0">
              <Logo />
            </div>
            {isComponentsPage && (
              <div className="flex-1 flex justify-center px-2">
                <div className="w-full max-w-1/2">
                  <CommandMenu compact />
                </div>
              </div>
            )}
            <div className={`flex items-center gap-3 ${isComponentsPage ? 'flex-shrink-0' : 'ml-auto'}`}>
              <ModeToggle />
              {!isComponentsPage && <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-red-500 transition-colors duration-200"
              >
                {isOpen ? (
                  <X className="size-4 shrink-0 text-gray-600" />
                ) : (
                  <Menu className="size-4 shrink-0 text-gray-600" />
                )}
              </button>}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* <a
                  href="/#technology"
                  className="block px-3 py-2 font-geist  hover:text-red-500 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Technology
                </a>
                <a
                  href="/#safety"
                  className="block px-3 py-2 font-geist  hover:text-red-500 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Safety
                </a>
                <a
                  href="/#faq"
                  className="block px-3 py-2 font-geist  hover:text-red-500 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  FAQ
                </a> */}
                {!isComponentsPage && (
                  <div className="px-3 py-2 flex items-center justify-between gap-3">
                    <Button
                      onClick={() => router.push("/components")}
                      variant="secondary"
                      size="sm"
                    >
                      View Components
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
