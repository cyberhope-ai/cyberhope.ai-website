import type { Metadata } from 'next'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'CyberHope™ - Skills Verified. Futures Unlocked.',
  description: 'AI-powered workforce platform replacing résumés with SkillDNA™, built as part of Precognition OS™. From the creators of Hope Training Academy.',
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
          <Footer />
        </ThemeProvider>
        <Toaster />
        <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
