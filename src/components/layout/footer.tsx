'use client';

import { contactLinks } from '@/data/content';

export function Footer() {
  return (
    <footer className="section-shell" style={{ paddingTop: 0 }}>
      <div className="section-inner">
        <div className="glass-card" style={{ padding: '1.25rem 2rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-3)' }}>
            <p className="mono" style={{ letterSpacing: '0.05em' }}>
              © {new Date().getFullYear()} Ullas Puttaiah · Built with Next.js 14 + Tailwind CSS
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
              {contactLinks.map(link => (
                <a key={link.label} href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  style={{ color: 'var(--text-3)', transition: 'color 0.15s' }}
                >{link.label}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
