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
    <div className="glass-card p-6 border border-brand-light/10 grid gap-6 lg:grid-cols-2">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-brand-light/60">Systems status</p>
        <h3 className="text-2xl font-semibold text-brand-light">Coffee + Commits Telemetry</h3>
        <p className="text-brand-light/70">
          Because the best AI copilots still run on caffeine. Numbers sync directly from GitHub every day and feed a
          lightweight predictor for how many coffees it will take to land the sprint.
        </p>
        <div className="flex gap-8">
          <div>
            <p className="text-4xl font-semibold">{loading ? '—' : commits}</p>
            <p className="text-sm text-brand-light/70">Commits (24h)</p>
          </div>
          <div>
            <p className="text-4xl font-semibold">{cups}</p>
            <p className="text-sm text-brand-light/70">Cups consumed</p>
          </div>
          <div>
            <p className="text-4xl font-semibold text-brand-danger">{predictiveCups}</p>
            <p className="text-sm text-brand-light/70">Predicted cups</p>
          </div>
        </div>
        <button
          onClick={() => setCups((prev) => Math.min(prev + 1, 8))}
          className="px-5 py-2 rounded-full bg-brand-danger text-brand-light font-semibold"
        >
          + Add Coffee
        </button>
        {error && <p className="text-xs text-brand-light/60">{error}</p>}
      </div>
      <div className="flex items-center justify-center">
        <div className="relative h-64 w-48">
          <div className="absolute inset-0 rounded-[40px] border-4 border-brand-light/40" />
          <motion.div
            className="absolute bottom-0 left-3 right-3 rounded-t-[32px] bg-gradient-to-b from-brand-danger to-brand-dark"
            animate={{ height: `${fill}%` }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          />
          <div className="absolute inset-0 flex flex-col justify-between py-6">
            <motion.div
              className="h-3 rounded-full bg-brand-light/40 mx-6"
              animate={{ scaleX: [1, 0.8, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />
            <motion.div
              className="h-3 rounded-full bg-brand-light/20 mx-8"
              animate={{ scaleX: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 5 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
