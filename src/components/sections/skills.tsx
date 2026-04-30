'use client';

import { motion } from 'framer-motion';
import { skillBuckets } from '@/data/content';
import { cn } from '@/lib/utils';

export function Skills() {
  return (
    <section className="section-shell" id="skills">
      <div className="section-inner">
        <div className="mb-12 max-w-3xl">
          <span className="section-kicker">Skills</span>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl lg:text-5xl">Core tools across the stack</h2>
          <p className="mt-4 text-base leading-8 text-white/70 sm:text-lg">
            The buckets below reflect the systems work I do most often, from frontend architecture to AI workflows and platform reliability.
          </p>
        </div>

        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
          {skillBuckets.map((bucket, index) => (
            <motion.div
              key={bucket.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className={cn(
                'glass-card p-6 transition hover:-translate-y-1 hover:border-brand-accent/20 hover:bg-white/[0.07]'
              )}
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-brand-danger" />
                <h3 className="text-lg font-semibold text-brand-light">{bucket.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {bucket.items.map((item) => (
                  <span key={item} className="tag-pill">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
