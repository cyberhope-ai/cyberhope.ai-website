import type { Metadata } from 'next'
import { Nav } from '@/components/nav'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'CyberHope.ai',
  description: 'Empower Your Passion. Unlock Your Potential with CyberHope AI Engine.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-black">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
        </ThemeProvider>
        <Toaster />
        <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
