'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, Download } from 'lucide-react';
import { heroContent, stats } from '@/data/content';

export function Hero() {
  return (
    <section className="section-shell" id="hero" style={{ paddingBottom: '5rem', paddingTop: '5rem' }}>
      <div className="section-inner">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
          gap: '3rem',
          alignItems: 'center',
        }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <span className="kicker">AI + Cloud Engineer</span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <h1 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(2.2rem, 5vw, 3.75rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08, maxWidth: '640px' }}>
                Building{' '}
                <em style={{ fontStyle: 'normal', color: 'var(--c-red)' }}>AI‑powered</em>
                {' '}products with the cloud behind them.
              </h1>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-2)', maxWidth: '520px' }}>
                {heroContent.summary}
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a href="#experience" className="btn-red">
                View Work <ArrowRight style={{ width: 16, height: 16 }} />
              </a>
              <a href={heroContent.resumeHref} target="_blank" rel="noreferrer" className="btn-ghost">
                <Download style={{ width: 15, height: 15 }} /> Resume
              </a>
              <a href={heroContent.bookCallHref} className="btn-ghost">
                <CalendarDays style={{ width: 15, height: 15 }} /> Book a Call
              </a>
            </div>
          </motion.div>

          {/* Right — stats card */}
          <motion.aside
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card"
            style={{ position: 'relative', overflow: 'hidden', padding: '2rem' }}
          >
            {/* glow */}
            <div style={{ position: 'absolute', inset: '0 0 auto 0', height: '140px', background: 'radial-gradient(ellipse at top, rgba(239,35,60,0.2), transparent 72%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <p className="kicker" style={{ marginBottom: '0.6rem' }}>Telemetry snapshot</p>
                <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: '1.5rem', fontWeight: 700 }}>
                  Engineering impact at a glance
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {stats.map((stat, i) => (
                  <motion.div key={stat.label}
                    initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.09, duration: 0.4 }}
                    style={{ border: '1px solid var(--border)', background: 'rgba(255,255,255,0.04)', borderRadius: '1rem', padding: '1.1rem 1.25rem' }}
                  >
                    <div style={{ fontFamily: 'var(--font-syne)', fontSize: '2rem', fontWeight: 800, color: 'var(--text-1)', lineHeight: 1 }}>{stat.value}</div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-1)', marginTop: '0.3rem' }}>{stat.label}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-3)', marginTop: '0.25rem', lineHeight: 1.55 }}>{stat.detail}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
