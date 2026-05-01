'use client';

import { motion } from 'framer-motion';
import { experience } from '@/data/content';

export function Experience() {
  return (
    <section className="section-shell" id="experience">
      <div className="section-inner">
        <div style={{ marginBottom: '3rem', maxWidth: '640px' }}>
          <span className="kicker">Experience</span>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, marginTop: '1rem' }}>
            A timeline of shipped systems
          </h2>
          <p style={{ marginTop: '0.9rem', fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-2)' }}>
            Work that improves developer velocity, strengthens reliability, and makes AI features easier to run in production.
          </p>
        </div>

        <div style={{ position: 'relative', paddingLeft: '1.75rem', borderLeft: '1px solid rgba(141,153,174,0.3)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {experience.map((item, i) => (
              <motion.article key={item.company}
                initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="glass-card"
                style={{ position: 'relative', padding: '1.5rem 1.75rem' }}
              >
                {/* dot */}
                <span style={{ position: 'absolute', left: '-2.35rem', top: '1.75rem', width: '11px', height: '11px', borderRadius: '50%', background: 'var(--c-red)', border: '2.5px solid var(--bg-page)', boxShadow: '0 0 0 1px var(--c-red)' }} />

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'space-between', marginBottom: '1.1rem' }}>
                  <div>
                    <p style={{ fontFamily: 'var(--font-syne)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-1)' }}>{item.role}</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--c-lavender)', marginTop: '0.2rem' }}>{item.company}</p>
                  </div>
                  <span className="mono" style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-3)', marginTop: '0.2rem' }}>{item.period}</span>
                </div>

                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {item.bullets.map(b => (
                    <li key={b} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-2)' }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--c-lavender)', flexShrink: 0, marginTop: '0.6rem' }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
