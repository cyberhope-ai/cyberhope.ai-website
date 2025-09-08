"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="bg-black/90 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold text-white">
                CyberHope™
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link href="/about" className="text-gray-300 hover:text-white transition">
                  About
                </Link>
                <Link href="/press" className="text-gray-300 hover:text-white transition">
                  Press
                </Link>
              </div>
            </div>
            <div>
              <Button asChild className="bg-white text-black hover:bg-white/90">
                <Link href="/contact">Contact →</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

