import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, Building2, CalendarClock, ExternalLink, Layers, ShieldCheck, UserRound, Users, Wrench } from 'lucide-react';
import { getProject, projects } from '../content/projects';
import { usePageMeta } from '../hooks/usePageMeta';
import { ProjectCover } from '../components/ProjectCover';
import { StatusPill } from '../components/StatusPill';
import { MediaPlaceholder } from '../components/MediaPlaceholder';
import { Reveal } from '../components/Reveal';
import { NotFound } from './NotFound';

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

function formatDate(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  return Number.isNaN(d.getTime()) ? iso : d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function ProjectDetail() {
  const { slug = '' } = useParams();
  const project = getProject(slug);
  usePageMeta(project?.name ?? 'Project not found', project?.summary, `/projects/${slug}`);

  if (!project) return <NotFound />;

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  const meta = [
    { icon: Building2, label: 'Organization', value: project.organization },
    { icon: UserRound, label: 'My role', value: project.role },
    { icon: Layers, label: 'Domain', value: project.domain },
    ...(project.stakeholder ? [{ icon: Users, label: 'Target stakeholder', value: project.stakeholder }] : []),
    { icon: CalendarClock, label: 'Last updated', value: formatDate(project.lastUpdated) },
  ];

  return (
    <article className="pb-24 pt-24 sm:pt-28">
      <div className="container-page">
        <Link to="/#projects" className="inline-flex items-center gap-2 rounded-lg py-2 text-sm font-medium text-muted transition-colors hover:text-ink">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All projects
        </Link>

        {/* Banner */}
        <Reveal className="mt-4 overflow-hidden rounded-[1.75rem] shadow-lift">
          <div className="relative">
            <ProjectCover motif={project.motif} number={project.number} large className="h-[260px] sm:h-[340px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <StatusPill status={project.status} className="!border-amber/50 !bg-navy/60 !text-amber backdrop-blur" />
                <span className="rounded-full border border-white/15 bg-navy/60 px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-wider text-sky backdrop-blur">
                  Project {project.number}
                </span>
              </div>
              <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">{project.name}</h1>
              <p className="mt-3 max-w-2xl text-sky/90 sm:text-lg">{project.tagline}</p>
            </div>
          </div>
        </Reveal>

        {/* Meta */}
        <Reveal delay={0.05}>
          <dl className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
            {meta.map((m) => (
              <div key={m.label} className="bg-surface p-5">
                <dt className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-wider text-subtle">
                  <m.icon className="h-3.5 w-3.5" aria-hidden="true" /> {m.label}
                </dt>
                <dd className="mt-1.5 text-sm font-semibold leading-snug text-ink">{m.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_320px]">
          {/* Main column */}
          <div className="min-w-0">
            <Reveal>
              <p className="eyebrow">Overview</p>
              <p className="mt-3 text-xl leading-relaxed text-ink sm:text-2xl sm:leading-relaxed">{project.summary}</p>
            </Reveal>

            <div className="mt-12 space-y-12">
              {project.caseStudy.map((s, i) => (
                <Reveal key={s.title}>
                  <section id={slugify(s.title)} aria-labelledby={`${slugify(s.title)}-h`} className="scroll-mt-28">
                    <h2 id={`${slugify(s.title)}-h`} className="flex items-baseline gap-3 text-2xl font-bold text-ink">
                      <span className="font-mono text-sm font-medium text-emphasis">{String(i + 1).padStart(2, '0')}</span>
                      {s.title}
                    </h2>
                    {s.paragraphs?.map((p) => (
                      <p key={p.slice(0, 30)} className="mt-4 leading-relaxed text-muted sm:text-[1.05rem]">
                        {p}
                      </p>
                    ))}
                    {s.bullets && (
                      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex gap-3 rounded-xl border border-line bg-surface p-4 text-[0.95rem] leading-relaxed text-ink">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ocean" aria-hidden="true" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                </Reveal>
              ))}
            </div>

            {/* Screenshots */}
            <Reveal className="mt-14">
              <section aria-labelledby="visuals-h">
                <h2 id="visuals-h" className="text-2xl font-bold text-ink">Screenshots & visuals</h2>
                <div className="mt-5">
                  {project.screenshots.length === 0 ? (
                    <MediaPlaceholder />
                  ) : (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {project.screenshots.map((m) => (
                        <figure key={m.src} className="overflow-hidden rounded-2xl border border-line bg-surface">
                          <img src={m.src} alt={m.alt} loading="lazy" className="w-full object-cover" />
                          {m.caption && <figcaption className="p-3 text-sm text-muted">{m.caption}</figcaption>}
                        </figure>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            </Reveal>

            {/* Learning */}
            <Reveal className="mt-14">
              <section aria-labelledby="learning-h" className="rounded-[1.5rem] bg-navy p-6 text-white sm:p-10">
                <h2 id="learning-h" className="flex items-center gap-3 text-2xl font-bold">
                  <BookOpen className="h-6 w-6 text-amber" aria-hidden="true" /> Key learning outcomes
                </h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                  {project.learning.map((l, i) => (
                    <li key={l} className="rounded-xl border border-white/10 bg-white/[0.05] p-4">
                      <span className="font-mono text-xs text-amber">0{i + 1}</span>
                      <p className="mt-1.5 text-sm leading-relaxed text-sky/90">{l}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start" aria-label="Project details">
            <nav aria-label="On this page" className="card hidden p-5 lg:block">
              <p className="eyebrow">On this page</p>
              <ol className="mt-3 space-y-1">
                {project.caseStudy.map((s) => (
                  <li key={s.title}>
                    <a href={`#${slugify(s.title)}`} className="block rounded-md py-1 text-sm text-muted transition-colors hover:text-ink">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="card p-5">
              <p className="flex items-center gap-2 font-display font-bold text-ink">
                <UserRound className="h-4 w-4 text-accent-text" aria-hidden="true" /> My responsibilities
              </p>
              <ul className="mt-3 space-y-2.5">
                {project.responsibilities.map((r) => (
                  <li key={r} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-amber" aria-hidden="true" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {project.tools.length > 0 && (
              <div className="card p-5">
                <p className="flex items-center gap-2 font-display font-bold text-ink">
                  <Wrench className="h-4 w-4 text-accent-text" aria-hidden="true" /> Tools used
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <li key={t} className="rounded-lg bg-surface-2 px-2.5 py-1 text-xs font-medium text-ink">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.links.length > 0 && (
              <div className="card p-5">
                <p className="font-display font-bold text-ink">Links & documents</p>
                <ul className="mt-3 space-y-2">
                  {project.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:underline">
                        {l.label} <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.confidentialityNote && (
              <div className="flex gap-3 rounded-2xl border border-line bg-surface-2 p-5 text-sm leading-relaxed text-muted">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent-text" aria-hidden="true" />
                <p>{project.confidentialityNote}</p>
              </div>
            )}
          </aside>
        </div>

        {/* Prev / next */}
        <nav aria-label="More projects" className="mt-20 grid gap-4 border-t border-line pt-10 sm:grid-cols-2">
          <Link to={`/projects/${prev.slug}`} className="group card flex items-center gap-4 p-5 transition-all hover:-translate-y-0.5 hover:shadow-lift">
            <ArrowLeft className="h-5 w-5 shrink-0 text-subtle transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            <span className="min-w-0">
              <span className="block font-mono text-xs uppercase tracking-wider text-subtle">Previous · {prev.number}</span>
              <span className="block truncate font-display font-bold text-ink">{prev.name}</span>
            </span>
          </Link>
          <Link to={`/projects/${next.slug}`} className="group card flex items-center justify-end gap-4 p-5 text-right transition-all hover:-translate-y-0.5 hover:shadow-lift">
            <span className="min-w-0">
              <span className="block font-mono text-xs uppercase tracking-wider text-subtle">Next · {next.number}</span>
              <span className="block truncate font-display font-bold text-ink">{next.name}</span>
            </span>
            <ArrowRight className="h-5 w-5 shrink-0 text-subtle transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </article>
  );
}
