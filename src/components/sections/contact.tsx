'use client';

import { motion } from 'framer-motion';
import { AtSign, BriefcaseBusiness, Code2 } from 'lucide-react';
import { contactLinks } from '@/data/content';

const ICONS = { GitHub: Code2, LinkedIn: BriefcaseBusiness, Email: AtSign };

export function Contact() {
  return (
    <section className="section-shell" id="contact">
      <div className="section-inner">
        <div style={{ marginBottom: '3rem', maxWidth: '640px' }}>
          <span className="kicker">Contact</span>
          <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, marginTop: '1rem' }}>
            Let&apos;s build something reliable
          </h2>
          <p style={{ marginTop: '0.9rem', fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-2)' }}>
            If you&apos;re hiring for AI, full‑stack, or cloud platform work, I&apos;m happy to connect and talk through the problem space.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.4 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}
        >
          {contactLinks.map(link => {
            const Icon = ICONS[link.label as keyof typeof ICONS];
            if (!Icon) return null;
            return (
              <a key={link.label} href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="glass-card"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.4rem 1.5rem', textDecoration: 'none', transition: 'transform 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-3px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <div>
                  <p className="mono" style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--c-lavender)' }}>{link.label}</p>
                  <p style={{ fontFamily: 'var(--font-syne)', fontSize: '1.05rem', fontWeight: 700, marginTop: '0.5rem', color: 'var(--text-1)' }}>{link.value}</p>
                </div>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--c-lavender)', flexShrink: 0 }}>
                  <Icon style={{ width: 18, height: 18 }} />
                </div>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
