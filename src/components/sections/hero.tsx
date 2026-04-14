import { heroContent, stats } from '@/data/content';
import { ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';

const focusAreas = ['AI copilots', 'Developer platforms', 'Cloud & DevOps automation'];
const trustSignals = ['Azure', 'AWS', 'GCP', 'LangChain'];

export function Hero() {
  const resumeIsPlaceholder = heroContent.resume.includes('example.com');
  const resumeHref = resumeIsPlaceholder ? 'mailto:hello@ullas.dev?subject=Resume request' : heroContent.resume;
  const resumeLabel = resumeIsPlaceholder ? 'Request resume' : heroContent.secondaryCta;

  return (
    <section className="section-shell pt-20" id="hero">
      <div className="section-inner relative overflow-hidden rounded-[36px] border border-white/5 bg-gradient-to-b from-[#0e1628] via-[#060c18] to-[#050910] p-10 shadow-[0_40px_120px_rgba(5,9,16,0.9)]">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-accent/20 blur-[160px]" />
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.8fr)]">
          <div className="space-y-8">
            <p className="eyebrow">Software · AI · Cloud</p>
            <div className="space-y-5">
              <h1 className="text-4xl leading-tight text-brand-light sm:text-5xl lg:text-6xl">
                {heroContent.headline}{' '}
                <span className="text-transparent bg-gradient-to-r from-brand-accent to-brand-danger bg-clip-text">
                  with production rigor.
                </span>
              </h1>
              <p className="muted max-w-2xl text-lg">{heroContent.summary}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {focusAreas.map((focus) => (
                <span
                  key={focus}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-brand-light/80"
                >
                  {focus}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-brand-danger px-6 py-3 text-base font-semibold text-white shadow-[0_10px_40px_rgba(230,57,70,0.4)] transition hover:scale-[1.03]"
              >
                {heroContent.primaryCta} <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={resumeHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-base text-brand-light/80 transition hover:border-white/60 hover:text-brand-light"
              >
                {resumeLabel}
              </a>
            </div>
            <div className="flex flex-wrap gap-8 text-sm text-brand-light/70">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-brand-accent" />
                <span>Available for Staff+ platform + AI roles</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-brand-danger" />
                <span>Hands-on with delivery, ops, and narrative</span>
              </div>
            </div>
          </div>

          <div className="surface-panel relative overflow-hidden p-8 text-sm">
            <div className="mb-8 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-brand-light/60">
              <span>Signal Board</span>
              <span>24h pulse</span>
            </div>
            <div className="grid gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.4em] text-brand-light/60">{stat.label}</p>
                  <div className="mt-2 flex items-end justify-between">
                    <span className="text-4xl font-semibold text-brand-light">{stat.value}</span>
                    <span className="text-right text-xs text-brand-light/60">{stat.detail}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="divider-gradient my-8" />
            <div className="grid gap-4">
              <p className="text-xs uppercase tracking-[0.4em] text-brand-light/60">Built with</p>
              <div className="flex flex-wrap gap-3 text-sm text-brand-light/80">
                {trustSignals.map((signal) => (
                  <div key={signal} className="rounded-full border border-white/10 px-4 py-2">
                    {signal}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
