import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          onClick={() => {
            window.scrollTo({ top: 0 });
            document.getElementById('main')?.focus({ preventScroll: true });
          }}
          aria-label="Back to top"
          className="no-print fixed bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-xl border border-line-strong bg-surface text-ink shadow-lift transition-colors hover:border-accent hover:text-accent-text sm:bottom-8 sm:right-8"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
