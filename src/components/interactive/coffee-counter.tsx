'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GITHUB_USER = process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? 'ullasp';
const GH_SEARCH_ENDPOINT = `https://api.github.com/search/commits?q=author:${GITHUB_USER}+committer-date:>=`;
const FALLBACK_COMMITS = 18;
const FALLBACK_CUPS = 2;

export function CoffeeCounter() {
  const [commits, setCommits] = useState(FALLBACK_COMMITS);
  const [cups, setCups] = useState(FALLBACK_CUPS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abort = new AbortController();
    const since = new Date();
    since.setDate(since.getDate() - 1);

    fetch(`${GH_SEARCH_ENDPOINT}${since.toISOString().split('T')[0]}`, {
      headers: { Accept: 'application/vnd.github+json' },
      signal: abort.signal
    })
      .then((response) => {
        if (!response.ok) throw new Error('Unable to load commits');
        return response.json();
      })
      .then((payload) => {
        if (typeof payload.total_count === 'number') {
          setCommits(payload.total_count);
        }
      })
      .catch(() => {
        setError('Live GitHub data unavailable right now. Showing sample numbers.');
      })
      .finally(() => setLoading(false));

    return () => abort.abort();
  }, []);

  const predictedCups = Math.ceil(commits / 6);
  const fill = Math.min(100, (cups / 8) * 100);
  const ripples = Array.from({ length: Math.min(cups, 6) }, (_, index) => index);

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
      <div className="space-y-5">
        <span className="section-kicker">Telemetry</span>
        <h2 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">Coffee + commit counter</h2>
        <p className="max-w-xl text-base leading-8 text-white/70 sm:text-lg">
          A lightweight telemetry block that estimates caffeine intake from the last 24 hours of GitHub activity and lets you bump the cups manually.
        </p>
        <p className="text-sm text-white/55">{error ?? 'Commit count is fetched from GitHub search and refreshed on load.'}</p>
      </div>

      <div className="glass-card grid gap-6 p-6 sm:p-8 md:grid-cols-[1fr_0.9fr]">
        <div className="space-y-5">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <MetricCard label="Commits" value={loading ? '...' : String(commits)} />
            <MetricCard label="Cups" value={String(cups)} />
            <MetricCard label="Predicted cups" value={String(predictedCups)} accent />
          </div>

          <button
            onClick={() => setCups((value) => value + 1)}
            className="inline-flex min-h-11 items-center rounded-full bg-brand-danger px-5 py-3 text-sm font-semibold text-brand-light transition hover:bg-[#ff4b58]"
          >
            + Add Coffee
          </button>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
            <p className="mono text-xs uppercase tracking-[0.18em] text-brand-accent">Telemetry note</p>
            <p className="mt-3 text-sm leading-7 text-white/68">
              Predicted cups are calculated as <span className="mono">ceil(commits / 6)</span>, while the counter on the left stays manually adjustable.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative flex h-72 w-full max-w-[220px] items-end justify-center rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5">
            <div className="absolute inset-x-6 top-6 h-8 rounded-full bg-white/5 blur-xl" />
            <div className="relative h-full w-24 overflow-hidden rounded-[999px] border border-white/10 bg-[#0f1a2c]">
              <motion.div
                className="absolute inset-x-0 bottom-0 rounded-b-[999px] bg-[linear-gradient(180deg,#a8dadc_0%,#e63946_100%)]"
                animate={{ height: `${fill}%` }}
                transition={{ type: 'spring', stiffness: 110, damping: 16 }}
              />

              {ripples.map((ripple) => (
                <motion.span
                  key={ripple}
                  className="absolute left-1/2 top-[18%] h-16 w-16 -translate-x-1/2 rounded-full border border-white/20"
                  initial={{ opacity: 0.25, scale: 0.3 }}
                  animate={{ opacity: 0, scale: 1.9 }}
                  transition={{
                    duration: 2.1,
                    repeat: Infinity,
                    ease: 'easeOut',
                    delay: ripple * 0.28
                  }}
                />
              ))}

              <div className="absolute inset-x-2 top-3 rounded-full border border-white/10 px-2 py-1 text-center">
                <span className="mono text-[10px] uppercase tracking-[0.16em] text-white/55">cups</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div
      className={`rounded-3xl border px-4 py-4 text-center ${
        accent
          ? 'border-brand-danger/35 bg-brand-danger/10'
          : 'border-white/10 bg-white/5'
      }`}
    >
      <div className="mono text-[10px] uppercase tracking-[0.18em] text-white/55">{label}</div>
      <div className={`mt-2 text-3xl font-bold ${accent ? 'text-brand-accent' : 'text-brand-light'}`}>
        {value}
      </div>
    </div>
  );
}
