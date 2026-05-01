'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarDays, Download, Menu, X } from 'lucide-react';
import { heroContent } from '@/data/content';

const NAV = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects'   },
  { href: '#skills',     label: 'Skills'     },
  { href: '#contact',    label: 'Contact'    },
];

export function Header() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [desktop, setDesktop]   = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    setDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setDesktop(e.matches);
    mq.addEventListener('change', handler);

    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      mq.removeEventListener('change', handler);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const S = {
    header: {
      position: 'sticky' as const,
      top: 0,
      zIndex: 50,
      borderBottom: `1px solid ${scrolled ? 'rgba(141,153,174,0.16)' : 'transparent'}`,
      background: scrolled ? 'rgba(19,20,31,0.9)' : 'rgba(19,20,31,0.25)',
      backdropFilter: 'blur(22px)',
      WebkitBackdropFilter: 'blur(22px)',
      transition: 'background 0.3s, border-color 0.3s',
    },
    inner: {
      width: '100%',
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: '0 1.5rem',
      height: '3.75rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
    },
  };

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
        style={S.header}
      >
        <div style={S.inner}>
          {/* Logo */}
          <Link href="/" style={{ fontFamily: 'var(--font-syne)', fontSize: '1.2rem', fontWeight: 700, letterSpacing: '-0.04em', color: 'var(--text-1)', textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '1px', flexShrink: 0 }}>
            {heroContent.brand}<span style={{ color: 'var(--c-red)' }}>.</span>
          </Link>

          {/* Desktop nav */}
          {desktop && (
            <nav style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', flex: 1, justifyContent: 'center' }}>
              {NAV.map(item => (
                <a key={item.href} href={item.href}
                  style={{ padding: '0.45rem 1rem', borderRadius: '999px', fontSize: '0.875rem', color: 'var(--text-2)', transition: 'color 0.15s, background 0.15s', textDecoration: 'none' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-1)'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.06)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-2)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
                >{item.label}</a>
              ))}
            </nav>
          )}

          {/* Desktop CTAs */}
          {desktop && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
              <a href={heroContent.resumeHref} target="_blank" rel="noreferrer" className="btn-ghost" style={{ fontSize: '0.85rem', padding: '0.5rem 1.1rem' }}>
                <Download style={{ width: 14, height: 14 }} /> Resume
              </a>
              <a href={heroContent.bookCallHref} className="btn-red" style={{ fontSize: '0.85rem', padding: '0.5rem 1.1rem' }}>
                <CalendarDays style={{ width: 14, height: 14 }} /> Book a Call
              </a>
            </div>
          )}

          {/* Mobile hamburger */}
          {!desktop && (
            <button onClick={() => setOpen(p => !p)} aria-label="Toggle menu"
              style={{ width: '2.4rem', height: '2.4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '999px', border: '1px solid rgba(141,153,174,0.22)', background: 'rgba(255,255,255,0.05)', color: 'var(--text-1)', cursor: 'pointer', flexShrink: 0 }}>
              {open ? <X style={{ width: 16, height: 16 }} /> : <Menu style={{ width: 16, height: 16 }} />}
            </button>
          )}
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && !desktop && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            style={{ position: 'sticky', top: '3.75rem', zIndex: 40, borderBottom: '1px solid rgba(141,153,174,0.14)', background: 'rgba(19,20,31,0.97)', backdropFilter: 'blur(24px)' }}
          >
            <nav style={{ width: '100%', maxWidth: 'var(--page-max)', margin: '0 auto', padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {NAV.map((item, i) => (
                <motion.a key={item.href} href={item.href} onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
                  style={{ display: 'block', padding: '0.75rem 1rem', borderRadius: '0.75rem', border: '1px solid rgba(141,153,174,0.14)', background: 'rgba(255,255,255,0.04)', fontSize: '0.875rem', color: 'var(--text-1)', textDecoration: 'none' }}
                >{item.label}</motion.a>
              ))}
              <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href={heroContent.resumeHref} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="btn-ghost" style={{ justifyContent: 'center' }}>Resume</a>
                <a href={heroContent.bookCallHref} onClick={() => setOpen(false)} className="btn-red" style={{ justifyContent: 'center' }}>Book a Call</a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
