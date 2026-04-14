import { heroContent, stats } from '@/data/content';
import { ArrowUpRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="section-shell pt-24" id="hero">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div className="space-y-8">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-accent font-mono">
            Multi-device · AI-native · Cloud-ready
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-brand-light">
            {heroContent.headline}
          </h1>
          <p className="text-lg text-brand-light/80 max-w-2xl">{heroContent.summary}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-brand-danger text-brand-light font-semibold shadow-glow hover:scale-105 transition"
            >
              {heroContent.primaryCta}
            </a>
            <a
              href={heroContent.resume}
              target="_blank"
              className="px-6 py-3 rounded-full border border-brand-light/30 text-brand-light/80 hover:text-brand-light"
            >
              {heroContent.secondaryCta}
            </a>
          </div>
        </div>
        <div className="glass-card p-8 space-y-6 shadow-glow" aria-label="Key stats">
          <div>
            <p className="text-sm text-brand-light/70 mb-1">Now building</p>
            <h2 className="text-2xl font-semibold text-brand-light">
              Software + AI + Cloud Ops that feel inevitable.
            </h2>
          </div>
          <div className="grid gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-start justify-between">
                <div>
                  <p className="text-3xl font-semibold text-brand-light">{stat.value}</p>
                  <p className="text-sm text-brand-light/60">{stat.label}</p>
                </div>
                <p className="text-xs text-right text-brand-light/60 max-w-[150px]">{stat.detail}</p>
              </div>
            ))}
          </div>
          <a href="#telemetry" className="inline-flex items-center gap-2 text-brand-accent text-sm">
            View build telemetry
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
