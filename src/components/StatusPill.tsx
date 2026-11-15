import { cn } from '../lib/cn';

export function StatusPill({ status, className }: { status: string; className?: string }) {
  const live = /ongoing|progress|current/i.test(status);
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.68rem] font-medium uppercase tracking-wider',
        live ? 'border-amber/40 bg-amber/10 text-emphasis dark:text-amber' : 'border-line-strong bg-surface-2 text-muted',
        className,
      )}
    >
      <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
        {live && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-60" />}
        <span className={cn('relative inline-flex h-1.5 w-1.5 rounded-full', live ? 'bg-orange' : 'bg-ocean')} />
      </span>
      {status}
    </span>
  );
}
