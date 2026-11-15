import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { cn } from '../lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost';

const styles: Record<Variant, string> = {
  primary:
    'bg-highlight text-highlight-ink shadow-[0_8px_24px_-10px_rgba(255,183,3,0.7)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(255,183,3,0.85)]',
  secondary: 'border border-line-strong bg-surface text-ink hover:-translate-y-0.5 hover:border-accent hover:shadow-card',
  ghost: 'text-ink hover:bg-surface-2',
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200';

interface Props {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  to?: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
}

/** Renders a router Link, an anchor, or a button depending on props. */
export function Button({ children, variant = 'primary', className, to, href, external, onClick, ariaLabel }: Props) {
  const cls = cn(base, styles[variant], className);
  if (to)
    return (
      <Link to={to} className={cls} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  if (href)
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  return (
    <button type="button" onClick={onClick} className={cls} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
