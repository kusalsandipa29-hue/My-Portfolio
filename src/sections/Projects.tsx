import { ShieldCheck } from 'lucide-react';
import { projects } from '../content/projects';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader
          index="03"
          eyebrow="Featured projects"
          id="projects-title"
          title="Software projects I'm contributing to"
          intro="Four ongoing Sri Lanka Telecom projects where I support project management and coordination. Each one has a case study."
        />

        {projects.length === 0 ? (
          <p className="card p-8 text-center text-muted">Project case studies will appear here soon.</p>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p, i) => {
              // First card is wide; a leftover last card also spans the full row
              const wide = i === 0 || (i === projects.length - 1 && (projects.length - 1) % 2 === 1);
              return (
                <div key={p.slug} className={wide ? 'md:col-span-2' : undefined}>
                  <ProjectCard project={p} index={i} featured={wide} />
                </div>
              );
            })}
          </div>
        )}

        <Reveal className="mt-8 flex items-start gap-3 rounded-2xl border border-line bg-surface-2/60 p-4 text-sm text-muted sm:items-center">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-text sm:mt-0" aria-hidden="true" />
          <p>
            These are internal company projects. Descriptions are deliberately high-level, and cover images are decorative
            illustrations — not screenshots of real systems.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
