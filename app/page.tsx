import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { MarqueeSection } from "@/components/marquee-section"
import { Services } from "@/components/services"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-aimd-purple selection:text-aimd-white">
      <Navbar />
      <Hero />
      <MarqueeSection />
      <Services />
      <Footer />
    </div>
  )
}
