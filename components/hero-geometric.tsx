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
  index = 0,
}: {
  className?: string
  size?: number
  gradient?: string
  initialX: number
  initialY: number
  index?: number
}) {
  const [position, setPosition] = useState({ x: initialX, y: initialY })
  const [isClient, setIsClient] = useState(false)
  const [time, setTime] = useState(0)

  useEffect(() => {
    setIsClient(true)
    const moveShape = () => {
      if (typeof window !== 'undefined') {
        const maxX = Math.max(window.innerWidth - size, 0)
        const maxY = Math.max(window.innerHeight - size, 0)
        
        // Create unique movement patterns for each circle
        const baseRadius = Math.min(maxX, maxY) / 3
        const radiusX = baseRadius * (1 + Math.sin(index * 0.5)) // Vary the radius based on index
        const radiusY = baseRadius * (1 + Math.cos(index * 0.5))
        
        // Use time and index to create different paths
        const angleOffset = (index * Math.PI) / 3 // Spread circles around
        const speedMultiplier = 0.8 + (index % 3) * 0.4 // Different speeds
        const currentAngle = (time * speedMultiplier + angleOffset) % (2 * Math.PI)
        
        // Calculate center point with offset based on index
        const centerX = maxX / 2 + Math.cos(index) * (maxX / 6)
        const centerY = maxY / 2 + Math.sin(index) * (maxY / 6)
        
        // Calculate new position using Lissajous curves for more varied movement
        const newX = centerX + radiusX * Math.cos(currentAngle)
        const newY = centerY + radiusY * Math.sin(currentAngle * (1 + index * 0.2))
        
        // Ensure position stays within bounds
        setPosition({
          x: Math.max(0, Math.min(maxX, newX)),
          y: Math.max(0, Math.min(maxY, newY))
        })
        
        setTime(t => t + 0.02) // Increment time for continuous movement
      }
    }

    // Use different intervals for each circle
    const baseInterval = 50 // 50ms base interval for smooth animation
    const interval = setInterval(moveShape, baseInterval)
    return () => clearInterval(interval)
  }, [size, index, time])

  if (!isClient) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: initialX, y: initialY }}
      animate={{
        opacity: 1,
        scale: 1,
        x: position.x,
        y: position.y,
      }}
      transition={{
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
        x: { duration: 0.2, ease: "linear" },
        y: { duration: 0.2, ease: "linear" },
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
  const [isClient, setIsClient] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setIsClient(true)
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }

      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

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

  if (!isClient) {
    return null
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303] pt-16">
      <div className="absolute inset-0 overflow-hidden">
        {circles.map((circle, index) => (
          <CircularShape
            key={index}
            index={index}
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
          <span className="text-white">AI Innovation.</span>
          <br />
          <span className="text-white">Powered by Google Cloud.</span>
        </h2>

        <p className="text-lg md:text-xl text-white/60 mb-8 max-w-3xl mx-auto px-4">
          Building next-generation AI solutions with enterprise-grade infrastructure. Partnering with 
          industry leaders to deliver scalable, secure technology platforms.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Button size="lg" className="bg-white text-black hover:bg-white/90" asChild>
            <a href="https://forms.gle/Gq7ryAujxxEgehU26" target="_blank" rel="noopener noreferrer">Contact Us →</a>
          </Button>
        </div>
      </div>
    </div>
  )
}

