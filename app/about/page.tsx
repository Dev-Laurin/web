import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { education, profile } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description: "Background, engineering philosophy, and collaboration style.",
};

const principles = [
  "Build interfaces that are fast, readable, and resilient under change.",
  "Use design intentionally so the product feels coherent, not decorated.",
  "Prefer simple systems that are easy for teams to understand and extend.",
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionTitle
            eyebrow="About"
            title={`${profile.name}: ${profile.title}.`}
            description={profile.summary}
          />
        </Reveal>
        <Reveal delay={0.08}>
          <article className="rounded-[2.25rem] border border-black/8 bg-white/86 p-8 shadow-[0_20px_80px_rgba(20,24,28,0.06)]">
            <p className="text-base leading-8 text-[var(--foreground)]/84">
              I am a customer-focused engineer who enjoys working across product surfaces, internal tools, system integrations, and SaaS platforms. My work spans frontend applications, production APIs, cloud-native services, and the operational systems that keep them reliable.
            </p>
            <p className="mt-5 text-base leading-8 text-[var(--foreground)]/84">
              I care about maintainable systems, clear communication, and shipping work that holds up after the first demo. I am comfortable moving between implementation, troubleshooting, documentation, code review, and mentoring.
            </p>
            <div className="mt-8 rounded-2xl border border-black/8 bg-[var(--background-soft)]/90 px-5 py-4">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Education</p>
              {education.map((item) => (
                <p key={item.degree} className="mt-3 text-sm font-medium leading-7 text-[var(--foreground)]">
                  {item.degree}
                </p>
              ))}
            </div>
            <div className="mt-8 grid gap-4">
              {principles.map((principle) => (
                <div key={principle} className="rounded-2xl border border-black/8 bg-[var(--background-soft)]/90 px-5 py-4 text-sm leading-7 text-[var(--muted)]">
                  {principle}
                </div>
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </main>
  );
}