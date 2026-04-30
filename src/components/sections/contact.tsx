'use client';

import { motion } from 'framer-motion';
import { AtSign, BriefcaseBusiness, Code2 } from 'lucide-react';
import { contactLinks } from '@/data/content';

const socialIcons = {
  GitHub: Code2,
  LinkedIn: BriefcaseBusiness,
  Email: AtSign
};

export function Contact() {
  return (
    <section className="section-shell" id="contact">
      <div className="section-inner">
        <div className="mb-12 max-w-3xl">
          <span className="section-kicker">Contact</span>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl lg:text-5xl">Let&apos;s build something reliable</h2>
          <p className="mt-4 text-base leading-8 text-white/70 sm:text-lg">
            If you&apos;re hiring for AI, full-stack, or cloud platform work, I&apos;m happy to connect and talk through the problem space.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]"
        >
          {contactLinks.map((link) => {
            const Icon = socialIcons[link.label as keyof typeof socialIcons];
            if (!Icon) return null;

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="glass-card group p-6 transition hover:-translate-y-1 hover:border-brand-accent/20 hover:bg-white/[0.07]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mono text-xs uppercase tracking-[0.18em] text-brand-accent">{link.label}</p>
                    <p className="mt-3 text-lg font-semibold text-brand-light">{link.value}</p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-brand-light transition group-hover:border-brand-accent/40 group-hover:text-brand-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
