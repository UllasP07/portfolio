export const heroContent = {
  name: 'Ullas Puttaiah',
  role: 'Software · Full Stack · AI · Cloud & DevOps',
  headline: 'Shipping modular systems where product, AI, and infrastructure converge.',
  summary:
    'I architect fluid experiences that stretch from responsive frontends to AI copilots and Kubernetes-backed delivery. Each build is documented like production code with IaC, CI/CD, and observability baked in.',
  resume: 'https://example.com/ullas-resume.pdf',
  primaryCta: 'View Mega-Projects',
  secondaryCta: 'Download Resume'
};

export const stats = [
  { label: 'Production Deployments', value: '38', detail: 'Multi-cloud launches across AWS, Azure & GCP' },
  { label: 'AI Use-Cases Shipped', value: '14', detail: 'RAG copilots, vision classifiers, workflow agents' },
  { label: 'Pipelines Automated', value: '22', detail: 'GitHub Actions + Terraform + Argo CD' }
];

export const skillBuckets = [
  {
    title: 'Languages',
    items: ['TypeScript', 'Python', 'Java', 'Go', 'SQL']
  },
  {
    title: 'Frameworks',
    items: ['Next.js', 'React', 'Node.js', 'FastAPI', 'NestJS']
  },
  {
    title: 'AI / ML',
    items: ['RAG Architectures', 'Prompt Engineering', 'Azure AI Foundry', 'LangChain', 'Vector DBs']
  },
  {
    title: 'Cloud & DevOps',
    items: ['Azure', 'AWS', 'GCP', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions']
  },
  {
    title: 'Observability',
    items: ['OpenTelemetry', 'Grafana', 'Azure Monitor', 'Datadog']
  }
];

export const projects = [
  {
    title: 'AstraStack Control Plane',
    description:
      'Unified developer platform with a Next.js dashboard, FastAPI services, and a GitOps control loop that keeps Kubernetes fleets and cloud costs in sync.',
    outcomes: [
      'Provisioned workloads across AWS + Azure via Terraform blueprints with <5 min drift detection.',
      'Embedded cost + reliability scorecards to surface SLO burn-down in-product.',
      'Ships through a self-hosted GitHub Actions runner fleet hardened with OIDC.'
    ],
    tech: ['Next.js 14', 'FastAPI', 'PostgreSQL', 'Terraform', 'Argo CD'],
    live: 'https://example.com/astrastack',
    repo: 'https://github.com/ullasp/astrastack'
  },
  {
    title: 'Atlas RAG Copilot',
    description:
      'Retrieval-augmented assistant that chats over runbooks, architecture docs, and sprint notes directly on the portfolio.',
    outcomes: [
      'LangChain pipeline with FAISS vectors refreshed via GitHub webhooks.',
      'Hugging Face Space hosting for the FastAPI backend + GPU-ready queue.',
      'Response grounding + citation badges so answers stay auditable.'
    ],
    tech: ['LangChain', 'FAISS', 'Hugging Face Spaces', 'FastAPI', 'Llama 3'],
    live: 'https://example.com/atlas',
    repo: 'https://github.com/ullasp/atlas-rag'
  },
  {
    title: 'Observa CloudOps Kit',
    description:
      'Opinionated starter with Terraform modules, GitHub Actions workflow library, and dashboards to bootstrap SRE hygiene.',
    outcomes: [
      'One-click environment duplication with per-branch preview stacks.',
      'Policy-as-code guardrails for secrets, container scanning, and SBOM export.',
      'Nightly Lighthouse + uptime telemetry surfaced via Slack + Statuspage.'
    ],
    tech: ['Terraform', 'GitHub Actions', 'Azure Monitor', 'Pulumi', 'Lighthouse CI'],
    live: 'https://example.com/observa',
    repo: 'https://github.com/ullasp/observa'
  }
];

export const experience = [
  {
    company: 'Cloud R&D Studio',
    role: 'Lead Software & AI Engineer',
    period: '2024 — Present',
    bullets: [
      'Built a multi-tenant developer portal with SSO, RBAC, and platform APIs consumed by 150+ engineers.',
      'Rolled out a fleet of AI copilots (resume bot, incident summarizer, Terraform reviewer) backed by Azure OpenAI + grounding data.',
      'Defined golden paths for IaC repositories, improving change lead time by 41%. '
    ]
  },
  {
    company: 'SaaS Platform Team',
    role: 'Senior Full Stack Engineer',
    period: '2021 — 2024',
    bullets: [
      'Launched greenfield billing surfaces using Next.js App Router and server actions.',
      'Containerized monolith workloads to micro frontends + services orchestrated with Kubernetes.',
      'Implemented observability as code with OpenTelemetry collectors + dashboards baked into CI.'
    ]
  }
];

export const contactLinks = [
  { label: 'Email', href: 'mailto:hello@ullas.dev', value: 'hello@ullas.dev' },
  { label: 'GitHub', href: 'https://github.com/ullasp', value: '@ullasp' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ullas-puttaiah', value: '/ullas-puttaiah' }
];
