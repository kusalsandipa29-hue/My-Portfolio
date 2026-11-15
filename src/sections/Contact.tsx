import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone } from 'lucide-react';
import { contact, profile } from '../content/site';
import { GitHubIcon, LinkedInIcon } from '../components/BrandIcons';
import { Reveal } from '../components/Reveal';
import { SectionHeader } from '../components/SectionHeader';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const channels = [
    {
      label: 'LinkedIn',
      value: 'Connect professionally',
      href: profile.linkedin,
      icon: <LinkedInIcon className="h-5 w-5" />,
    },
    {
      label: 'GitHub',
      value: 'kusalsandipa29-hue',
      href: profile.github,
      icon: <GitHubIcon className="h-5 w-5" />,
    },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="pb-24 pt-20 sm:pb-32 sm:pt-28">
      <div className="container-page">
        <SectionHeader index="07" eyebrow="Contact" id="contact-title" title={contact.heading} intro={contact.message} />

        <div className="grid gap-4 lg:grid-cols-5">
          {/* Email */}
          <Reveal className="relative overflow-hidden rounded-[1.5rem] bg-navy p-6 text-white shadow-lift sm:p-10 lg:col-span-3">
            <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-ocean/40 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-amber text-navy">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-6 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-sky">Best way to reach me</p>
              <p className="mt-2 break-all font-display text-2xl font-bold sm:text-3xl">{profile.email}</p>
              <p className="mt-2 text-sm text-sky/80">{contact.responseNote}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${profile.email}?subject=${encodeURIComponent('Hello Kusal — from your portfolio')}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber px-5 py-3 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" /> Send an email
                </a>
                <button
                  type="button"
                  onClick={copy}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
                  {copied ? 'Copied' : 'Copy address'}
                </button>
                <span className="sr-only" aria-live="polite">
                  {copied ? 'Email address copied to clipboard' : ''}
                </span>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 lg:col-span-2">
            {channels.map((c, i) => (
              <Reveal key={c.label} delay={0.05 * (i + 1)}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card flex items-center gap-4 p-5 transition-all hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lift"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-surface-2 text-ink">{c.icon}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display font-bold text-ink">{c.label}</span>
                    <span className="block truncate text-sm text-muted">{c.value}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </Reveal>
            ))}
            <Reveal delay={0.15} className="card flex flex-col gap-3 p-5">
              <p className="flex items-center gap-3 text-sm text-muted">
                <MapPin className="h-4 w-4 text-accent-text" aria-hidden="true" /> Based in {profile.location}
              </p>
              {profile.phoneVisible && (
                <a href={profile.phoneHref} className="flex items-center gap-3 text-sm text-muted hover:text-ink">
                  <Phone className="h-4 w-4 text-accent-text" aria-hidden="true" /> {profile.phone}
                </a>
              )}
              <p className="text-sm text-muted">{profile.availability}.</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
