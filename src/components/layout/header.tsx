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

  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl bg-[#0b1423]/70 border-b border-white/5">
      <div className="section-shell py-6 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          Ullas<span className="text-brand-danger">.</span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm text-brand-light/80">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-brand-light transition-colors">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex gap-3">
          <a
            href={heroContent.resume}
            target="_blank"
            className="px-5 py-2 rounded-full border border-brand-light/40 text-sm hover:bg-brand-light/10"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-brand-danger text-brand-light text-sm font-semibold shadow-glow hover:scale-[1.02] transition"
          >
            Book A Call
          </a>
        </div>
        <button className="md:hidden" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle navigation">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <div className={cn('md:hidden px-6 pb-6 space-y-4 text-brand-light/80', open ? 'block' : 'hidden')}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2">
            {item.label}
          </a>
        ))}
        <a
          href={heroContent.resume}
          target="_blank"
          className="block py-3 text-center rounded-2xl bg-brand-danger text-brand-light font-semibold"
        >
          Download Resume
        </a>
      </div>
    </header>
  );
}
