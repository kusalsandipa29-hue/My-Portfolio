import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';
import { usePageMeta } from '../hooks/usePageMeta';

export function NotFound() {
  usePageMeta('Page not found');
  return (
    <section className="grid min-h-[80vh] place-items-center px-4 pt-24 text-center">
      <div>
        <p className="font-mono text-sm text-emphasis">404</p>
        <h1 className="mt-3 text-4xl font-extrabold text-ink sm:text-5xl">This page isn't on the plan.</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">The link may be outdated, or the page may have moved.</p>
        <div className="mt-8 flex justify-center">
          <Button to="/">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to home
          </Button>
        </div>
      </div>
    </section>
  );
}
