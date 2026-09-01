import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/reveal";
import { allProjects, getProjectBySlug } from "@/lib/site-data";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-14 lg:px-8 lg:py-16">
      <Reveal>
        <Link href="/projects" className="text-sm font-medium text-[var(--accent)]">
          Back to projects
        </Link>
        <div className="mt-6 rounded-[2.5rem] border border-black/8 bg-white/88 p-8 shadow-[0_24px_100px_rgba(20,24,28,0.06)] sm:p-12">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
            <span>{project.category}</span>
            <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
            <span>{project.year}</span>
          </div>

          <h1 className="mt-6 font-[family:var(--font-display)] text-5xl leading-[0.96] tracking-tight text-[var(--foreground)] sm:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            {project.summary}
          </p>

          <div className="mt-8 grid gap-6 border-t border-black/8 pt-8 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Role</p>
              <p className="mt-3 text-lg font-medium tracking-tight text-[var(--foreground)]">{project.role}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Stack</p>
              <p className="mt-3 text-lg font-medium tracking-tight text-[var(--foreground)]">{project.stack.join(" • ")}</p>
            </div>
          </div>

          <div className="mt-8 rounded-[2rem] border border-black/8 bg-[color:var(--background-soft)]/92 p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Outcome</p>
            <p className="mt-4 text-base leading-8 text-[var(--foreground)]/84">{project.impact}</p>
          </div>

          <section className="mt-10">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Highlights</p>
            <div className="mt-5 grid gap-4">
              {project.details.map((detail) => (
                <div key={detail} className="rounded-[1.75rem] border border-black/8 bg-white/90 p-5 text-sm leading-7 text-[var(--foreground)]/84">
                  {detail}
                </div>
              ))}
            </div>
          </section>

          {project.links ? (
            <section className="mt-10 flex flex-wrap gap-3">
              {project.links.github ? (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white"
                >
                  GitHub
                </a>
              ) : null}
              {project.links.live ? (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-[var(--foreground)]"
                >
                  View live
                </a>
              ) : null}
            </section>
          ) : null}
        </div>
      </Reveal>
    </main>
  );
}