import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

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
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-[#0b1423] text-brand-light">
        <div className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0 bg-radial-grid opacity-60 pointer-events-none" aria-hidden />
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
