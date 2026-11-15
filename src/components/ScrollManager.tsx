import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Scrolls to #hash targets after navigation, or to the top on a new page. */
export function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      return;
    }
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    let timer: number;
    const attempt = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ block: 'start' });
        // Move focus for keyboard and screen-reader users without a second jump
        const heading = el.querySelector('h2, h1') as HTMLElement | null;
        if (heading) {
          heading.setAttribute('tabindex', '-1');
          heading.focus({ preventScroll: true });
        }
      } else if (tries++ < 20) {
        timer = window.setTimeout(attempt, 50);
      }
    };
    attempt();
    return () => window.clearTimeout(timer);
  }, [pathname, hash, key]);

  return null;
}
