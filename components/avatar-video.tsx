"use client"

import { useEffect, useState } from "react"

interface AvatarVideoProps {
  vimeoId: string
  name: string
  accentColor: string
}

export function AvatarVideo({ vimeoId, name, accentColor }: AvatarVideoProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="relative group cursor-pointer">
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"
        style={{ backgroundColor: accentColor }}
      />
      
      {/* Video container with mask */}
      <div className="relative aspect-square w-full max-w-[300px] mx-auto overflow-hidden rounded-full border-2 border-white/10">
        <div className="absolute inset-0 bg-black" /> {/* Black background for better keying */}
        {isClient && (
          <div className="absolute inset-0 w-full h-full">
            <iframe
              src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0&transparent=1`}
              className="absolute w-[300%] h-[300%] -left-[100%] -top-[100%]"
              allow="autoplay; fullscreen"
              style={{
                willChange: 'transform',
                mixBlendMode: 'luminosity',
                filter: 'contrast(1.1) brightness(1.1)'
              }}
            />
          </div>
        )}
      </div>

      {/* Name label */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
      </div>
    </div>
  )
} 