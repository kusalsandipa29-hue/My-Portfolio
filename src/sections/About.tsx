import { Briefcase, GraduationCap, Sparkles, Target } from 'lucide-react';
import { about, profile } from '../content/site';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader index="01" eyebrow="About me" id="about-title" title={about.lead} />

        {/* Bento grid */}
        <div className="grid gap-4 md:grid-cols-6">
          <Reveal className="card p-6 sm:p-8 md:col-span-4 md:row-span-2">
            <div className="space-y-4 leading-relaxed text-muted sm:text-[1.05rem]">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.05} className="card relative overflow-hidden p-6 md:col-span-2">
            <Briefcase className="h-5 w-5 text-accent-text" aria-hidden="true" />
            <p className="mt-4 eyebrow">Currently</p>
            <p className="mt-1 font-display text-lg font-bold text-ink">Project Management Intern</p>
            <p className="text-sm text-muted">Sri Lanka Telecom · Apr 2026 – Mar 2027 (expected)</p>
          </Reveal>

          <Reveal delay={0.1} className="card p-6 md:col-span-2">
            <GraduationCap className="h-5 w-5 text-accent-text" aria-hidden="true" />
            <p className="mt-4 eyebrow">Studying</p>
            <p className="mt-1 font-display text-lg font-bold text-ink">BSc (Hons) IT for Business</p>
            <p className="text-sm text-muted">Coventry University · Third year</p>
          </Reveal>

          {/* Business × Technology × Coordination */}
          <Reveal delay={0.05} className="relative overflow-hidden rounded-[1.25rem] bg-navy p-6 text-white shadow-lift sm:p-8 md:col-span-4">
            <div className="bg-grid absolute inset-0 [--grid-line:rgba(142,202,230,0.06)]" aria-hidden="true" />
            <div className="relative">
              <p className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-sky">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> Where I add value
              </p>
              <ul className="mt-5 grid gap-4 sm:grid-cols-3">
                {about.pillars.map((p, i) => (
                  <li key={p.title} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <span className="font-mono text-xs text-amber">0{i + 1}</span>
                    <p className="mt-1 font-display text-lg font-bold">{p.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-sky/85">{p.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="card p-6 md:col-span-2">
            <Target className="h-5 w-5 text-emphasis" aria-hidden="true" />
            <p className="mt-4 eyebrow">Looking ahead</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{about.goals}</p>
          </Reveal>

          <Reveal className="card p-6 md:col-span-6">
            <p className="eyebrow">Career interests</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {profile.interests.map((i) => (
                <li key={i} className="rounded-full border border-line bg-surface-2 px-3.5 py-1.5 text-sm font-medium text-ink">
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
