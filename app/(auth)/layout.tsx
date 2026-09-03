import type { ReactNode } from "react"

import { Marquee } from "@/components/marquee"

const capabilities = [
  "System Design",
  "Real-Time Canvas",
  "AI Spec Generation",
  "Design Systems",
  "Team Collaboration",
]

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background lg:flex-row">
      {/* Left — brand panel, large screens only */}
      <aside className="relative hidden overflow-hidden border-r border-border lg:flex lg:w-[46%] lg:flex-col">
        {/* thin vertical rule, echoing the reference */}
        <span aria-hidden className="absolute inset-y-0 left-10 w-px bg-border" />

        <div className="flex flex-1 flex-col justify-center px-14 py-16 xl:px-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            / Welcome
          </p>

          <h1 className="headline mt-4 text-[clamp(3.25rem,7vw,5.75rem)] text-foreground">
            Ghost<span className="text-primary">AI</span>
          </h1>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Design <span className="text-border">/</span> Document{" "}
            <span className="text-border">/</span>{" "}
            <span className="text-primary">Ship</span>
          </p>

          <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
            The collaborative canvas for designing and documenting software
            systems — architecture, specs and decisions in one place.
          </p>
        </div>

        <Marquee items={capabilities} className="mt-auto" />
      </aside>

      {/* Right — the form (the only content on small screens) */}
      <main className="flex flex-1 items-center justify-center px-4 py-16 sm:px-6">
        {children}
      </main>
    </div>
  )
}
