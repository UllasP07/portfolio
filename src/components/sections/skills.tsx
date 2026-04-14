import { skillBuckets } from '@/data/content';

export function Skills() {
  return (
    <section className="section-shell" id="skills">
      <div className="space-y-6">
        <p className="text-sm text-brand-accent uppercase tracking-[0.3em]">Core range</p>
        <h2 className="text-3xl font-semibold">Skills matrix, grouped the way hiring teams evaluate.</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillBuckets.map((bucket) => (
            <div key={bucket.title} className="glass-card p-6 border border-brand-light/10">
              <h3 className="text-lg font-semibold text-brand-light mb-4">{bucket.title}</h3>
              <div className="flex flex-wrap gap-2">
                {bucket.items.map((item) => (
                  <span key={item} className="px-3 py-1 rounded-full bg-brand-light/10 text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
