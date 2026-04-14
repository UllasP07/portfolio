import { projects } from '@/data/content';
import { ArrowUpRight, Code2 } from 'lucide-react';

const isPlaceholderLink = (href: string) => href.includes('example.com');

export function Projects() {
  return (
    <section className="section-shell bg-[#040815]" id="projects">
      <div className="section-inner">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Case Studies</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            End-to-end systems that blend product polish, AI brains, and hardened cloud delivery.
          </h2>
          <p className="muted">
            Highlights from platforms where I owned architecture, AI integration, and operational excellence—from
            developer control planes to production copilots.
          </p>
        </div>
        <div className="mt-12 space-y-14">
          {projects.map((project, index) => {
            const liveIsPlaceholder = isPlaceholderLink(project.live);
            return (
              <article
                key={project.title}
                className="grid gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:items-stretch"
              >
                <div className="surface-panel p-6">
                  <div className="project-preview mb-6">
                    <div className="text-xs uppercase tracking-[0.4em] text-brand-light/70">
                      {project.category ?? 'Case Study'}
                    </div>
                    <div className="mt-6 text-3xl font-semibold text-brand-light">{project.title}</div>
                    <p className="mt-4 text-sm text-brand-light/75">{project.description}</p>
                  </div>
                  <div className="space-y-4 rounded-2xl border border-white/5 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-brand-light/60">Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs text-brand-light/80">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="surface-card flex flex-col gap-6 p-8">
                  <div>
                    <p className="text-sm font-semibold text-brand-light">{project.title}</p>
                    <p className="muted mt-2">{project.description}</p>
                  </div>
                  <ul className="space-y-4 text-sm text-brand-light/85">
                    {project.outcomes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-brand-danger" />
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="divider-gradient" />
                  <div className="flex flex-wrap gap-3 text-sm">
                    {liveIsPlaceholder ? (
                      <span className="rounded-full border border-white/15 px-4 py-2 text-brand-light/80">
                        Private demo on request
                      </span>
                    ) : (
                      <a
                        href={project.live}
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-full bg-brand-danger/80 px-4 py-2 text-white transition hover:bg-brand-danger"
                      >
                        View live <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                    <a
                      href={project.repo}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-brand-light/80 transition hover:border-white/40 hover:text-brand-light"
                    >
                      <Code2 className="h-4 w-4" /> Repo
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
