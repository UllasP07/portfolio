'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Download } from 'lucide-react';
import { heroContent, stats } from '@/data/content';

export function Hero() {
  return (
    <section className="section-shell pb-20 pt-12 sm:pt-16 lg:pt-20" id="hero">
      <div className="section-inner">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-7"
          >
            <span className="section-kicker">{heroContent.eyebrow}</span>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                {heroContent.headline}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-white/75 sm:text-lg">{heroContent.summary}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-danger px-6 py-3 text-sm font-semibold text-brand-light transition hover:bg-[#ff4b58]"
              >
                {heroContent.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={heroContent.resumeHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-brand-light transition hover:border-brand-accent/40 hover:bg-white/10"
              >
                <Download className="h-4 w-4" />
                {heroContent.secondaryCta}
              </a>
              <a
                href={heroContent.bookCallHref}
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-brand-muted/40 px-6 py-3 text-sm font-medium text-brand-accent transition hover:bg-brand-muted/10"
              >
                <CalendarDays className="h-4 w-4" />
                Book a Call
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12, duration: 0.55 }}
            className="glass-card relative overflow-hidden p-6 sm:p-8"
          >
            <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(230,57,70,0.26),transparent_68%)]" />
            <div className="relative space-y-6">
              <div>
                <p className="mono text-xs uppercase tracking-[0.2em] text-brand-accent">Telemetry snapshot</p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Engineering impact at a glance</h2>
              </div>

              <div className="grid gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="text-3xl font-bold text-brand-light">{stat.value}</div>
                    <div className="mt-2 text-sm font-medium text-brand-light">{stat.label}</div>
                    <div className="mt-1 text-sm leading-6 text-white/65">{stat.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
