import { ArrowRight, Download, FileText } from 'lucide-react';
import { site } from '../content/site';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';

export function ResumeCta() {
  return (
    <section aria-labelledby="resume-cta-title" className="py-16 sm:py-20">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-[1.75rem] bg-navy px-6 py-10 text-white shadow-lift sm:px-12 sm:py-14">
          <div className="bg-grid absolute inset-0 [--grid-line:rgba(142,202,230,0.07)]" aria-hidden="true" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-ocean/40 blur-3xl" aria-hidden="true" />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-sky">
                <FileText className="h-3.5 w-3.5" aria-hidden="true" /> Digital CV
              </p>
              <h2 id="resume-cta-title" className="mt-3 text-3xl font-bold sm:text-4xl">
                Need the one-page version?
              </h2>
              <p className="mt-3 text-sky/85">
                A clean, printable resume with my experience, projects, skills and education — ready to save as PDF.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button to="/resume">
                View resume <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              {site.resumePdf && (
                <a
                  href={site.resumePdf}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Download className="h-4 w-4" aria-hidden="true" /> Download PDF
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
