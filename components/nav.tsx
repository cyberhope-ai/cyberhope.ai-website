"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-black/90 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-white">
                CyberHope.ai
              </Link>
            </div>
            <div>
              <Button asChild className="bg-white text-black hover:bg-white/90">
                <Link href="/contact">Book a Demo →</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

