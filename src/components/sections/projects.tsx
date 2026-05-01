'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Code2 } from 'lucide-react';
import { projects } from '@/data/content';

export function Projects() {
  return (
    <section className="section-shell" id="projects">
      <div className="section-inner">
        <div style={{ marginBottom: '3rem', maxWidth: '640px' }}>
          <span className="kicker">Projects</span>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, marginTop: '1rem' }}>
            Selected AI + cloud systems
          </h2>
          <p style={{ marginTop: '0.9rem', fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-2)' }}>
            Builds that connect frontend systems, AI workflows, and cloud delivery into production-ready products.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {projects.map((project, i) => (
            <motion.article key={project.title}
              initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="glass-card"
              style={{ padding: '1.75rem 2rem', overflow: 'hidden' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '2rem', alignItems: 'start' }}>
                {/* Left */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                  <div>
                    <p className="mono" style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--c-lavender)', marginBottom: '0.5rem' }}>{project.category}</p>
                    <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(1.3rem, 3vw, 1.75rem)', fontWeight: 700 }}>{project.title}</h3>
                    <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--text-2)', marginTop: '0.6rem' }}>{project.description}</p>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                    <a href={project.live} target="_blank" rel="noreferrer" className="btn-red" style={{ fontSize: '0.85rem', padding: '0.5rem 1.1rem' }}>
                      Live <ArrowUpRight style={{ width: 14, height: 14 }} />
                    </a>
                    <a href={project.repo} target="_blank" rel="noreferrer" className="btn-ghost" style={{ fontSize: '0.85rem', padding: '0.5rem 1.1rem' }}>
                      Repo <Code2 style={{ width: 14, height: 14 }} />
                    </a>
                  </div>
                </div>

                {/* Right */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ border: '1px solid var(--border)', background: 'rgba(255,255,255,0.03)', borderRadius: '0.875rem', padding: '1.1rem 1.25rem' }}>
                    <p className="mono" style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--c-lavender)', marginBottom: '0.75rem' }}>Outcomes</p>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                      {project.outcomes.map(o => (
                        <li key={o} style={{ display: 'flex', gap: '0.65rem', fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--text-2)' }}>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--c-red)', flexShrink: 0, marginTop: '0.55rem' }} />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mono" style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--c-lavender)', marginBottom: '0.6rem' }}>Stack</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
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
