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
    
    // Load Vimeo player API
    const script = document.createElement('script')
    script.src = "https://player.vimeo.com/api/player.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
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
          <div className="absolute inset-0">
            <iframe
              src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&loop=1&autopause=0&muted=0&controls=0&background=0&app_id=58479`}
              frameBorder="0"
              allow="autoplay; fullscreen"
              className="absolute w-[150%] h-[150%] -left-[25%] -top-[25%]"
              style={{
                mixBlendMode: "luminosity",
                filter: "contrast(1.1) brightness(1.1)"
              }}
              title={name}
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