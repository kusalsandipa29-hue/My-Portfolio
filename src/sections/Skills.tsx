import { skillGroups } from '../content/skills';
import type { SkillGroup } from '../content/types';
import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';
import { cn } from '../lib/cn';

const toneStyles: Record<SkillGroup['tone'], { wrap: string; chip: string; icon: string; label: string }> = {
  core: {
    wrap: 'md:col-span-2 bg-navy text-white border-transparent',
    chip: 'border-white/10 bg-white/[0.05] text-white',
    icon: 'text-amber',
    label: 'text-sky',
  },
  tools: { wrap: '', chip: 'border-line bg-surface-2 text-ink', icon: 'text-accent-text', label: 'text-accent-text' },
  tech: { wrap: '', chip: 'border-line bg-surface-2 text-ink', icon: 'text-accent-text', label: 'text-accent-text' },
  exposure: {
    wrap: 'md:col-span-2',
    chip: 'border-dashed border-line-strong bg-transparent text-ink',
    icon: 'text-emphasis',
    label: 'text-emphasis',
  },
};

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="bg-surface-2/50 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader
          index="04"
          eyebrow="Skills & competencies"
          id="skills-title"
          title="Business skills, backed by technical awareness"
          intro="Grouped by how I use them. No ratings or percentages — just an honest picture of what I work with."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((g, i) => {
            const t = toneStyles[g.tone];
            return (
              <Reveal key={g.id} delay={(i % 2) * 0.06} className={cn('card p-6 sm:p-8', t.wrap)}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-xl font-bold">{g.title}</h3>
                  <span className={cn('font-mono text-[0.7rem] uppercase tracking-wider', t.label)}>
                    {g.items.length} {g.tone === 'exposure' ? 'areas' : 'skills'}
                  </span>
                </div>
                <p className={cn('mt-1.5 text-sm', g.tone === 'core' ? 'text-sky/85' : 'text-muted')}>{g.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {g.items.map((s) => (
                    <li
                      key={s.name}
                      className={cn('inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5', t.chip)}
                    >
                      {s.icon && <Icon name={s.icon} className={cn('h-4 w-4', t.icon)} />}
                      {s.name}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
