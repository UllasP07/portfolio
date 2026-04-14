import { contactLinks } from '@/data/content';

export function Contact() {
  return (
    <section className="section-shell" id="contact">
      <div className="glass-card p-8 border border-white/10 space-y-6">
        <p className="text-sm text-brand-accent uppercase tracking-[0.4em]">Let’s build</p>
        <h2 className="text-3xl font-semibold">Ready for the next AI + Cloud scale challenge.</h2>
        <p className="text-brand-light/70 max-w-2xl">
          Whether you need a RAG assistant embedded into your docs, a DevX platform with golden paths, or a
          multi-cloud rollout without surprises, I can help design and deliver it end-to-end.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {contactLinks.map((link) => (
            <a key={link.label} href={link.href} className="p-4 rounded-2xl bg-brand-light/5 hover:bg-brand-light/10">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-light/60">{link.label}</p>
              <p className="mt-2 text-lg font-semibold text-brand-light">{link.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
