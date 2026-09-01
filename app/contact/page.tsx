import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { contactLinks } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Ways to get in touch for roles, collaboration, and freelance work.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <SectionTitle
            eyebrow="Contact"
            title="Open to strong product work, thoughtful teams, and sharp technical problems."
            description="Version 1 keeps contact simple: direct links, clear intent, and no unnecessary friction."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex flex-col gap-2 rounded-[2rem] border border-black/8 bg-white/86 p-6 transition-transform hover:-translate-y-0.5 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">{link.label}</span>
                <span className="text-lg font-medium tracking-tight text-[var(--foreground)]">{link.value}</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </main>
  );
}