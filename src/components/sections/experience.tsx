import { experience } from '@/data/content';

export function Experience() {
  return (
    <section className="section-shell bg-[#030814]" id="experience">
      <div className="section-inner">
        <div className="space-y-4">
          <p className="eyebrow">Experience</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">A narrative through platform, AI, and SRE mandates.</h2>
          <p className="muted max-w-3xl">
            I thrive in roles that expect engineers to bridge strategy with hands-on execution. Each stop below involved
            leading multi-disciplinary teams across UX, infra, and AI.
          </p>
        </div>
        <div className="relative mt-12">
          <div className="timeline-line hidden md:block" />
          <div className="space-y-10">
            {experience.map((exp) => (
              <article key={exp.company} className="relative grid gap-6 md:grid-cols-[180px_1fr]">
                <div className="flex items-start gap-4 md:flex-col md:items-stretch">
                  <div className="hidden md:block">
                    <span className="timeline-dot" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-brand-light/60">{exp.period}</p>
                    <p className="text-sm font-semibold text-brand-light mt-1 md:mt-4">{exp.company}</p>
                  </div>
                </div>
                <div className="surface-card p-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-lg font-semibold">{exp.role}</p>
                      <p className="text-sm text-brand-light/70">{exp.company}</p>
                    </div>
                    <p className="text-xs uppercase tracking-[0.3em] text-brand-light/60 md:hidden">{exp.period}</p>
                  </div>
                  <ul className="mt-5 space-y-3 text-sm text-brand-light/85">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-accent" />
                        <p>{bullet}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
