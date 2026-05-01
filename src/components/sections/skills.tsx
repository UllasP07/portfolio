'use client';

import { motion } from 'framer-motion';
import { skillBuckets } from '@/data/content';

const ICONS: Record<string, { bg: string; color: string; label: string }> = {
  TypeScript:            { bg: '#3178c6', color: '#fff',    label: 'TS' },
  Python:                { bg: '#3572a5', color: '#fff',    label: 'Py' },
  Java:                  { bg: '#b07219', color: '#fff',    label: 'Jv' },
  Go:                    { bg: '#00add8', color: '#fff',    label: 'Go' },
  SQL:                   { bg: '#336791', color: '#fff',    label: 'pg' },
  'Next.js':             { bg: '#000',    color: '#fff',    label: 'N'  },
  React:                 { bg: '#20232a', color: '#61dafb', label: 'Re' },
  'Node.js':             { bg: '#3c873a', color: '#fff',    label: 'No' },
  FastAPI:               { bg: '#009688', color: '#fff',    label: 'FA' },
  'Tailwind CSS':        { bg: '#0ea5e9', color: '#fff',    label: 'tw' },
  'RAG Systems':         { bg: '#6c3fc5', color: '#fff',    label: 'R'  },
  'Prompt Engineering':  { bg: '#4b5563', color: '#e5e7eb', label: 'PE' },
  'Azure OpenAI':        { bg: '#0078d4', color: '#fff',    label: 'Az' },
  LangChain:             { bg: '#1c3a5e', color: '#4a9eed', label: 'LC' },
  'Vector Databases':    { bg: '#7c3aed', color: '#fff',    label: 'VD' },
  AWS:                   { bg: '#ff9900', color: '#232f3e', label: 'AW' },
  Azure:                 { bg: '#0078d4', color: '#fff',    label: 'Az' },
  Terraform:             { bg: '#7b42bc', color: '#fff',    label: 'Tf' },
  Docker:                { bg: '#2496ed', color: '#fff',    label: 'Dk' },
  Kubernetes:            { bg: '#326ce5', color: '#fff',    label: 'K8' },
  'GitHub Actions':      { bg: '#24292f', color: '#fff',    label: 'GA' },
  OpenTelemetry:         { bg: '#f5a623', color: '#1a1a1a', label: 'OT' },
  Grafana:               { bg: '#f46800', color: '#fff',    label: 'Gf' },
  'Azure Monitor':       { bg: '#0078d4', color: '#fff',    label: 'AM' },
  Datadog:               { bg: '#632ca6', color: '#fff',    label: 'DD' },
};

const BUCKET_ICONS: Record<string, React.ReactNode> = {
  Languages:     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--c-red)" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  Frameworks:    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--c-lavender)" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  'AI/ML':       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--c-red)" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
  'Cloud & DevOps': <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--c-lavender)" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>,
  Observability: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--c-red)" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
};

export function Skills() {
  return (
    <section className="section-shell" id="skills">
      <div className="section-inner">
        <div style={{ marginBottom: '3rem', maxWidth: '640px' }}>
          <span className="kicker">Skills</span>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, marginTop: '1rem' }}>
            Core tools across the stack
          </h2>
          <p style={{ marginTop: '0.9rem', fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-2)' }}>
            The buckets below reflect the systems work I do most — from frontend architecture to AI workflows and platform reliability.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {skillBuckets.map((bucket, i) => (
            <motion.div key={bucket.title}
              initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="glass-card"
              style={{ padding: '1.4rem 1.5rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.1rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(43,45,66,0.9)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {BUCKET_ICONS[bucket.title]}
                </div>
                <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-1)' }}>{bucket.title}</h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {bucket.items.map(item => {
                  const ico = ICONS[item] ?? { bg: 'rgba(141,153,174,0.2)', color: '#edf2f4', label: item.slice(0,2).toUpperCase() };
                  return (
                    <span key={item} className="tag">
                      <span className="tag-ico" style={{ background: ico.bg, color: ico.color }}>{ico.label}</span>
                      {item}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
