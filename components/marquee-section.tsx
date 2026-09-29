"use client"

import { Marquee } from "./marquee"

export function MarqueeSection() {
  return (
    <section className="bg-aimd-surface text-primary py-20 overflow-hidden -skew-y-2 origin-left">
      <Marquee text="MEDICINE • RESEARCH • DIAGNOSTICS • IMAGING •" direction={1} className="opacity-80" />
      <Marquee text="HEALTHCARE • UTD • AGENTS • ETHICS •" direction={-1} className="text-aimd-white opacity-90" />
    </section>
  )
}
