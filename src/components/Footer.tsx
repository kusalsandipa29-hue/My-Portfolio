import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { profile } from '../content/site';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="no-print border-t border-line">
      <div className="container-page flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <Logo />
          <p className="text-sm text-muted">Software Project Management · {profile.location}</p>
        </div>
        <div className="flex flex-col gap-4 sm:items-end">
          <div className="flex items-center gap-2">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="grid h-10 w-10 place-items-center rounded-xl border border-line text-muted transition-colors hover:border-accent hover:text-accent-text">
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="grid h-10 w-10 place-items-center rounded-xl border border-line text-muted transition-colors hover:border-accent hover:text-accent-text">
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Send an email" className="grid h-10 w-10 place-items-center rounded-xl border border-line text-muted transition-colors hover:border-accent hover:text-accent-text">
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <p className="text-xs text-subtle">
            © {new Date().getFullYear()} {profile.displayName} ·{' '}
            <Link to="/resume" className="underline-offset-4 hover:text-ink hover:underline">
              Digital CV
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
