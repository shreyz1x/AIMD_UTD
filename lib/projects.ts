export const projects = [
  {
    slug: "healthscore-ai",
    title: "Healthscore AI",
    category: "Healthcare",
    year: "2026",
    image: "/projects/healthscore-ai.jpg",
    summary: "An all-in-one AI powered health app that can track health over a period of time.",
    description: [
      "Healthscore AI is an all-in-one health app for following how someone's health changes over time. Instead of scattered readings and one-off check-ins, it brings those signals together so a person can see a trend, not just a single number.",
      "Members on this project explore how machine learning can turn ongoing health data into something useful: spotting shifts, summarizing a stretch of time, and making the result clear enough to act on. The aim is a tool that sits between everyday tracking and medical insight.",
      "It is the kind of applied work AIMD is built for — an application that combines machine learning with medicine, and gives students a real product to design, build, and evaluate.",
    ],
  },
  {
    slug: "custom-ai-solutions",
    title: "Custom AI Solutions",
    category: "AI Systems",
    year: "2026",
    image: "/projects/custom-ai-solutions.jpg",
    summary: "Tailored AI systems that align with a partner's goals and challenges.",
    description: [
      "Custom AI Solutions is AIMD's work on systems shaped around a specific problem, not a generic model. Companies and research groups arrive with a real healthcare challenge. Students define the goal, the data, and the constraints, then build an AI system that fits how that partner actually works.",
      "That means more than a model in a notebook. Teams think through the workflow around it: what goes in, what a clinician or researcher needs back, and how the result holds up outside a demo.",
      "The project is practice for building AI that has to live with real goals and real limits — the same conditions students will meet in medicine, research, and industry.",
    ],
  },
  {
    slug: "ai-assistant",
    title: "AI Assistant",
    category: "Agents",
    year: "2026",
    image: "/projects/ai-assistant.jpg",
    summary: "Intelligent virtual agents that streamline repeat tasks.",
    description: [
      "AI Assistant explores virtual agents that take repeat work off people's plates. In a clinic, a lab, or a student research team, a lot of time goes to the same questions, the same routing, and the same follow-up.",
      "This project is about deploying agents that can handle those tasks: answering common questions, guiding someone through a process, and handing off when a person needs to step in. The focus is practical streamlining, with the care medical settings require.",
      "Members work across language models, prompt design, and the product around the agent, so the result is something a team could actually use.",
    ],
  },
] as const

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
