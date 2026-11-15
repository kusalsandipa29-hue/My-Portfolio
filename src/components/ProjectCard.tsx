import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../content/types';
import { ProjectCover } from './ProjectCover';
import { StatusPill } from './StatusPill';
import { cn } from '../lib/cn';

export function ProjectCard({ project, featured, index }: { project: Project; featured?: boolean; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        to={`/projects/${project.slug}`}
        className={cn(
          'group card flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-lift focus-visible:-translate-y-1',
          featured && 'md:flex-row',
        )}
        aria-label={`Read the ${project.name} case study`}
      >
        <div className={cn('relative overflow-hidden', featured ? 'aspect-[16/9] md:aspect-auto md:w-[46%]' : 'aspect-[16/8]')}>
          <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]">
            <ProjectCover motif={project.motif} number={project.number} className="h-full w-full" />
          </div>
          <div className="absolute left-4 top-4">
            <span className="rounded-full border border-white/15 bg-navy/60 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-sky backdrop-blur">
              {project.organization}
            </span>
          </div>
        </div>

        <div className={cn('flex flex-1 flex-col p-6', featured && 'md:p-8')}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="font-mono text-[0.7rem] uppercase tracking-wider text-accent-text">{project.domain}</p>
            <StatusPill status={project.status} />
          </div>
          <h3 className={cn('mt-3 font-bold leading-snug text-ink', featured ? 'text-2xl sm:text-[1.7rem]' : 'text-xl')}>
            {project.name}
          </h3>
          <p className="mt-3 line-clamp-3 text-[0.95rem] leading-relaxed text-muted">{project.summary}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.highlights.map((h) => (
              <li key={h} className="rounded-lg bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted">
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex items-center justify-between gap-3 pt-6">
            <span className="min-w-0 text-sm text-subtle">Role · {project.role}</span>
            <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-sm font-semibold text-ink">
              Case study
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
