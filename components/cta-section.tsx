"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
}

export function CTASection({ title, description, buttonText }: CTASectionProps) {
  return (
    <section className="py-24 bg-[#3730A3]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">{title}</h2>
        <p className="text-xl text-white/80 mb-8">{description}</p>
        <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
          <a href="https://forms.gle/Gq7ryAujxxEgehU26" target="_blank" rel="noopener noreferrer">{buttonText}</a>
        </Button>
      </div>
    </section>
  )
}

