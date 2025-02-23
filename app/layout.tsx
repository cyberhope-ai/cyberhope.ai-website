import type { Metadata } from 'next'
import { Nav } from '@/components/nav'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

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
        <Nav />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
