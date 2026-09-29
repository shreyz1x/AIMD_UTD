"use client"

import { Menu, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Applications", href: "/applications" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-8">
      <Link href="/" className="flex items-center gap-2">
        <img src="/aimd-logo.png" alt="AIMD" className="h-9 md:h-11 w-auto" />
      </Link>

      <div className="hidden md:flex items-center gap-1 lg:gap-2 bg-aimd-surface/80 p-2 rounded-full backdrop-blur-sm border border-white/10">
        {navItems.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`)
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`px-3 lg:px-5 py-2 rounded-full font-aileron text-xs lg:text-sm transition-colors uppercase ${
                active
                  ? "bg-aimd-purple text-aimd-white"
                  : "bg-transparent text-aimd-white/80 hover:bg-aimd-white hover:text-aimd-black"
              }`}
            >
              {item.label}
            </Link>
          )
        })}
      </div>

      <div className="flex items-center gap-2">
        <button className="md:hidden p-2 bg-aimd-surface text-aimd-white border border-white/10 rounded-full">
          <Menu size={24} />
        </button>
        <a
          href="https://www.instagram.com/aimd_utd?stkn=MWVqNGc5b2l4eXgzdA=="
          target="_blank"
          rel="noreferrer"
          aria-label="AIMD on Instagram"
          className="hidden md:flex p-3 bg-aimd-surface text-aimd-white rounded-full hover:bg-aimd-white hover:text-aimd-black transition-colors border border-white/10"
        >
          <Instagram size={20} />
        </a>
        <a
          href="https://www.linkedin.com/company/aimdutd/"
          target="_blank"
          rel="noreferrer"
          aria-label="AIMD on LinkedIn"
          className="hidden md:flex p-3 bg-aimd-surface text-aimd-white rounded-full hover:bg-aimd-white hover:text-aimd-black transition-colors border border-white/10"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </nav>
  )
}
