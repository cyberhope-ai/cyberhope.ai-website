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
          <div style={{ padding: "100% 0 0 0", position: "relative" }}>
            <iframe
              src={`https://player.vimeo.com/video/${vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&loop=1&transparent=1&muted=1&controls=0`}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                mixBlendMode: "normal",
                filter: "contrast(1.2) brightness(1.2)",
                zIndex: 10
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