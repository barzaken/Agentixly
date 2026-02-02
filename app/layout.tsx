import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { interDisplay } from '@/fonts/inter-display/inter'
import { dmMono } from '@/fonts/dm-mono'
import { CleanNavbar } from '@/components/clean-navbar'
import { SonnerProvider } from '@/components/sonner-provider'
import { CommandMenuProvider } from '@/components/command-menu-provider'
import { CommandDialog } from '@/components/command-dialog'
export const metadata: Metadata = {
  title: 'Agentix - The AI UI Pack',
  description: 'A clean, futuristic AI-themed UI component library for React and Next.js',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Agentix',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="no-scrollbar">
      <body className={`${interDisplay.variable} ${dmMono.variable} font-primary`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CommandMenuProvider />
          <CommandDialog />
          <CleanNavbar />
          {children}
          <SonnerProvider />
        </ThemeProvider>
      </body>
    </html>
  )
}

