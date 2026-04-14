import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Ullas Puttaiah — Software, AI & Cloud Engineer',
  description:
    'Modular portfolio showcasing Ullas Puttaiah’s end-to-end engineering work across full stack, AI, and multi-cloud DevOps.',
  openGraph: {
    title: 'Ullas Puttaiah — Software, AI & Cloud Engineer',
    description:
      'Multi-device ready portfolio featuring mega-projects, an interactive coffee counter, and a RAG-powered assistant.',
    url: 'https://ullas.dev',
    siteName: 'Ullas Portfolio'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="app-shell">
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute -top-32 left-16 h-96 w-96 rounded-full bg-brand-accent/30 blur-3xl" />
            <div className="absolute top-24 right-0 h-80 w-80 rounded-full bg-brand-danger/25 blur-[180px]" />
            <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-muted/20 blur-[150px]" />
          </div>
          <div className="relative z-10 flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
