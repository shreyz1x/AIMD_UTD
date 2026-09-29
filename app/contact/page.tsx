"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { ArrowRight, ChevronDown, Mail, MapPin } from "lucide-react"

const faqs = [
  {
    question: "What does AIMD do?",
    answer:
      "AIMD at UT Dallas brings together students interested in artificial intelligence and healthcare. Members work on hands-on projects, including industry-sponsored work with real companies, and take on medical challenges through research, innovation, and collaboration.",
  },
  {
    question: "How can my org partner with AIMD?",
    answer:
      "Companies, research groups, and healthcare organizations can partner with AIMD on industry-sponsored projects. You bring a real healthcare problem, and students work on it with real data, constraints, and workflows. Email contact@aimdutd.com to start the conversation.",
  },
  {
    question: "Who can apply?",
    answer:
      "UT Dallas students interested in artificial intelligence and healthcare can apply to join a project or the officer team. AIMD is for students preparing for careers in medicine, research, and industry.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  })
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 px-4 md:px-8">
        <h1 className="font-aileron text-[12vw] md:text-[8vw] leading-[0.85] uppercase tracking-tighter">
          Let&apos;s
          <br />
          <span className="text-primary">Talk</span>
        </h1>
        <p className="font-baskerville text-muted-foreground mt-8 max-w-xl">
          Questions about joining, applying, or partnering with AIMD? Send a note and we&apos;ll get back to you.
        </p>
      </section>

      <section id="ask" className="px-4 md:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-aileron text-xs uppercase mb-2 block">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b-2 border-border py-3 font-aileron focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-aileron text-xs uppercase mb-2 block">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b-2 border-border py-3 font-aileron focus:outline-none focus:border-primary transition-colors"
                  placeholder="you@utdallas.edu"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-aileron text-xs uppercase mb-2 block">Organization</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-transparent border-b-2 border-border py-3 font-aileron focus:outline-none focus:border-primary transition-colors"
                  placeholder="UT Dallas or your organization"
                />
              </div>
              <div>
                <label className="font-aileron text-xs uppercase mb-2 block">I want to</label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full bg-transparent border-b-2 border-border py-3 font-aileron focus:outline-none focus:border-primary transition-colors cursor-pointer"
                >
                  <option value="">Select one</option>
                  <option value="apply">Apply to join</option>
                  <option value="officers">Join the officer team</option>
                  <option value="partner">Partner with AIMD</option>
                  <option value="question">Ask a question</option>
                </select>
              </div>
            </div>

            <div>
              <label className="font-aileron text-xs uppercase mb-2 block">Message *</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full bg-transparent border-2 border-border p-4 font-aileron focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell us how you'd like to get involved..."
              />
            </div>

            <button
              type="submit"
              className="group flex items-center gap-4 bg-aimd-white text-aimd-black px-8 py-4 font-aileron uppercase hover:bg-aimd-purple hover:text-aimd-white transition-colors"
            >
              Send Message
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </button>
          </form>

          <div className="space-y-12">
            <div>
              <h3 className="font-aileron text-2xl uppercase mb-6">Contact Info</h3>
              <div className="space-y-4">
                <a
                  href="mailto:contact@aimdutd.com"
                  className="flex items-center gap-4 font-aileron hover:text-primary transition-colors"
                >
                  <Mail size={20} />
                  contact@aimdutd.com
                </a>
                <div className="flex items-center gap-4 font-aileron">
                  <MapPin size={20} />
                  Richardson, TX
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-aileron text-2xl uppercase mb-6">Office</h3>
              <p className="font-baskerville text-muted-foreground">
                800 W Campbell Rd
                <br />
                Richardson, TX 75080
              </p>
            </div>

            <div className="border-2 border-aimd-purple/40 p-8 bg-aimd-purple text-aimd-white">
              <h3 className="font-aileron text-2xl uppercase mb-4">Still Have Questions?</h3>
              <p className="font-baskerville text-sm opacity-80">Feel free to get in touch with us today!</p>
              <a
                href="#ask"
                className="inline-block mt-6 px-6 py-3 bg-aimd-white text-aimd-black rounded-full font-aileron uppercase text-sm"
              >
                Ask A Question
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-24">
        <p className="font-aileron text-xs uppercase tracking-widest text-primary mb-4">FAQ</p>
        <h2 className="font-aileron text-4xl md:text-6xl uppercase tracking-tight">Frequently Asked Questions</h2>
        <p className="font-baskerville text-muted-foreground mt-4">Lingering doubts?</p>
        <div className="mt-10 max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const open = openFaq === index
            return (
              <button
                key={faq.question}
                type="button"
                onClick={() => setOpenFaq(open ? null : index)}
                className="w-full text-left border-2 border-border bg-card px-6 py-5"
              >
                <span className="flex items-center justify-between gap-4">
                  <span className="font-aileron text-lg">{faq.question}</span>
                  <ChevronDown className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`} size={20} />
                </span>
                {open && <p className="font-baskerville text-sm text-muted-foreground mt-4">{faq.answer}</p>}
              </button>
            )
          })}
        </div>
      </section>

      <Footer />
    </main>
  )
}
