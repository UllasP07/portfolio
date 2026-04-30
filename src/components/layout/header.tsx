'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarDays, Download, Menu, X } from 'lucide-react';
import { heroContent } from '@/data/content';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={cn(
          'sticky top-0 z-50 border-b transition-all duration-300',
          scrolled
            ? 'border-white/10 bg-[#0b1423]/82 backdrop-blur-xl'
            : 'border-transparent bg-[#0b1423]/40 backdrop-blur-md'
        )}
      >
        <div className="section-inner flex min-h-[4.75rem] items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-1 text-lg font-semibold tracking-tight text-brand-light">
            <span>{heroContent.brand}</span>
            <span className="text-brand-danger">.</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-brand-light"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={heroContent.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-brand-light transition hover:border-brand-accent/40 hover:bg-white/5"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <a
              href={heroContent.bookCallHref}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-danger px-4 py-2 text-sm font-semibold text-brand-light transition hover:bg-[#ff4b58]"
            >
              <CalendarDays className="h-4 w-4" />
              Book a Call
            </a>
          </div>

          <button
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand-light md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.24 }}
            className="border-b border-white/10 bg-[#0b1423]/95 backdrop-blur-xl md:hidden"
          >
            <nav className="section-inner flex flex-col gap-2 py-4">
              <div className="grid gap-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ delay: index * 0.03, duration: 0.2 }}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-brand-light"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
              <div className="mt-3 grid gap-2">
                <a
                  href={heroContent.resumeHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-white/10 px-4 py-3 text-sm font-medium text-brand-light"
                >
                  Resume
                </a>
                <a
                  href={heroContent.bookCallHref}
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-brand-danger px-4 py-3 text-sm font-semibold text-brand-light"
                >
                  Book a Call
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
