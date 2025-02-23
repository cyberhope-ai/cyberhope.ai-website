"use client"

import { AvatarVideo } from "./avatar-video"

export function AvatarSection() {
  const avatars = [
    {
      name: "Cyan",
      vimeoId: "1059530948",
      thumbnailUrl: "/avatars/cyan-thumb.jpg",
      accentColor: "#00ffff"
    },
    {
      name: "Blue",
      vimeoId: "1059530911",
      thumbnailUrl: "/avatars/blue-thumb.jpg",
      accentColor: "#0000ff"
    },
    {
      name: "Green",
      vimeoId: "1059530882",
      thumbnailUrl: "/avatars/green-thumb.jpg",
      accentColor: "#00ff00"
    }
  ]

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
            <div key={avatar.name} className="relative pt-8">
              <AvatarVideo {...avatar} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 