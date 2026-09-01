import type { Metadata } from "next";

import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { allProjects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Migrated portfolio projects spanning civic software, research, SaaS, internal tooling, and personal technical work.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-14 lg:px-8 lg:py-16">
      <Reveal>
        <SectionTitle
          eyebrow="Projects"
          title="Legacy portfolio work, converted into a cleaner modern archive."
          description="These projects were pulled forward from the earlier GitHub Pages portfolio and organized around scope, technology, and outcome."
        />
      </Reveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {allProjects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.07}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </main>
  );
}