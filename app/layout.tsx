import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { interDisplay } from '@/fonts/inter-display/inter'
import { dmMono } from '@/fonts/dm-mono'
import { CleanNavbar } from '@/components/clean-navbar'
export const metadata: Metadata = {
  title: 'Agentixly - The AI UI Pack',
  description: 'A clean, futuristic AI-themed UI component library for React and Next.js',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Agentixly',
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
          <CleanNavbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

