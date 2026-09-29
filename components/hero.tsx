"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Globe } from "lucide-react"

export function Hero() {
  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <section className="relative min-h-screen bg-background bg-[radial-gradient(ellipse_at_top,rgba(151,21,169,0.35),transparent_65%)] flex flex-col overflow-hidden pt-20">
      <div className="container mx-auto px-4 relative z-10 flex-1 flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="font-aileron text-[16vw] md:text-[14vw] leading-[0.85] font-black tracking-tighter text-primary text-center drop-shadow-[0_0_35px_rgba(151,21,169,0.7)]"
          >
            &ldquo;AI in MD.&rdquo;
          </motion.h1>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-3 items-end mb-8 border-t-2 border-white/15 pt-4">
          <div className="font-aileron text-lg md:text-xl font-bold uppercase md:justify-self-start">
            <Globe className="inline mr-2 mb-1" />
            Based in UTD
          </div>

          <motion.div
            style={{ rotate }}
            className="hidden md:flex md:justify-self-center items-center justify-center w-32 h-32 bg-aimd-purple rounded-full relative"
          >
            <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
              <svg viewBox="0 0 100 100" width="100" height="100" className="w-full h-full fill-white">
                <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                <text className="text-[12px] font-aileron font-bold uppercase tracking-widest">
                  <textPath href="#curve">Scroll Down • Scroll Down •</textPath>
                </text>
              </svg>
            </div>
            <ArrowDown className="text-aimd-white w-8 h-8" />
          </motion.div>

          <div className="font-aileron text-lg md:text-xl font-bold uppercase text-right md:justify-self-end">
            Artificial Intelligence in Medicine <br />
            Since 2026
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[40vw] h-[40vw] bg-aimd-purple rounded-full blur-[100px] opacity-30 pointer-events-none" />
    </section>
  )
}
