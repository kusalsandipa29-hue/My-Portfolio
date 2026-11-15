import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, FileText, Mail } from 'lucide-react';
import { profile } from '../content/site';
import { Button } from '../components/Button';
import { GitHubIcon, LinkedInIcon } from '../components/BrandIcons';
import { HeroVisual } from '../components/HeroVisual';

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pb-16 pt-28 sm:pt-36 lg:pb-24">
      {/* backdrop */}
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(142,202,230,0.35),transparent)] blur-3xl dark:bg-[radial-gradient(closest-side,rgba(33,158,188,0.32),transparent)]" aria-hidden="true" />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        <div>
          <motion.p {...fade(0)} className="inline-flex flex-wrap items-center gap-2 rounded-full border border-line bg-surface/70 py-1.5 pl-1.5 pr-3.5 text-xs font-medium text-muted backdrop-blur sm:text-sm">
            <span className="rounded-full bg-navy px-2.5 py-0.5 font-mono text-[0.68rem] uppercase tracking-wider text-white dark:bg-sky dark:text-navy">Now</span>
            Project Management Intern · Sri Lanka Telecom
          </motion.p>

          <motion.p {...fade(0.08)} className="mt-7 font-display text-lg font-semibold text-accent-text">
            {profile.displayName}
          </motion.p>
          <motion.h1
            {...fade(0.14)}
            id="hero-title"
            className="mt-2 text-[2.6rem] font-extrabold leading-[1.04] tracking-[-0.035em] text-ink sm:text-6xl lg:text-[4.1rem]"
          >
            Turning ideas into{' '}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">structured</span>
              <svg className="absolute -bottom-1 left-0 z-0 h-3 w-full text-amber sm:-bottom-2 sm:h-4" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
                <motion.path
                  d="M2 8 C 50 2, 150 2, 198 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.9, delay: 0.7 }}
                />
              </svg>
            </span>{' '}
            solutions.
          </motion.h1>

          <motion.p {...fade(0.22)} className="mt-6 font-medium text-ink/90 sm:text-lg">
            {profile.subtitle}
          </motion.p>
          <motion.p {...fade(0.28)} className="mt-4 max-w-xl leading-relaxed text-muted sm:text-[1.05rem]">
            {profile.intro}
          </motion.p>

          <motion.div {...fade(0.36)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button to="/#projects">
              Explore my projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button to="/resume" variant="secondary">
              <FileText className="h-4 w-4" aria-hidden="true" /> View resume
            </Button>
            <Button to="/#contact" variant="ghost" className="sm:px-4">
              <Mail className="h-4 w-4" aria-hidden="true" /> Let's connect
            </Button>
          </motion.div>

          <motion.div {...fade(0.44)} className="mt-9 flex items-center gap-5 text-sm text-muted">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-ink">
              <LinkedInIcon className="h-4 w-4" /> LinkedIn
            </a>
            <span className="h-4 w-px bg-line-strong" aria-hidden="true" />
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-ink">
              <GitHubIcon className="h-4 w-4" /> GitHub
            </a>
          </motion.div>
        </div>

        <HeroVisual />
      </div>

      <a
        href="#about"
        className="group absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-subtle lg:flex"
        aria-label="Scroll to About section"
      >
        <span className="font-mono uppercase tracking-[0.2em]">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown className="h-4 w-4 group-hover:text-ink" aria-hidden="true" />
        </motion.span>
      </a>
    </section>
  );
}
