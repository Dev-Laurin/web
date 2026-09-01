import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { experience } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Experience",
  description: "A timeline of software engineering roles, delivery work, and technical ownership.",
};

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
      <Reveal>
        <SectionTitle
          eyebrow="Experience"
          title="Roles, systems, and the shape of the work."
          description="Eight-plus years of experience across SaaS, distributed systems, civic technology, APIs, cloud integrations, and customer-facing applications."
        />
      </Reveal>

      <div className="mt-10 space-y-6">
        {experience.map((item, index) => (
          <Reveal key={`${item.company}-${item.period}`} delay={index * 0.07}>
            <article className="rounded-[2.25rem] border border-black/8 bg-white/84 p-8 shadow-[0_20px_60px_rgba(20,24,28,0.05)]">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)]">{item.role}</h2>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.company}</p>
                </div>
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">{item.period}</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--foreground)]/84 sm:text-base">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </main>
  );
}