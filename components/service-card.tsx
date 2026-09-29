"use client"

import { ArrowUpRight } from "lucide-react"

interface ServiceCardProps {
  number: string
  title: string
  description: string
  tags: string[]
}

export function ServiceCard({ number, title, description, tags }: ServiceCardProps) {
  return (
    <div className="group border-t border-white/20 py-12 hover:bg-aimd-purple/10 transition-colors duration-500 cursor-pointer">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-start justify-between gap-8">
        <div className="font-baskerville text-primary text-xl">({number})</div>
        <div className="flex-1">
          <h3 className="font-aileron text-5xl md:text-7xl font-bold uppercase text-aimd-white mb-4 group-hover:translate-x-4 transition-transform duration-300">
            {title}
          </h3>
          <p className="font-baskerville text-white/70 max-w-2xl mb-6">{description}</p>
          <div className="flex gap-4 flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 border border-white/30 rounded-full text-white/60 font-aileron text-sm uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="md:self-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:rotate-45">
          <ArrowUpRight className="w-20 h-20 text-primary" />
        </div>
      </div>
    </div>
  )
}
