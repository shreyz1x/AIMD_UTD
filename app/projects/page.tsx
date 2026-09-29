import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { projects } from "@/lib/projects"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-4 md:px-8">
        <h1 className="font-aileron text-[12vw] md:text-[8vw] leading-[0.85] uppercase tracking-tighter">
          Notable
          <br />
          <span className="text-primary">Projects</span>
        </h1>
        <p className="font-baskerville text-muted-foreground mt-8 max-w-xl">
          Everything you need to automate operations, boost productivity, and bring AI into healthcare. Open a project
          to read more.
        </p>
      </section>

      <section className="px-4 md:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.slug}
              className="group relative overflow-hidden border-2 border-border bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-aimd-black/0 group-hover:bg-aimd-black/70 transition-colors duration-300 flex items-end">
                <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-baskerville text-xs text-primary uppercase">
                    {project.category} — {project.year}
                  </span>
                  <h3 className="font-aileron text-3xl text-aimd-white uppercase tracking-tight mt-2">{project.title}</h3>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-aimd-purple flex items-center justify-center">
                    <ArrowUpRight className="text-aimd-white" size={24} />
                  </div>
                </div>
              </div>
              <div className="p-4 bg-card border-t-2 border-border group-hover:bg-aimd-purple group-hover:text-aimd-white transition-colors">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-aileron text-sm uppercase">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-aileron text-sm uppercase text-right">{project.title}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
