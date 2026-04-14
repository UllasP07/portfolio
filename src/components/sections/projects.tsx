import { projects } from '@/data/content';
import { ArrowUpRight, Code2 } from 'lucide-react';

export function Projects() {
  return (
    <section className="section-shell" id="projects">
      <div className="flex flex-col gap-6 mb-10">
        <p className="text-sm text-brand-accent uppercase tracking-[0.3em]">Mega-projects</p>
        <h2 className="text-3xl font-semibold max-w-3xl">
          Two to three end-to-end builds showing the power trio: product UX, AI brains, and hardened cloud infra.
        </h2>
        <p className="text-brand-light/70 max-w-3xl">
          Each card highlights the problem → solution framing, what the AI/automation layer adds, and how the DevOps stack keeps it alive in production.
        </p>
      </div>
      <div className="grid gap-8">
        {projects.map((project) => (
          <article key={project.title} className="glass-card p-8 border border-white/10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-brand-light">{project.title}</h3>
                <p className="text-brand-light/70 mt-2 max-w-2xl">{project.description}</p>
              </div>
              <div className="flex gap-3 text-sm">
                <a
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 rounded-full bg-brand-light/10 hover:bg-brand-light/20 inline-flex items-center gap-1"
                >
                  Live <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  className="px-4 py-2 rounded-full border border-brand-light/20 inline-flex items-center gap-2"
                >
                  <Code2 className="h-4 w-4" /> Repo
                </a>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-brand-light/80">
              {project.outcomes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-brand-danger">▹</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-6">
              {project.tech.map((tech) => (
                <span key={tech} className="text-xs px-3 py-1 rounded-full bg-brand-light/10">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
