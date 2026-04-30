export const heroContent = {
  brand: 'Ullas',
  name: 'Ullas Puttaiah',
  eyebrow: 'AI + Cloud Engineer',
  headline: 'Building AI-powered products with the cloud systems behind them.',
  summary:
    'I design production-ready experiences that connect modern frontend architecture, AI workflows, and cloud delivery. The result is software that feels polished on the surface and stays reliable underneath.',
  resumeHref: 'https://example.com/ullas-resume.pdf',
  bookCallHref: 'mailto:hello@ullas.dev?subject=Book%20a%20Call',
  primaryCta: 'View Projects',
  secondaryCta: 'Resume'
};

export const stats = [
  { label: 'Production Deployments', value: '18+', detail: 'Cloud launches across AWS, Azure, and container platforms.' },
  { label: 'AI Workflows Shipped', value: '10+', detail: 'Retrieval, automation, and assistant experiences built for real teams.' },
  { label: 'Pipelines Automated', value: '25+', detail: 'CI/CD, infrastructure delivery, and observability made repeatable.' }
];

export const skillBuckets = [
  {
    title: 'Languages',
    items: ['TypeScript', 'Python', 'Java', 'Go', 'SQL']
  },
  {
    title: 'Frameworks',
    items: ['Next.js', 'React', 'Node.js', 'FastAPI', 'Tailwind CSS']
  },
  {
    title: 'AI/ML',
    items: ['RAG Systems', 'Prompt Engineering', 'Azure OpenAI', 'LangChain', 'Vector Databases']
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions']
  },
  {
    title: 'Observability',
    items: ['OpenTelemetry', 'Grafana', 'Azure Monitor', 'Datadog']
  }
];

export const projects = [
  {
    title: 'AstraStack Control Plane',
    category: 'Developer Platform',
    description:
      'Unified developer platform with a Next.js control surface, API services, and GitOps automation that keeps environments, costs, and delivery workflows aligned.',
    outcomes: [
      'Provisioned workloads across AWS and Azure through reusable Terraform blueprints.',
      'Surfaced cost and reliability telemetry directly inside the product experience.',
      'Shipped through hardened GitHub Actions runners with OIDC-based cloud auth.'
    ],
    tech: ['Next.js 14', 'FastAPI', 'PostgreSQL', 'Terraform', 'Argo CD'],
    live: 'https://example.com/astrastack',
    repo: 'https://github.com/ullasp/astrastack'
  },
  {
    title: 'Atlas RAG Copilot',
    category: 'AI Assistant',
    description:
      'Retrieval-augmented assistant for runbooks, architecture docs, and internal delivery knowledge with grounding and fast iteration loops.',
    outcomes: [
      'Refreshed vector knowledge through automated ingestion and GitHub-triggered updates.',
      'Hosted backend services for low-friction demos and scalable experimentation.',
      'Added grounded responses and traceable citations to keep output trustworthy.'
    ],
    tech: ['LangChain', 'FAISS', 'Hugging Face Spaces', 'FastAPI', 'Llama 3'],
    live: 'https://example.com/atlas',
    repo: 'https://github.com/ullasp/atlas-rag'
  },
  {
    title: 'Observa CloudOps Kit',
    category: 'CloudOps Toolkit',
    description:
      'CloudOps starter kit with reusable Terraform modules, GitHub Actions workflows, and baseline dashboards for shipping safer infrastructure faster.',
    outcomes: [
      'Spun up repeatable preview and test environments with minimal manual setup.',
      'Added policy guardrails for secrets, container security, and dependency visibility.',
      'Published reliability and performance signals to team-facing status channels.'
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
      'Built a multi-tenant developer portal with SSO, RBAC, and platform APIs used across engineering teams.',
      'Delivered AI copilots for documentation search, incident summarization, and developer workflows.',
      'Defined cloud and IaC golden paths that improved delivery consistency and reduced platform friction.'
    ]
  },
  {
    company: 'SaaS Platform Team',
    role: 'Senior Full Stack Engineer',
    period: '2021 — 2024',
    bullets: [
      'Launched customer-facing platform surfaces with React and modern full-stack architecture.',
      'Containerized services and supported migrations toward Kubernetes-backed delivery.',
      'Implemented observability as code with OpenTelemetry collectors and shared dashboards.'
    ]
  }
];

export const contactLinks = [
  { label: 'Email', href: 'mailto:hello@ullas.dev', value: 'hello@ullas.dev' },
  { label: 'GitHub', href: 'https://github.com/ullasp', value: '@ullasp' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ullas-puttaiah', value: '/ullas-puttaiah' }
];
