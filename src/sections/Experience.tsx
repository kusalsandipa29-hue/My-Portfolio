import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Award, Building2, CalendarDays, ChevronDown, Compass, ListChecks } from 'lucide-react';
import { experience } from '../content/experience';
import { projects } from '../content/projects';
import type { Experience as Exp } from '../content/types';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';
import { StatusPill } from '../components/StatusPill';
import { cn } from '../lib/cn';

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="bg-surface-2/50 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader
          index="02"
          eyebrow="Experience"
          id="experience-title"
          title="Industry experience, built in real projects"
          intro="My current role, with responsibilities kept separate from the areas I'm still learning."
        />
        <ol className="relative">
          {experience.map((item, i) => (
            <TimelineItem key={item.id} item={item} last={i === experience.length - 1} />
          ))}
        </ol>
        <Reveal className="mt-6 pl-10 sm:pl-14">
          <p className="text-sm text-subtle">More experience will be added here as my career develops.</p>
        </Reveal>
      </div>
    </section>
  );
}

function TimelineItem({ item, last }: { item: Exp; last: boolean }) {
  const [open, setOpen] = useState(true);
  const related = projects.filter((p) => item.relatedProjects.includes(p.slug));
  const panelId = `${item.id}-details`;

  return (
    <li className="relative pl-10 sm:pl-14">
      {/* rail */}
      <span className={cn('absolute left-[15px] top-2 w-px bg-gradient-to-b from-ocean via-line-strong to-transparent sm:left-[19px]', last ? 'h-full' : 'h-[calc(100%+2rem)]')} aria-hidden="true" />
      <span className="absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border-2 border-ocean bg-bg sm:h-10 sm:w-10" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-amber" />
      </span>

      <Reveal className="card overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                {item.current && <StatusPill status="Current" />}
                <span className="font-mono text-[0.7rem] uppercase tracking-wider text-subtle">{item.type}</span>
              </div>
              <h3 className="mt-3 text-2xl font-bold text-ink">{item.role}</h3>
              <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <Building2 className="h-4 w-4" aria-hidden="true" /> {item.organization}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" /> {item.start} – {item.end}
                </span>
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls={panelId}
              className="inline-flex items-center gap-1.5 self-start rounded-lg border border-line px-3 py-2 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-ink"
            >
              {open ? 'Hide details' : 'Show details'}
              <ChevronDown className={cn('h-4 w-4 transition-transform', open && 'rotate-180')} aria-hidden="true" />
            </button>
          </div>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted">{item.summary}</p>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="grid gap-px border-t border-line bg-line md:grid-cols-2">
                <Block icon={<ListChecks className="h-4 w-4" />} title="Current responsibilities" items={item.responsibilities} />
                <Block icon={<Compass className="h-4 w-4" />} title="Areas of exposure & learning" items={item.exposure} muted />
              </div>
              {item.achievements.length > 0 && (
                <div className="border-t border-line bg-surface p-6 sm:p-8">
                  <Block icon={<Award className="h-4 w-4" />} title="Verified highlights" items={item.achievements} bare />
                </div>
              )}
              {related.length > 0 && (
                <div className="border-t border-line bg-surface px-6 py-5 sm:px-8">
                  <p className="eyebrow">Projects in this role</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {related.map((p) => (
                      <li key={p.slug}>
                        <Link
                          to={`/projects/${p.slug}`}
                          className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:border-accent"
                        >
                          <span className="font-mono text-xs text-emphasis">{p.number}</span>
                          {p.shortName ?? p.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </Reveal>
    </li>
  );
}

function Block({ icon, title, items, muted, bare }: { icon: React.ReactNode; title: string; items: string[]; muted?: boolean; bare?: boolean }) {
  return (
    <div className={cn(!bare && 'bg-surface p-6 sm:p-8')}>
      <p className="flex items-center gap-2 font-display text-sm font-bold text-ink">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent-soft text-accent-text" aria-hidden="true">
          {icon}
        </span>
        {title}
      </p>
      <ul className="mt-4 space-y-2.5">
        {items.map((r) => (
          <li key={r} className="flex gap-3 text-[0.95rem] leading-relaxed text-muted">
            <span className={cn('mt-2 h-1.5 w-1.5 shrink-0 rounded-full', muted ? 'bg-sky' : 'bg-ocean')} aria-hidden="true" />
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
}
