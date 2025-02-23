"use client"

import { useEffect, useState } from "react"

interface VideoSectionProps {
  vimeoId: string
  title: string
  subtitle?: string
}

export function VideoSection({ vimeoId, title, subtitle }: VideoSectionProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="py-16 bg-[#030303]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-2xl">
          {isClient && (
            <iframe
              src={`https://player.vimeo.com/video/${vimeoId}?autoplay=0&title=0&byline=0&portrait=0`}
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  )
} 