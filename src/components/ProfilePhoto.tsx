import { profile, site } from '../content/site';
import { cn } from '../lib/cn';

type Size = 'sm' | 'lg' | 'portrait';

const monogramDims: Record<Size, string> = {
  sm: 'h-16 w-16 text-lg',
  lg: 'h-24 w-24 text-2xl',
  portrait: 'aspect-[4/5] w-28 text-2xl sm:w-36 lg:w-40',
};

/**
 * Shows your photo when `site.photo` is set, otherwise a monogram placeholder.
 * The `portrait` size renders a 4:5 framed portrait (used in the Hero).
 */
export function ProfilePhoto({ className, size = 'lg' }: { className?: string; size?: Size }) {
  if (site.photo && size === 'portrait') {
    return (
      <div
        className={cn(
          // thin brand-gradient frame
          'shrink-0 rounded-[18px] bg-gradient-to-br from-sky via-ocean to-navy p-[2px] shadow-card dark:from-sky/70 dark:via-ocean/60 dark:to-sky/10',
          className,
        )}
      >
        <img
          src={site.photo}
          srcSet={site.photo2x ? `${site.photo} 1x, ${site.photo2x} 2x` : undefined}
          alt={site.photoAlt}
          width={400}
          height={500}
          decoding="async"
          {...{ fetchpriority: 'high' }}
          className="block aspect-[4/5] w-28 rounded-2xl bg-surface-2 object-cover object-[50%_25%] sm:w-36 lg:w-40"
        />
      </div>
    );
  }

  if (site.photo) {
    const dims = size === 'lg' ? 'h-24 w-24' : 'h-16 w-16';
    return (
      <img
        src={site.photo}
        srcSet={site.photo2x ? `${site.photo} 1x, ${site.photo2x} 2x` : undefined}
        alt={site.photoAlt}
        width={192}
        height={192}
        className={cn('rounded-2xl object-cover object-[50%_20%] ring-1 ring-line-strong', dims, className)}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`${profile.displayName} monogram (photo placeholder)`}
      className={cn(
        'relative grid place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-ocean to-navy font-display font-extrabold tracking-tight text-white ring-1 ring-sky/40',
        monogramDims[size],
        className,
      )}
    >
      <span className="relative z-10">{profile.initials}</span>
      <span className="absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-sky/25 blur-md" aria-hidden="true" />
    </div>
  );
}
