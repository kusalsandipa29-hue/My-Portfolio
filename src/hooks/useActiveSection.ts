import { useEffect, useState } from 'react';

/** Returns the id of the section currently in view (for nav highlighting). */
export function useActiveSection(ids: string[], enabled = true) {
  const [active, setActive] = useState('');

  useEffect(() => {
    if (!enabled) {
      setActive('');
      return;
    }
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids, enabled]);

  return active;
}
