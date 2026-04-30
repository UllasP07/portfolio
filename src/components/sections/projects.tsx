'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Code2 } from 'lucide-react';
import { projects } from '@/data/content';

export function Projects() {
  return (
    <section className="section-shell" id="projects">
      <div className="section-inner">
        <div className="mb-12 max-w-3xl">
          <span className="section-kicker">Projects</span>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl lg:text-5xl">Selected AI + cloud systems</h2>
          <p className="mt-4 text-base leading-8 text-white/70 sm:text-lg">
            A few builds that show how I connect frontend systems, AI workflows, and cloud delivery into production-ready products.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="glass-card overflow-hidden p-6 sm:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                <div className="space-y-5">
                  <div className="space-y-2">
                    <p className="mono text-xs uppercase tracking-[0.18em] text-brand-accent">{project.category}</p>
                    <h3 className="text-2xl font-semibold sm:text-3xl">{project.title}</h3>
                    <p className="text-base leading-8 text-white/72">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-danger px-5 py-3 text-sm font-semibold text-brand-light transition hover:bg-[#ff4b58]"
                    >
                      Live
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-brand-light transition hover:border-brand-accent/40 hover:bg-white/10"
                    >
                      Repo
                      <Code2 className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="mono text-xs uppercase tracking-[0.18em] text-brand-accent">Outcomes</p>
                    <ul className="mt-4 space-y-3">
                      {project.outcomes.map((outcome) => (
                        <li key={outcome} className="flex gap-3 text-sm leading-7 text-white/72">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-danger" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="mono mb-3 text-xs uppercase tracking-[0.18em] text-brand-accent">Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tag-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
