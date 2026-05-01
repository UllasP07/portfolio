import { Hero }          from '@/components/sections/hero';
import { Experience }    from '@/components/sections/experience';
import { Projects }      from '@/components/sections/projects';
import { Skills }        from '@/components/sections/skills';
import { CoffeeCounter } from '@/components/interactive/coffee-counter';
import { Contact }       from '@/components/sections/contact';
import { ChatBot }       from '@/components/interactive/chatbot';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <section className="section-shell" id="telemetry">
        <div className="section-inner">
          <CoffeeCounter />
        </div>
      </section>
      <Contact />
      <ChatBot />
    </>
  );
}
