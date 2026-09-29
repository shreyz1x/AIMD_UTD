"use client"

export function Footer() {
  return (
    <footer className="bg-background bg-[radial-gradient(ellipse_at_bottom,rgba(151,21,169,0.25),transparent_65%)] pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-aileron text-[10vw] leading-none font-black uppercase mb-8 text-primary drop-shadow-[0_0_30px_rgba(151,21,169,0.6)]">{"Let's Talk"}</h2>
          <a
            href="mailto:hello@AIMD_utd"
            className="px-12 py-4 bg-aimd-white text-aimd-black rounded-full font-aileron text-xl uppercase hover:scale-105 transition-transform"
          >
            hello@AIMD_utd
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mt-20 border-t-2 border-white/15 pt-8 gap-4">
          <div className="font-aileron font-bold uppercase text-sm text-muted-foreground">
            © 2026 Artificial Intelligence in Medicine
          </div>
          <div className="flex gap-8">
            {[
              { label: "Instagram", href: "https://www.instagram.com/aimd_utd?stkn=MWVqNGc5b2l4eXgzdA==" },
              { label: "LinkedIn", href: "https://www.linkedin.com/company/aimdutd/" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-aileron font-bold uppercase text-sm hover:underline decoration-2 text-foreground hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
