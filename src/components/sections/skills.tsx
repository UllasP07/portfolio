import { skillBuckets } from '@/data/content';

const descriptors: Record<string, string> = {
  Languages: 'Polyglot foundation for platform work: TypeScript for DX, Python for AI, Java/Go for scale.',
  Frameworks: 'Designed, shipped, and maintained UI + service layers with product-grade DX.',
  'AI / ML': 'Hands-on with RAG systems, evaluation harnesses, and responsible rollout.',
  'Cloud & DevOps': 'IaC-first delivery with Terraform/Pulumi and hardened CI/CD workflows.',
  Observability: 'Telemetry and SLO instrumentation as a default part of the deployment spec.'
};

const highlightStats = [
  { label: 'Primary stack', value: 'TypeScript · Next.js · Node/FastAPI' },
  { label: 'IaC & automation', value: 'Terraform · GitHub Actions · Argo' },
  { label: 'AI platform', value: 'LangChain · Azure AI · Hugging Face' }
];

export function Skills() {
  return (
    <section className="section-shell bg-[#050a17]" id="skills">
      <div className="section-inner space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Capability Map</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Systems range across product, AI, and infrastructure.</h2>
          <p className="muted">
            Built teams and platforms that expect engineers to navigate both the customer layer and the pipelines that
            keep it healthy. The stacks below show the areas where I’m usually asked to lead.
          </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1fr]">
          <div className="surface-accent p-8 text-sm">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Operating Model</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">AI-native full-stack delivery.</h3>
            <p className="mt-4 text-white/80">
              Marrying UX instincts with platform thinking. I scope AI copilots the same way I deploy infrastructure:
              hypothesis-driven, instrumented, and production-ready.
            </p>
            <div className="mt-8 space-y-4">
              {highlightStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/60">{stat.label}</p>
                  <p className="text-base font-medium text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {skillBuckets.map((bucket) => (
              <div key={bucket.title} className="surface-card p-6">
                <div className="text-xs uppercase tracking-[0.4em] text-brand-light/60">{bucket.title}</div>
                <p className="muted mt-2 text-sm">{descriptors[bucket.title]}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {bucket.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-brand-light/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
