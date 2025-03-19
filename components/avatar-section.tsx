"use client"

import { useEffect, useState } from 'react'
import { AvatarVideo } from "./avatar-video"
import { getAvatars } from '@/lib/sanity-queries'

interface Avatar {
  _id: string
  name: string
  vimeoId: string
  accentColor: string
}

export function AvatarSection() {
  const [avatars, setAvatars] = useState<Avatar[]>([
    // Fallback data while loading
    {
      _id: "cyan",
      name: "Cyan",
      vimeoId: "1059530948",
      accentColor: "#00ffff"
    },
    {
      _id: "blue",
      name: "Blue",
      vimeoId: "1059530911",
      accentColor: "#0000ff"
    },
    {
      _id: "green",
      name: "Green",
      vimeoId: "1059530882",
      accentColor: "#00ff00"
    }
  ])
  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAvatars() {
      try {
        const data = await getAvatars()
        if (data && data.length > 0) {
          setAvatars(data)
        }
      } catch (error) {
        console.error("Error fetching avatars:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchAvatars()
  }, [])

  return (
    <section className="py-24 bg-[#030303]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Meet Your AI Assistants</h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Our AI personalities are here to guide you through the CyberHope.ai experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {avatars.map((avatar) => (
            <div key={avatar._id} className="relative pt-8">
              <AvatarVideo {...avatar} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 