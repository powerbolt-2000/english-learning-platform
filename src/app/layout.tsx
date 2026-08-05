import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { SiteShell } from '@/components/site-shell';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'English Learning Platform',
  description: 'A premium educational platform for English learners and teachers.',
  keywords: ['English learning', 'online education', 'courses', 'exams'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
