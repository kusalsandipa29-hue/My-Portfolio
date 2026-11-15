import { ImageIcon, Lock } from 'lucide-react';

/** Shown in a case study when no approved screenshots have been added yet. */
export function MediaPlaceholder() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <div className="relative grid aspect-[16/10] place-items-center overflow-hidden rounded-2xl border border-dashed border-line-strong bg-surface-2 sm:col-span-2">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <div className="relative max-w-xs px-6 text-center">
          <span className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-surface text-accent-text shadow-card">
            <Lock className="h-5 w-5" aria-hidden="true" />
          </span>
          <p className="mt-3 font-display font-semibold text-ink">Visuals shared once approved</p>
          <p className="mt-1 text-sm text-muted">
            Screenshots of internal systems are only published after approval for public release.
          </p>
        </div>
      </div>
      <div className="hidden gap-3 sm:grid">
        {[0, 1].map((i) => (
          <div key={i} className="grid place-items-center rounded-2xl border border-dashed border-line-strong bg-surface-2" aria-hidden="true">
            <ImageIcon className="h-5 w-5 text-subtle" />
          </div>
        ))}
      </div>
    </div>
  );
}
