import { Link } from 'react-router-dom';
import { profile } from '../content/site';

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label={`${profile.displayName} — home`}>
      <span className="relative grid h-9 w-9 place-items-center rounded-[10px] bg-navy font-display text-[0.8rem] font-extrabold tracking-tight text-white ring-1 ring-sky/30 dark:bg-ocean/20 dark:text-sky">
        {profile.initials}
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-amber ring-2 ring-bg transition-transform group-hover:scale-125" />
      </span>
      <span className="font-display text-[0.98rem] font-bold tracking-tight text-ink">{profile.displayName}</span>
    </Link>
  );
}
