import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

const applications = [
  {
    number: "01",
    title: "Apply",
    description:
      "Companies and research organizations bring us real-world healthcare problems. Students can apply to join these projects and collaborate with industry partners to build AI solutions with real impact.",
    deliverables: ["Students", "Industry Partners", "Collaboration"],
  },
  {
    number: "02",
    title: "Officers",
    description:
      "Lead AIMD's vision, manage events and partnerships, and guide our members. Officers shape the direction of the club and help expand the reach of AI in medicine and diagnostics.",
    deliverables: ["Leadership", "Events", "Partnerships"],
  },
  {
    number: "03",
    title: "Projects",
    description:
      "Work on open-ended AI prompts and challenges designed by AIMD. Build innovative applications that combine machine learning and medicine — from diagnostic tools to research automation.",
    deliverables: ["Machine Learning", "Medicine", "Research"],
  },
]

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-4 md:px-8">
        <h1 className="font-aileron text-[12vw] md:text-[8vw] leading-[0.85] uppercase tracking-tighter">
          Our
          <br />
          <span className="text-primary">Applications</span>
        </h1>
        <p className="font-baskerville text-muted-foreground mt-8 max-w-xl">
          Three ways to get involved with AIMD at UT Dallas. Apply to join a project, step into an officer role, or
          build with the team.
        </p>
      </section>

      <section className="px-4 md:px-8 pb-24">
        <div className="border-t-2 border-border">
          {applications.map((application) => (
            <div
              key={application.number}
              className="group border-b-2 border-border py-12 hover:bg-aimd-purple hover:text-aimd-white transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <span className="font-baskerville text-primary text-sm group-hover:text-aimd-white">
                  {application.number}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h2 className="font-aileron text-4xl md:text-6xl uppercase tracking-tight">{application.title}</h2>
                    <ArrowRight
                      className="hidden md:block transform group-hover:translate-x-2 transition-transform"
                      size={32}
                    />
                  </div>
                  <p className="font-baskerville text-sm mt-6 max-w-2xl opacity-70">{application.description}</p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {application.deliverables.map((item) => (
                      <span
                        key={item}
                        className="font-aileron text-xs px-3 py-1 border border-current rounded-full uppercase"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 pb-24">
        <div className="bg-aimd-purple p-8 md:p-16">
          <h2 className="font-aileron text-4xl md:text-6xl uppercase tracking-tight text-aimd-white">Ready to start?</h2>
          <p className="font-baskerville text-aimd-white/70 mt-4 max-w-xl">
            Tell us whether you want to apply, join the officer team, or partner on a project.
          </p>
          <a
            href="/contact"
            className="inline-block mt-8 px-8 py-4 bg-aimd-black text-aimd-white font-aileron uppercase hover:bg-aimd-white hover:text-aimd-black transition-colors border-2 border-aimd-black"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
