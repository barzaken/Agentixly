"use client"

import { useState } from "react"
import { Button } from "@/components/ui/container/button"
import { Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Logo } from "@/components/logo"
import { ModeToggle } from "./mode-toggle"
export function CleanNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 px-4 xs:px-0 right-0 z-[9999]  backdrop-blur-2xl border-b border-divide">
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
          <div className="hidden md:block">
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
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="">Join Waitlist</Button>
            {/* <ModeToggle /> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-red-500 transition-colors duration-200"
            >
              {isOpen ? <HugeiconsIcon icon={Cancel01Icon} className="size-4 shrink-0 text-gray-600" /> : <HugeiconsIcon icon={Menu01Icon} className="size-4 shrink-0 text-gray-600" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-divide">
              <a
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
              </a>
              <div className="px-3 py-2">
                <Button className="w-full hover:bg-red-600 text-white font-geist border-0">
                  Join Waitlist
                </Button>
              </div>
              <ModeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
