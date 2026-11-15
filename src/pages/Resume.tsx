import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Printer } from 'lucide-react';
import { profile, site } from '../content/site';
import { experience } from '../content/experience';
import { projects } from '../content/projects';
import { certifications, education, skillGroups } from '../content/skills';
import { usePageMeta } from '../hooks/usePageMeta';

function H({ children }: { children: string }) {
  return (
    <h2 className="mb-3 border-b border-line-strong pb-1.5 font-display text-[0.8rem] font-bold uppercase tracking-[0.14em] text-accent-text">
      {children}
    </h2>
  );
}

export function Resume() {
  usePageMeta('Resume', `Resume of ${profile.displayName} — ${profile.title}.`, '/resume');
  const linkedinShort = profile.linkedin.replace(/^https?:\/\/(www\.)?/, '');
  const githubShort = profile.github.replace(/^https?:\/\/(www\.)?/, '');

  return (
    <div className="pb-20 pt-24 sm:pt-28 print:p-0">
      {/* Toolbar */}
      <div className="no-print container-page mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to portfolio
        </Link>
        <div className="flex flex-col gap-2 sm:flex-row">
          {site.resumePdf && (
            <a href={site.resumePdf} download className="inline-flex items-center justify-center gap-2 rounded-xl bg-highlight px-4 py-2.5 text-sm font-semibold text-highlight-ink">
              <Download className="h-4 w-4" aria-hidden="true" /> Download PDF
            </a>
          )}
          <button
            type="button"
            onClick={() => window.print()}
            className={
              site.resumePdf
                ? 'inline-flex items-center justify-center gap-2 rounded-xl border border-line-strong bg-surface px-4 py-2.5 text-sm font-semibold text-ink hover:border-accent'
                : 'inline-flex items-center justify-center gap-2 rounded-xl bg-highlight px-4 py-2.5 text-sm font-semibold text-highlight-ink'
            }
          >
            <Printer className="h-4 w-4" aria-hidden="true" /> Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Sheet */}
      <div className="container-page">
        <article className="print-sheet card mx-auto max-w-[860px] p-6 sm:p-12" aria-label={`Resume of ${profile.displayName}`}>
          <header className="border-b-2 border-navy pb-5 dark:border-sky">
            <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{profile.displayName}</h1>
            <p className="print-muted mt-0.5 text-sm text-subtle">{profile.fullName}</p>
            <p className="mt-2 font-display text-lg font-semibold text-accent-text">
              Project Management Intern · Software Project Management
            </p>
            <ul className="print-muted mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
              <li><a href={`mailto:${profile.email}`} className="hover:text-ink">{profile.email}</a></li>
              {profile.phoneVisible && <li><a href={profile.phoneHref}>{profile.phone}</a></li>}
              <li><a href={profile.linkedin} className="hover:text-ink">{linkedinShort}</a></li>
              <li><a href={profile.github} className="hover:text-ink">{githubShort}</a></li>
              <li>{profile.location}</li>
            </ul>
          </header>

          <section className="print-avoid-break mt-6">
            <H>Profile</H>
            <p className="text-[0.95rem] leading-relaxed text-ink">{profile.resumeSummary}</p>
          </section>

          <section className="mt-6">
            <H>Experience</H>
            {experience.map((e) => (
              <div key={e.id} className="print-avoid-break">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <p className="font-display font-bold text-ink">
                    {e.role} — {e.organization}
                  </p>
                  <p className="print-muted text-sm text-muted">{e.start} – {e.end}</p>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-[0.93rem] leading-relaxed text-ink marker:text-ocean">
                  {e.responsibilities.map((r) => <li key={r}>{r}</li>)}
                  {e.achievements.map((a) => <li key={a}>{a}</li>)}
                </ul>
              </div>
            ))}
          </section>

          <section className="mt-6">
            <H>Projects (Sri Lanka Telecom · ongoing)</H>
            <ul className="space-y-2.5">
              {projects.map((p) => (
                <li key={p.slug} className="print-avoid-break text-[0.93rem] leading-relaxed">
                  <span className="font-semibold text-ink">{p.name}</span>
                  <span className="print-muted text-muted"> · {p.domain} · {p.role}</span>
                  <p className="print-muted text-muted">{p.tagline}.</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="print-avoid-break mt-6">
            <H>Skills</H>
            <dl className="grid gap-2 text-[0.93rem]">
              {skillGroups.map((g) => (
                <div key={g.id} className="grid gap-x-4 sm:grid-cols-[200px_1fr]">
                  <dt className="font-semibold text-ink">{g.title}</dt>
                  <dd className="print-muted text-muted">{g.items.map((i) => i.name).join(' · ')}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <section className="print-avoid-break">
              <H>Education</H>
              <ul className="space-y-3 text-[0.93rem]">
                {education.map((e) => (
                  <li key={e.id}>
                    <p className="font-semibold text-ink">{e.qualification}</p>
                    <p className="print-muted text-muted">{e.institution} · {e.status}</p>
                  </li>
                ))}
              </ul>
            </section>
            <section className="print-avoid-break">
              <H>Certifications</H>
              <ul className="space-y-3 text-[0.93rem]">
                {certifications.map((c) => (
                  <li key={c.id}>
                    <p className="font-semibold text-ink">{c.name}</p>
                    <p className="print-muted text-muted">{c.issuer} · {c.status}{c.date ? ` · ${c.date}` : ''}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <p className="print-muted mt-8 border-t border-line pt-3 text-xs text-subtle">
            Portfolio & project case studies: {site.siteUrl.replace(/^https?:\/\//, '')}
          </p>
        </article>
      </div>
    </div>
  );
}
