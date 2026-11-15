import { profile, site } from '../content/site';
import { cn } from '../lib/cn';

/**
 * Shows your photo when `site.photo` is set, otherwise a monogram placeholder.
 * No stock or generated portrait is ever used.
 */
export function ProfilePhoto({ className, size = 'lg' }: { className?: string; size?: 'sm' | 'lg' }) {
  const dims = size === 'lg' ? 'h-24 w-24 text-2xl' : 'h-16 w-16 text-lg';
  if (site.photo) {
    return (
      <img
        src={site.photo}
        alt={`Portrait of ${profile.displayName}`}
        width={192}
        height={192}
        className={cn('rounded-2xl object-cover ring-1 ring-line-strong', dims, className)}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={`${profile.displayName} monogram (photo placeholder)`}
      className={cn(
        'relative grid place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-ocean to-navy font-display font-extrabold tracking-tight text-white ring-1 ring-sky/40',
        dims,
        className,
      )}
    >
      <span className="relative z-10">{profile.initials}</span>
      <span className="absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-sky/25 blur-md" aria-hidden="true" />
    </div>
  );
}
