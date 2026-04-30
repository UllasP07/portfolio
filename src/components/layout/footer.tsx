import { contactLinks } from '@/data/content';

export function Footer() {
  return (
    <footer className="section-shell pt-0 text-sm text-white/65">
      <div className="section-inner glass-card px-6 py-6 sm:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Ullas Puttaiah. Built with Next.js 14 and Tailwind CSS.</p>
          <div className="flex flex-wrap gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="transition hover:text-brand-light"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
