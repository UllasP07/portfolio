'use client';

import { motion } from 'framer-motion';
import { experience } from '@/data/content';

export function Experience() {
  return (
    <section className="section-shell" id="experience">
      <div className="section-inner">
        <div className="mb-12 max-w-3xl">
          <span className="section-kicker">Experience</span>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl lg:text-5xl">A timeline of shipped systems</h2>
          <p className="mt-4 text-base leading-8 text-white/70 sm:text-lg">
            I focus on work that improves developer velocity, strengthens reliability, and makes AI features easier to run in production.
          </p>
        </div>

        <div className="relative pl-6 sm:pl-8">
          <div className="absolute bottom-0 left-2 top-0 w-px bg-gradient-to-b from-brand-accent/50 via-white/10 to-transparent sm:left-3" />
          <div className="space-y-6">
            {experience.map((item, index) => (
              <motion.article
                key={item.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="glass-card relative p-6 sm:p-7"
              >
                <span className="absolute -left-[1.95rem] top-8 h-3.5 w-3.5 rounded-full border-4 border-[#0b1423] bg-brand-danger sm:-left-[2.45rem]" />
                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xl font-semibold text-brand-light">{item.role}</p>
                    <p className="mt-1 text-sm font-medium text-brand-accent">{item.company}</p>
                  </div>
                  <span className="mono text-xs uppercase tracking-[0.18em] text-white/55">{item.period}</span>
                </div>

                <ul className="space-y-3">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-7 text-white/72">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-accent" />
                      <span>{bullet}</span>
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
