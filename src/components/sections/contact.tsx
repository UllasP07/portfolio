import { contactLinks, heroContent } from '@/data/content';

export function Contact() {
  const resumeIsPlaceholder = heroContent.resume.includes('example.com');
  const resumeHref = resumeIsPlaceholder ? 'mailto:hello@ullas.dev?subject=Resume request' : heroContent.resume;
  const resumeLabel = resumeIsPlaceholder ? 'Request resume' : 'Download resume';

  return (
    <section className="section-shell" id="contact">
      <div className="section-inner">
        <div className="surface-accent p-10 text-white">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-5">
              <p className="eyebrow text-white/80">Let’s build</p>
              <h2 className="text-3xl font-semibold sm:text-4xl">Ready to lead your next AI + cloud initiative.</h2>
              <p className="text-white/80">
                Partner with me for staff-level engineering leadership across product UX, AI copilots, and multi-cloud
                delivery. I’m available for full-time roles and senior consulting engagements.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:hello@ullas.dev?subject=Let’s build together"
                  className="rounded-full bg-black/20 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-black/30"
                >
                  Send an email
                </a>
                <a
                  href={resumeHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/40 px-6 py-3 text-white/90 transition hover:bg-white/10"
                >
                  {resumeLabel}
                </a>
              </div>
            </div>
            <div className="grid gap-4 rounded-3xl bg-black/20 p-6 text-sm backdrop-blur">
              {contactLinks.map((link) => (
                <a key={link.label} href={link.href} className="rounded-2xl border border-white/15 p-4 transition hover:border-white/40">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">{link.label}</p>
                  <p className="mt-1 text-lg font-semibold text-white">{link.value}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
