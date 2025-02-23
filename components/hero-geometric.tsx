"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

function CircularShape({
  className,
  size = 200,
  gradient = "from-white/[0.08]",
  initialX,
  initialY,
}: {
  className?: string
  size?: number
  gradient?: string
  initialX: number
  initialY: number
}) {
  const [position, setPosition] = useState({ x: initialX, y: initialY })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const moveShape = () => {
      if (typeof window !== 'undefined') {
        const newX = Math.random() * window.innerWidth
        const newY = Math.random() * window.innerHeight
        setPosition({ x: newX, y: newY })
      }
    }

    const interval = setInterval(moveShape, Math.random() * 5000 + 5000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, x: initialX, y: initialY }}
      animate={{
        opacity: 1,
        scale: 1,
        x: position.x,
        y: position.y,
      }}
      transition={{
        duration: Math.random() * 10 + 10,
        ease: "easeInOut",
      }}
      className={`absolute ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className={`w-full h-full rounded-full bg-gradient-to-r ${gradient} to-transparent backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]`}
      />
    </motion.div>
  )
}

export default function HeroGeometric() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })

      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (!mounted) return null

  const circles = [
    { size: 400, gradient: "from-indigo-500/[0.15]", initialX: -100, initialY: -100 },
    {
      size: 300,
      gradient: "from-rose-500/[0.15]",
      initialX: Math.max(windowSize.width - 150, 0),
      initialY: windowSize.height / 4,
    },
    {
      size: 250,
      gradient: "from-amber-500/[0.15]",
      initialX: windowSize.width / 4,
      initialY: Math.max(windowSize.height - 125, 0),
    },
    {
      size: 200,
      gradient: "from-cyan-500/[0.15]",
      initialX: (windowSize.width * 3) / 4,
      initialY: (windowSize.height * 2) / 3,
    },
    { size: 150, gradient: "from-emerald-500/[0.15]", initialX: windowSize.width / 2, initialY: 50 },
    { size: 180, gradient: "from-violet-500/[0.15]", initialX: 100, initialY: windowSize.height / 2 },
  ]

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303] pt-16">
      <div className="absolute inset-0 overflow-hidden">
        {circles.map((circle, index) => (
          <CircularShape
            key={index}
            size={circle.size}
            gradient={circle.gradient}
            initialX={circle.initialX}
            initialY={circle.initialY}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400">
            CyberHope.ai
          </span>
        </h1>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          <span className="text-white">Empower Your Passion.</span>
          <br />
          <span className="text-white">Unlock Your Potential</span>
        </h2>

        <p className="text-lg md:text-xl text-white/60 mb-8 max-w-3xl mx-auto px-4">
          Make the best models with the best data. CyberHope AI Engine powers nearly every major foundation model,
          leveraging your enterprise data to unlock the value of AI.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Button size="lg" className="bg-white text-black hover:bg-white/90" asChild>
            <a href="/contact">Book a Demo →</a>
          </Button>
        </div>
      </div>
    </div>
  )
}

