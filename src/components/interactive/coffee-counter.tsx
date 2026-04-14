'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const GITHUB_USER = process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? 'ullasp';
const GH_SEARCH_ENDPOINT = `https://api.github.com/search/commits?q=author:${GITHUB_USER}+committer-date:>=`;

export function CoffeeCounter() {
  const [commits, setCommits] = useState(24);
  const [cups, setCups] = useState(3);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abort = new AbortController();
    const since = new Date();
    since.setDate(since.getDate() - 1);

    fetch(`${GH_SEARCH_ENDPOINT}${since.toISOString().split('T')[0]}`, {
      headers: {
        Accept: 'application/vnd.github.text-match+json'
      },
      signal: abort.signal
    })
      .then((res) => {
        if (!res.ok) throw new Error('Unable to load commits');
        return res.json();
      })
      .then((payload) => {
        if (typeof payload.total_count === 'number') {
          setCommits(payload.total_count);
        }
      })
      .catch((err) => {
        console.warn(err);
        setError('Live GitHub data unavailable right now. Showing sample numbers.');
      })
      .finally(() => setLoading(false));

    return () => abort.abort();
  }, []);

  const predictiveCups = useMemo(() => Math.ceil(commits / 6), [commits]);
  const fill = Math.min(100, ((cups ?? 1) / 8) * 100);

  return (
    <div className="surface-panel grid gap-10 p-8 lg:grid-cols-[1fr_0.8fr]">
      <div className="space-y-5">
        <p className="eyebrow">Telemetry</p>
        <h3 className="text-2xl font-semibold text-brand-light">Shipping dashboard, powered by caffeine.</h3>
        <p className="muted">
          GitHub commit feed + caffeine telemetry. Numbers refresh daily and estimate the fuel required to land the next
          release window.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <MetricCard label="Commits (24h)" value={loading ? '—' : commits} />
          <MetricCard label="Cups logged" value={cups} />
          <MetricCard label="Predicted cups" value={predictiveCups} accent />
        </div>
        <button
          onClick={() => setCups((prev) => Math.min(prev + 1, 8))}
          className="inline-flex items-center justify-center rounded-full bg-brand-danger px-5 py-2 font-semibold text-white transition hover:scale-[1.02]"
        >
          + Add Coffee
        </button>
        {error && <p className="text-xs text-brand-light/60">{error}</p>}
      </div>
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent" />
        <div className="relative h-72 w-56 rounded-[36px] border border-white/10 bg-[#090f1d] p-6">
          <div className="text-center text-xs uppercase tracking-[0.4em] text-brand-light/60">Caffeine level</div>
          <div className="mt-4 flex justify-center">
            <div className="relative h-44 w-24 rounded-[30px] border border-white/15 bg-white/5">
              <motion.div
                className="absolute bottom-0 left-0 right-0 rounded-b-[30px] bg-gradient-to-b from-brand-danger to-brand-dark"
                animate={{ height: `${fill}%` }}
                transition={{ type: 'spring', stiffness: 120, damping: 24 }}
              />
              <div className="absolute inset-0 flex flex-col justify-between py-3">
                <motion.span
                  className="mx-4 h-1 rounded-full bg-white/30"
                  animate={{ scaleX: [1, 0.7, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.span
                  className="mx-6 h-1 rounded-full bg-white/10"
                  animate={{ scaleX: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.6 }}
                />
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-brand-light/70">Auto-adjusts with each commit surge.</p>
        </div>
      </div>
    </div>
  );
}

type MetricProps = {
  label: string;
  value: string | number;
  accent?: boolean;
};

function MetricCard({ label, value, accent }: MetricProps) {
  return (
    <div
      className={`rounded-2xl border px-4 py-3 text-center ${
        accent ? 'border-brand-danger/50 bg-brand-danger/10 text-brand-danger' : 'border-white/10 bg-white/5'
      }`}
    >
      <p className="text-xs uppercase tracking-[0.4em] text-brand-light/60">{label}</p>
      <p className="text-3xl font-semibold">{value}</p>
    </div>
  );
}
