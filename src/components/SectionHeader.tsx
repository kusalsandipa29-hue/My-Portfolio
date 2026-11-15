import { Reveal } from './Reveal';

interface Props {
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  id: string;
}

export function SectionHeader({ index, eyebrow, title, intro, id }: Props) {
  return (
    <Reveal className="mb-10 max-w-2xl sm:mb-14">
      <p className="eyebrow flex items-center gap-3">
        <span className="text-emphasis">{index}</span>
        <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
    </Reveal>
  );
}
