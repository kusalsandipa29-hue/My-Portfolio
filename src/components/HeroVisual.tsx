import { motion, useReducedMotion } from 'framer-motion';
import { Building2, MapPin } from 'lucide-react';
import { profile } from '../content/site';
import { approach } from '../content/skills';
import { ProfilePhoto } from './ProfilePhoto';
import { StatusPill } from './StatusPill';

/**
 * Signature hero visual: scattered "idea" dots settle into a structured plan.
 * Purely illustrative — it represents a way of working, not any real project data.
 */
const rows = approach.map((s, i) => ({
  label: s.title.split(' ')[0],
  start: [0, 10, 24, 34, 46, 70][i],
  width: [22, 28, 26, 52, 44, 26][i],
}));

export function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      {/* glow */}
      <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-[radial-gradient(closest-side,rgba(33,158,188,0.28),transparent)] blur-2xl" aria-hidden="true" />

      {/* Identity card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="card relative z-10 flex items-center gap-4 p-3 sm:gap-5 sm:p-4"
      >
        <ProfilePhoto size="portrait" />
        <div className="min-w-0 flex-1">
          <StatusPill status="Current" className="mb-3" />
          <p className="font-display text-lg font-bold leading-tight text-ink sm:text-xl">{profile.displayName}</p>
          <p className="mt-1 text-sm font-medium text-accent-text">Project Management Intern</p>
          <p className="mt-3 flex items-center gap-1.5 text-sm text-muted">
            <Building2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span className="truncate">Sri Lanka Telecom</span>
          </p>
          <p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted">
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {profile.location}
          </p>
        </div>
      </motion.div>

      {/* Plan board (illustrative) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative -mt-3 overflow-hidden rounded-[1.25rem] border border-sky/15 bg-navy p-5 pt-8 text-white shadow-lift sm:p-6 sm:pt-9"
        aria-hidden="true"
      >
        <div className="bg-grid absolute inset-0 opacity-60 [--grid-line:rgba(142,202,230,0.06)]" />
        <div className="relative flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.16em] text-sky/80">
          <span>Idea → Structure</span>
          <span className="flex gap-1">
            <i className="h-1.5 w-1.5 rounded-full bg-sky/40" />
            <i className="h-1.5 w-1.5 rounded-full bg-sky/40" />
            <i className="h-1.5 w-1.5 rounded-full bg-amber" />
          </span>
        </div>

        <div className="relative mt-5 space-y-2.5">
          {rows.map((r, i) => (
            <div key={r.label} className="grid grid-cols-[78px_1fr] items-center gap-3">
              <span className="truncate font-mono text-[0.68rem] text-sky/75">{r.label}</span>
              <div className="relative h-6 rounded-md bg-white/[0.04]">
                <motion.div
                  className="absolute top-0 h-full rounded-md"
                  style={{
                    left: `${r.start}%`,
                    background:
                      i === 3
                        ? 'linear-gradient(90deg,#FFB703,#FB8500)'
                        : i % 2
                          ? 'linear-gradient(90deg,#219EBC,#8ECAE6)'
                          : 'linear-gradient(90deg,rgba(142,202,230,0.55),rgba(142,202,230,0.85))',
                  }}
                  initial={reduce ? { width: `${r.width}%` } : { width: 0, opacity: 0 }}
                  animate={{ width: `${r.width}%`, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.6 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                />
                {/* scattered idea dots that converge */}
                {!reduce && (
                  <motion.span
                    className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-sky"
                    initial={{ left: `${(i * 37) % 90}%`, opacity: 0.9, y: (i % 2 ? -14 : 14) }}
                    animate={{ left: `${r.start + 1}%`, opacity: 0, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3 + i * 0.12 }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-[0.72rem] text-sky/75">
          <span className="font-mono uppercase tracking-[0.14em]">Plan · Coordinate · Track</span>
          <motion.span
            className="h-2 w-2 rounded-full bg-amber"
            animate={reduce ? undefined : { scale: [1, 1.5, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 2.4, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}
