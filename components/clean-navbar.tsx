"use client"

import { useState } from "react"
import { Button } from "@/components/ui/container/button"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { ModeToggle } from "./mode-toggle"
import { AnimatePresence, motion } from "motion/react"
import Link from "next/link"
export function CleanNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 px-4 xs:px-0 right-0 z-40  backdrop-blur-2xl sm:borderb border-divide">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          {/* <div className="flex-shrink-0">
            <h1 className="font-orbitron text-xl font-bold text-white">
              Neural<span className="text-red-500">Link</span>
            </h1>
          </div> */}
          <Logo />

          {/* Desktop Navigation */}
          {/* <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="/#technology"
                className="font-geist  hover:text-red-500 transition-colors duration-200"
              >
                Technology
              </a>
              <a href="/#safety" className="font-geist hover:text-red-500 transition-colors duration-200">
                Safety
              </a>
              <a href="/#faq" className="font-geist hover:text-red-500 transition-colors duration-200">
                FAQ
              </a>
            </div>
          </div> */}

          {/* Desktop CTA + Theme toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ModeToggle />
            <Button as={Link} href="/components" className="">
              Browse components
            </Button>
          </div>

          {/* Mobile theme toggle + menu button */}
          <div className="md:hidden flex items-center gap-3">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="size-4 shrink-0 text-gray-600" />
              ) : (
                <Menu className="size-4 shrink-0 text-gray-600" />
              )}
            </button>
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
                <div className="px-3 py-2 flex items-center justify-between gap-3">
                  <Button
                    as={Link}
                    href="/components"
                    className="flex-1 hover:bg-red-600 text-white font-geist border-0"
                  >
                    Browse components
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
