import { experience } from '@/data/content';

export function Experience() {
  return (
    <section className="section-shell" id="experience">
      <div className="space-y-6">
        <p className="text-sm text-brand-accent uppercase tracking-[0.3em]">Impact timeline</p>
        <h2 className="text-3xl font-semibold">Roles where software met AI + Cloud scale.</h2>
      </div>
      <div className="mt-10 space-y-8">
        {experience.map((exp) => (
          <article key={exp.company} className="glass-card p-8 border border-white/10">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-semibold">{exp.company}</h3>
                <p className="text-brand-light/70">{exp.role}</p>
              </div>
              <p className="text-sm text-brand-light/60">{exp.period}</p>
            </div>
            <ul className="mt-6 space-y-3 text-brand-light/80">
              {exp.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="text-brand-accent">▹</span>
                  <p>{bullet}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
