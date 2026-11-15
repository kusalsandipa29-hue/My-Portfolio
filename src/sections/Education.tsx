import { Award, ExternalLink, GraduationCap } from 'lucide-react';
import { certifications, education } from '../content/skills';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';
import { StatusPill } from '../components/StatusPill';

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeader
          index="05"
          eyebrow="Education & certifications"
          id="education-title"
          title="Learning that combines business and technology"
        />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Academic timeline */}
          <div>
            <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-ink">
              <GraduationCap className="h-5 w-5 text-accent-text" aria-hidden="true" /> Academic qualifications
            </h3>
            <ol className="relative space-y-4 border-l border-line-strong pl-6">
              {education.map((e, i) => (
                <li key={e.id} className="relative">
                  <Reveal delay={i * 0.06} className="card p-6">
                    <span
                      className={`absolute -left-[31px] top-7 h-3 w-3 rounded-full ring-4 ring-bg ${e.statusTone === 'progress' ? 'bg-amber' : 'bg-ocean'}`}
                      aria-hidden="true"
                    />
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="font-display text-lg font-bold leading-snug text-ink">{e.qualification}</p>
                        <p className="mt-1 text-muted">{e.institution}</p>
                      </div>
                      <StatusPill status={e.statusTone === 'progress' ? 'In progress' : 'Completed'} />
                    </div>
                    <p className="mt-3 text-sm text-subtle">{e.status}{e.period ? ` · ${e.period}` : ''}</p>
                    {e.detail && <p className="mt-2 text-sm leading-relaxed text-muted">{e.detail}</p>}
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-ink">
              <Award className="h-5 w-5 text-accent-text" aria-hidden="true" /> Certifications & development
            </h3>
            {certifications.length === 0 ? (
              <p className="card p-6 text-sm text-muted">Certifications will be listed here.</p>
            ) : (
              <ul className="space-y-4">
                {certifications.map((c, i) => (
                  <li key={c.id}>
                    <Reveal delay={i * 0.06} className="card relative overflow-hidden p-6">
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber to-orange" aria-hidden="true" />
                      <StatusPill status={c.status} />
                      <p className="mt-3 font-display text-lg font-bold leading-snug text-ink">{c.name}</p>
                      <p className="mt-1 text-sm text-muted">
                        {c.issuer}
                        {c.date ? ` · ${c.date}` : ''}
                      </p>
                      {c.note && <p className="mt-3 text-sm text-subtle">{c.note}</p>}
                      {c.credentialUrl && (
                        <a
                          href={c.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:underline"
                        >
                          Verify credential <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      )}
                    </Reveal>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
