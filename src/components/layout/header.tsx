'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
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
  const resumeIsPlaceholder = heroContent.resume.includes('example.com');
  const resumeHref = resumeIsPlaceholder ? 'mailto:hello@ullas.dev?subject=Resume request' : heroContent.resume;
  const resumeLabel = resumeIsPlaceholder ? 'Request Resume' : 'Resume';

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#050b19]/70 backdrop-blur-xl">
      <div className="section-inner flex h-20 items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Ullas<span className="text-brand-danger">.</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-brand-light/70 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-brand-light">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-5 py-2 text-sm text-brand-light/80 transition hover:border-white/40 hover:text-brand-light"
          >
            {resumeLabel}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-brand-danger px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(230,57,70,0.35)] transition hover:scale-[1.02]"
          >
            Book a Call
          </a>
        </div>
        <button
          className="md:hidden rounded-full border border-white/20 p-2 text-brand-light"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div className={cn('section-inner md:hidden', open ? 'pb-6' : 'pb-0')}>
        <div className={cn('space-y-4 text-brand-light/80', open ? 'block' : 'hidden')}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-xl bg-white/5 px-4 py-3">
              {item.label}
            </a>
          ))}
          <a
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl bg-brand-danger px-4 py-3 text-center font-semibold text-white"
          >
            {resumeLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
