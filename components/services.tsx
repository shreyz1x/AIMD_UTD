"use client"

import { Star } from "lucide-react"
import { ServiceCard } from "./service-card"

const services = [
  {
    title: "AIMD Projects",
    description:
      "Work on open-ended AI prompts and challenges designed by AIMD. Build innovative applications that combine machine learning and medicine — from diagnostic tools to research automation.",
    tags: ["Machine Learning", "Medicine", "Research"],
  },
  {
    title: "AIMD Apply",
    description:
      "Companies and research organizations bring us real-world healthcare problems. Students can apply to join these projects and collaborate with industry partners to build AI solutions with real impact.",
    tags: ["Students", "Industry", "Collaboration"],
  },
  {
    title: "AIMD Officer Team",
    description:
      "Lead AIMD's vision, manage events and partnerships, and guide our members. Officers shape the direction of the club and help expand the reach of AI in medicine and diagnostics.",
    tags: ["Leadership", "Events", "Partnerships"],
  },
]

export function Services() {
  return (
    <section className="bg-background min-h-screen py-32 relative">
      <div className="container mx-auto px-4 mb-20 flex items-end justify-between">
        <h2 className="font-aileron text-[8vw] md:text-[6vw] leading-none text-aimd-white uppercase font-black">
          Ways to
          <br />
          <span className="text-primary">Get Involved</span>
        </h2>
        <Star className="w-24 h-24 text-primary animate-pulse hidden md:block" fill="currentColor" />
      </div>

      <div className="flex flex-col">
        {services.map((s, i) => (
          <ServiceCard key={i} number={`0${i + 1}`} title={s.title} description={s.description} tags={s.tags} />
        ))}
      </div>
    </section>
  )
}
