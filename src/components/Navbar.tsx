import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FileText, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { useActiveSection } from '../hooks/useActiveSection';
import { cn } from '../lib/cn';

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'approach', label: 'Approach' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const { pathname } = useLocation();
  const onHome = pathname === '/';
  const ids = useMemo(() => navItems.map((n) => n.id), []);
  const active = useActiveSection(ids, onHome);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on route change, Escape, or resize to desktop
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'no-print fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open ? 'border-b border-line bg-bg/80 backdrop-blur-xl' : 'border-b border-transparent',
      )}
    >
      <nav className="container-page flex h-[72px] items-center justify-between gap-4" aria-label="Main">
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={`/#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                className={cn(
                  'relative rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  active === item.id ? 'text-ink' : 'text-muted hover:text-ink',
                )}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-amber"
                    transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/resume"
            className="hidden items-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 dark:bg-sky dark:text-navy sm:inline-flex"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            Resume
          </Link>
          <ThemeToggle />
          <button
            ref={menuButton}
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100dvh - 72px)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-y-auto border-t border-line bg-bg lg:hidden"
          >
            <ul className="container-page flex flex-col gap-1 py-6">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i + 0.05 }}
                >
                  <Link
                    to={`/#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-3.5 font-display text-xl font-bold text-ink hover:bg-surface-2"
                  >
                    {item.label}
                    <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                  </Link>
                </motion.li>
              ))}
              <li className="mt-4">
                <Link
                  to="/resume"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-highlight px-4 py-3.5 font-semibold text-highlight-ink"
                >
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  View resume
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
