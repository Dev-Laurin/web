import Link from "next/link";

import type { Project } from "@/lib/site-data";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-[2rem] border border-black/8 bg-white/88 p-6 shadow-[0_20px_70px_rgba(20,24,28,0.06)] backdrop-blur sm:p-8">
      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
        <span>{project.category}</span>
        <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
        <span>{project.year}</span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[var(--foreground)]">{project.title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--muted)] sm:text-base">{project.summary}</p>
      <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{project.stack.join(" • ")}</p>
      <p className="mt-6 border-t border-black/8 pt-5 text-sm leading-7 text-[var(--foreground)]/80">
        {project.impact}
      </p>
      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-sm text-[var(--foreground)]">{project.role}</p>
        <Link href={`/projects/${project.slug}`} className="text-sm font-medium text-[var(--accent)]">
          View case study
        </Link>
      </div>
    </article>
  );
}