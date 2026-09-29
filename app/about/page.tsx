import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const team = [
  { name: "Zaina Ali", role: "President" },
  { name: "Rakshitha Kishore", role: "Vice-President" },
  { name: "Jaden Jovan", role: "Director of Technology" },
  { name: "Srinidhi Vajinepali", role: "Director of Operations" },
  { name: "Noman Ibrahim", role: "Director of Marketing" },
  { name: "Akshith Akula", role: "Director of Industry" },
  { name: "Arnav Mehta", role: "Director of Engineering" },
]

const domains = [
  {
    title: "Machine Learning",
    description: "Model training, evaluation, optimization, and real-world datasets.",
  },
  {
    title: "Computer Vision & Medical Imaging",
    description: "Image-based diagnostics, detection models, and visual reasoning.",
  },
  {
    title: "Large Language Models & AI Agents",
    description: "LLMs, prompt engineering, RAG systems, and autonomous agents.",
  },
  {
    title: "Healthcare & Diagnostic AI",
    description: "AI for patient intake, triage, decision support, and workflows.",
  },
  {
    title: "Full-Stack AI Systems",
    description: "AI + backend + frontend + deployment.",
  },
  {
    title: "Research, Ethics & Model Evaluation",
    description: "Bias, interpretability, safety, and responsible AI.",
  },
]

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-4 md:px-8">
        <h1 className="font-aileron text-[12vw] md:text-[8vw] leading-[0.85] uppercase tracking-tighter">
          About
          <br />
          <span className="text-primary">Us</span>
        </h1>
      </section>

      <section className="px-4 md:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="font-baskerville text-2xl md:text-4xl leading-tight">Transforming Healthcare with AI</p>
          </div>
          <div className="space-y-6">
            <p className="font-baskerville text-muted-foreground">
              At AIMD at UT Dallas, we bring together students interested in artificial intelligence and healthcare to
              work on hands-on projects, including industry-sponsored initiatives with real companies, tackling
              real-world medical challenges through research, innovation, and collaboration.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-24">
        <h2 className="font-aileron text-4xl md:text-6xl uppercase tracking-tight mb-4">Proven Impact</h2>
        <p className="font-baskerville text-primary text-xl md:text-2xl mb-12">Through Applied AI</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="border-2 border-border bg-card p-6 md:p-8">
            <p className="font-baskerville text-muted-foreground">
              Discover how AIMD empowers students to gain real-world experience at the intersection of artificial
              intelligence and healthcare through hands-on projects, research, and industry collaboration, preparing
              for careers in medicine, research, and industry.
            </p>
          </div>
          <div className="border-2 border-border bg-card p-6 md:p-8">
            <h3 className="font-aileron text-xl uppercase text-primary mb-4">
              Industry-Sponsored & Real-World Projects
            </h3>
            <p className="font-baskerville text-muted-foreground">
              AIMD partners with companies, research groups, and healthcare-focused organizations to offer
              industry-sponsored projects where students work on real problems using AI and machine learning. These
              projects expose members to real data, constraints, and workflows found in professional environments.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-24">
        <h2 className="font-aileron text-4xl md:text-6xl uppercase tracking-tight mb-12">The Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="group bg-card">
              <div className="aspect-square overflow-hidden border-2 border-border bg-aimd-black flex items-center justify-center">
                <span className="font-aileron text-4xl text-primary">{initials(member.name)}</span>
              </div>
              <div className="mt-4">
                <h3 className="font-aileron text-xl uppercase">{member.name}</h3>
                <p className="font-baskerville text-xs text-primary uppercase">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 pb-24">
        <div className="bg-card text-foreground border-2 border-aimd-purple/40 p-8 md:p-16">
          <h2 className="font-aileron text-4xl md:text-6xl uppercase tracking-tight">What AIMD Works On</h2>
          <p className="font-baskerville text-muted-foreground mt-4 max-w-xl">
            The AI domains our members actively build, research, and deploy in.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {domains.map((domain) => (
              <div key={domain.title}>
                <h3 className="font-aileron text-2xl text-primary uppercase">{domain.title}</h3>
                <p className="font-baskerville text-sm mt-4 opacity-70">{domain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
