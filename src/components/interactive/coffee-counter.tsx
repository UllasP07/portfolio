'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GH_USER  = process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? 'ullasp';
const GH_EP    = `https://api.github.com/search/commits?q=author:${GH_USER}+committer-date:>=`;
const FB_COMMITS = 18;
const FB_CUPS    = 2;

export function CoffeeCounter() {
  const [commits, setCommits] = useState(FB_COMMITS);
  const [cups, setCups]       = useState(FB_CUPS);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState<string | null>(null);

  useEffect(() => {
    const ctrl  = new AbortController();
    const since = new Date();
    since.setDate(since.getDate() - 1);
    fetch(`${GH_EP}${since.toISOString().split('T')[0]}`, {
      headers: { Accept: 'application/vnd.github+json' },
      signal: ctrl.signal,
    })
      .then(r => { if (!r.ok) throw new Error(); return r.json(); })
      .then(d => { if (typeof d.total_count === 'number') setCommits(d.total_count); })
      .catch(() => setError('Live GitHub data unavailable — showing sample numbers.'))
      .finally(() => setLoading(false));
    return () => ctrl.abort();
  }, []);

  const predicted = Math.ceil(commits / 6);
  const fill      = Math.min(100, (cups / 8) * 100);
  const ripples   = Array.from({ length: Math.min(cups, 6) }, (_, i) => i);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: '3rem', alignItems: 'start' }}>
      {/* Left */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <span className="kicker">Telemetry</span>
        <h2 style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700 }}>
          Powered by coffee &amp; commits
        </h2>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-2)' }}>
          Estimates caffeine intake from the last 24 h of GitHub activity. Bump the cups manually.
        </p>
        <p className="mono" style={{ fontSize: '0.78rem', color: 'var(--text-3)' }}>
          {error ?? 'Commit count fetched live from GitHub Search API on page load.'}
        </p>

        {/* GitHub graph */}
        <div style={{ border: '1px solid var(--border)', background: 'rgba(43,45,66,0.4)', borderRadius: '1rem', padding: '1.25rem' }}>
          <p className="mono" style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--c-lavender)', marginBottom: '0.8rem' }}>
            GitHub contribution graph
          </p>
          <div style={{ overflowX: 'auto' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://ghchart.rshah.org/ef233c/${GH_USER}`}
              alt={`${GH_USER} GitHub contributions`}
              style={{ minWidth: '600px', height: 'auto', borderRadius: '6px', filter: 'brightness(1.12)' }}
            />
          </div>
          <p className="mono" style={{ fontSize: '0.68rem', color: 'var(--text-3)', marginTop: '0.6rem', fontStyle: 'italic' }}>
            * Live data synced from GitHub
          </p>
        </div>
      </div>

      {/* Right — widget */}
      <div className="glass-card" style={{ padding: '1.75rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
          {[
            { label: 'Commits',   value: loading ? '…' : String(commits), accent: false },
            { label: 'Cups',      value: String(cups),      accent: false },
            { label: 'Predicted', value: String(predicted), accent: true  },
          ].map(m => (
            <div key={m.label} style={{ border: `1px solid ${m.accent ? 'rgba(239,35,60,0.3)' : 'var(--border)'}`, background: m.accent ? 'rgba(239,35,60,0.08)' : 'rgba(255,255,255,0.04)', borderRadius: '0.875rem', padding: '0.9rem', textAlign: 'center' }}>
              <div className="mono" style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '0.35rem' }}>{m.label}</div>
              <div style={{ fontFamily: 'var(--font-syne)', fontSize: '1.9rem', fontWeight: 800, color: m.accent ? 'var(--c-lavender)' : 'var(--text-1)' }}>{m.value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button onClick={() => setCups(c => c + 1)} className="btn-red" style={{ alignSelf: 'flex-start' }}>
              + Add Coffee
            </button>
            <div style={{ border: '1px solid var(--border)', background: 'rgba(255,255,255,0.03)', borderRadius: '0.875rem', padding: '1rem' }}>
              <p className="mono" style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--c-lavender)', marginBottom: '0.5rem' }}>Telemetry note</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--text-2)' }}>
                Predicted = <code className="mono" style={{ color: 'var(--c-lavender)' }}>ceil(commits / 6)</code>. Counter is manually adjustable.
              </p>
            </div>
          </div>

          {/* Mug */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '80px', height: '200px', borderRadius: '2rem', background: 'rgba(43,45,66,0.6)', border: '1px solid var(--border)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: '12px', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}>
                <span className="mono" style={{ fontSize: '8px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-3)' }}>cups</span>
              </div>
              <div style={{ width: '44px', height: '120px', borderRadius: '999px', background: '#0d0e18', border: '1px solid var(--border)', overflow: 'hidden', position: 'relative' }}>
                <motion.div
                  style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(180deg, var(--c-lavender) 0%, var(--c-red) 100%)', borderRadius: '0 0 999px 999px' }}
                  animate={{ height: `${fill}%` }}
                  transition={{ type: 'spring', stiffness: 110, damping: 16 }}
                />
                {ripples.map(r => (
                  <motion.span key={r}
                    style={{ position: 'absolute', left: '50%', top: '18%', width: '52px', height: '52px', marginLeft: '-26px', borderRadius: '50%', border: '1px solid rgba(237,242,244,0.15)' }}
                    initial={{ opacity: 0.3, scale: 0.3 }}
                    animate={{ opacity: 0, scale: 1.8 }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', delay: r * 0.3 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
