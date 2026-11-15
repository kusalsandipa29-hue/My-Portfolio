import { usePageMeta } from '../hooks/usePageMeta';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Experience } from '../sections/Experience';
import { Projects } from '../sections/Projects';
import { Skills } from '../sections/Skills';
import { Education } from '../sections/Education';
import { Approach } from '../sections/Approach';
import { ResumeCta } from '../sections/ResumeCta';
import { Contact } from '../sections/Contact';

export function Home() {
  usePageMeta();
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Approach />
      <ResumeCta />
      <Contact />
    </>
  );
}
