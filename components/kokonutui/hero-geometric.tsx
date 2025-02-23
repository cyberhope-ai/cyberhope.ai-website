"use client"

import { motion, useAnimationControls } from "framer-motion"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

function CircularShape({
  className,
  delay = 0,
  size = 200,
  gradient = "from-white/[0.08]",
}: {
  className?: string
  delay?: number
  size?: number
  gradient?: string
}) {
  const controls = useAnimationControls()

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          x: Math.random() * 100 - 50,
          y: Math.random() * 100 - 50,
          transition: {
            duration: Math.random() * 10 + 5,
            ease: "easeInOut",
          },
        })
      }
    }
    animate()
  }, [controls])

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={controls}
        style={{
          width: size,
          height: size,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function HeroGeometric() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <CircularShape
            key={i}
            delay={i * 0.2}
            size={Math.random() * 300 + 100}
            gradient={`from-${["indigo", "rose", "violet", "amber", "cyan"][i % 5]}-500/[0.15]`}
            className={`left-[${Math.random() * 100}%] top-[${Math.random() * 100}%]`}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="text-white">Power </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400">
            Enterprise AI
          </span>
          <br />
          <span className="text-white">With Your Data</span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 mb-8 max-w-3xl mx-auto">
          Make the best models with the best data. CyberHope AI Engine powers nearly every major foundation model,
          leveraging your enterprise data to unlock the value of AI.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Button size="lg" className="bg-white text-black hover:bg-white/90">
            Book a Demo →
          </Button>
          <Button size="lg" variant="ghost" className="text-white border border-white/20">
            Build AI →
          </Button>
        </div>

        <div className="mt-24 text-center">
          <p className="text-sm text-white/60 mb-8">CyberHope works with leading AI companies & enterprises</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 grayscale">
            {/* Add partner logos here */}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  )
}

