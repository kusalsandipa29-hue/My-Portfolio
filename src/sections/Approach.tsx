import { useRef, useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import { approach } from '../content/skills';
import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';
import { cn } from '../lib/cn';

export function Approach() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const step = approach[active];

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const n = approach.length;
    let next = -1;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (i + 1) % n;
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = (i - 1 + n) % n;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = n - 1;
    if (next >= 0) {
      e.preventDefault();
      setActive(next);
      tabs.current[next]?.focus();
    }
  };

  return (
    <section id="approach" aria-labelledby="approach-title" className="bg-surface-2/50 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader
          index="06"
          eyebrow="How I work"
          id="approach-title"
          title="My approach to software project work"
          intro="A general way of working that I apply and keep refining. It describes how I think about project work, not a claim that I own every stage in each current project."
        />

        <Reveal className="grid gap-5 lg:grid-cols-[minmax(0,380px)_1fr]">
          {/* Steps */}
          <div
            role="tablist"
            aria-label="Project approach steps"
            aria-orientation="vertical"
            className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {approach.map((s, i) => {
              const selected = i === active;
              const done = i < active;
              return (
                <button
                  key={s.title}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  role="tab"
                  id={`approach-tab-${i}`}
                  aria-selected={selected}
                  aria-controls="approach-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onKey(e, i)}
                  className={cn(
                    'group relative flex min-w-[220px] snap-start items-center gap-3 rounded-2xl border p-3.5 text-left transition-all lg:min-w-0',
                    selected ? 'border-ocean bg-surface shadow-card' : 'border-transparent hover:border-line hover:bg-surface/70',
                  )}
                >
                  <span
                    className={cn(
                      'grid h-9 w-9 shrink-0 place-items-center rounded-xl font-mono text-sm font-semibold transition-colors',
                      selected ? 'bg-navy text-amber dark:bg-sky dark:text-navy' : done ? 'bg-accent-soft text-accent-text' : 'bg-surface-3 text-muted',
                    )}
                  >
                    {done ? <Check className="h-4 w-4" aria-hidden="true" /> : `0${i + 1}`}
                  </span>
                  <span className={cn('font-display text-[0.95rem] font-semibold leading-snug', selected ? 'text-ink' : 'text-muted')}>{s.title}</span>
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div
            id="approach-panel"
            role="tabpanel"
            aria-labelledby={`approach-tab-${active}`}
            className="card relative overflow-hidden p-6 sm:p-10"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-surface-3" aria-hidden="true">
              <motion.div
                className="h-full bg-gradient-to-r from-ocean to-amber"
                animate={{ width: `${((active + 1) / approach.length) * 100}%` }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent-soft text-accent-text">
                    <Icon name={step.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-mono text-sm text-subtle">
                    Step {active + 1} of {approach.length}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-ink sm:text-3xl">{step.title}</h3>
                <p className="mt-3 max-w-xl text-lg leading-relaxed text-muted">{step.summary}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                  {step.activities.map((a) => (
                    <li key={a} className="rounded-xl border border-line bg-surface-2 p-4 text-sm font-medium text-ink">
                      {a}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
              <p className="flex items-center gap-2 text-xs text-subtle">
                <Info className="h-3.5 w-3.5" aria-hidden="true" /> Use arrow keys to move between steps
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setActive((a) => Math.max(0, a - 1))}
                  disabled={active === 0}
                  className="rounded-lg border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-accent disabled:opacity-40 disabled:hover:border-line"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => setActive((a) => Math.min(approach.length - 1, a + 1))}
                  disabled={active === approach.length - 1}
                  className="rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white transition-opacity disabled:opacity-40 dark:bg-sky dark:text-navy"
                >
                  Next step
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
