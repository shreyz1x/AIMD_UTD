"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface MarqueeProps {
  text: string
  direction?: number
  className?: string
}

export function Marquee({ text, direction = 1, className }: MarqueeProps) {
  return (
    <div className={cn("flex overflow-hidden whitespace-nowrap py-4", className)}>
      <motion.div
        className="flex gap-8"
        animate={{ x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, ease: "linear", duration: 90 }}
      >
        {[...Array(8)].map((_, i) => (
          <span key={i} className="text-[10vw] font-black uppercase leading-none tracking-tighter font-aileron">
            {text} •
          </span>
        ))}
      </motion.div>
    </div>
  )
}
