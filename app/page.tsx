import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { contactLinks, experience, featuredProjects, profile, skillGroups } from "@/lib/site-data";

export default function Home() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-12 lg:px-8 lg:py-16">
      <section className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <Reveal className="rounded-[2.5rem] border border-black/8 bg-[color:var(--background-soft)]/92 p-8 shadow-[0_30px_120px_rgba(20,24,28,0.08)] sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">{profile.name} · {profile.title}</p>
          <h1 className="mt-6 max-w-3xl font-[family:var(--font-display)] text-5xl leading-[0.94] tracking-tight text-[var(--foreground)] sm:text-7xl">
            Building performant, well-designed digital products.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            {profile.summary} A portfolio spanning civic software, internal tools, product engineering, and personal technical experiments.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              View projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-white"
            >
              Contact
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="grid gap-4">
          <div className="rounded-[2rem] border border-black/8 bg-white/88 p-6 shadow-[0_20px_70px_rgba(20,24,28,0.06)]">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Current focus</p>
            <p className="mt-4 text-xl font-semibold tracking-tight text-[var(--foreground)]">
              Full-stack engineering shaped by real delivery work across SaaS, distributed systems, cloud integrations, civic technology, and independent projects.
            </p>
          </div>
          <div className="rounded-[2rem] border border-black/8 bg-white/70 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">What this site should communicate</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--foreground)]/84">
              <li>Clear engineering range across UI, APIs, and product delivery.</li>
              <li>Attention to usability, accessibility, and long-term maintainability.</li>
              <li>Project storytelling grounded in shipped work rather than filler claims.</li>
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="space-y-8">
        <Reveal>
          <SectionTitle
            eyebrow="Selected work"
            title="Featured projects with clear technical stories."
            description="These are migrated from the older portfolio and reframed as tighter case-study entries in the new site." 
          />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <SectionTitle
            eyebrow="Experience"
            title="A concise view of shipped work and engineering ownership."
            description="The timeline stays tight on the home page and expands on the dedicated experience page."
          />
        </Reveal>
        <div className="space-y-4">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} delay={index * 0.07}>
              <article className="rounded-[2rem] border border-black/8 bg-white/82 p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">{item.role}</h3>
                    <p className="text-sm text-[var(--muted)]">{item.company}</p>
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{item.period}</p>
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--foreground)]/80">{item.highlights[0]}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <Reveal>
          <SectionTitle
            eyebrow="Capabilities"
            title="Skills grouped by practice, not presented as a logo wall."
            description="A practical range across frontend systems, backend services, cloud delivery, data platforms, observability, and applied AI."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.06}>
              <article className="rounded-[2rem] border border-black/8 bg-white/78 p-6">
                <h3 className="text-lg font-semibold tracking-tight text-[var(--foreground)]">{group.title}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-[var(--muted)]">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="rounded-[2.5rem] border border-black/8 bg-black px-8 py-10 text-white sm:px-12 sm:py-14">
          <p className="text-xs uppercase tracking-[0.3em] text-white/64">Contact</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <h2 className="font-[family:var(--font-display)] text-4xl leading-none sm:text-5xl">
                Looking for someone who can build with taste and ship with discipline.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">
                This v1 portfolio is ready to expand into deeper case studies, writing, and project detail pages. The structure already supports that next layer.
              </p>
            </div>
            <div className="space-y-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between rounded-2xl border border-white/12 bg-white/6 px-5 py-4 text-sm transition-colors hover:bg-white/10"
                >
                  <span>{link.label}</span>
                  <span className="text-white/70">{link.value}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}