import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { Experience } from '@/components/sections/experience';
import { Contact } from '@/components/sections/contact';
import { CoffeeCounter } from '@/components/interactive/coffee-counter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <section className="section-shell" id="telemetry">
        <div className="section-inner">
          <CoffeeCounter />
        </div>
      </section>
      <Contact />
    </>
  );
}
