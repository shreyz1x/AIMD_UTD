import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getProject, projects } from "@/lib/projects"
import Link from "next/link"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-12 px-4 md:px-8">
        <Link href="/projects" className="font-aileron text-xs uppercase text-primary hover:underline">
          All projects
        </Link>
        <h1 className="font-aileron text-[10vw] md:text-[6vw] leading-[0.9] uppercase tracking-tighter mt-6">
          {project.title}
        </h1>
        <p className="font-baskerville text-primary mt-6 uppercase text-sm">
          {project.category} — {project.year}
        </p>
      </section>

      <section className="px-4 md:px-8 pb-16">
        <img src={project.image} alt={project.title} className="w-full max-h-[70vh] object-cover border-2 border-border" />
      </section>

      <section className="px-4 md:px-8 pb-24 max-w-3xl">
        <p className="font-baskerville text-2xl md:text-3xl leading-tight">{project.summary}</p>
        <div className="space-y-6 mt-10">
          {project.description.map((paragraph) => (
            <p key={paragraph} className="font-baskerville text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
