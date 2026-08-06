import Link from 'next/link';
import type { Route } from 'next';
import { Menu, MoonStar, Sparkles } from 'lucide-react';

const navItems: { label: string; href: Route }[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Lessons', href: '/lessons' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="section-shell flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3 text-white">
            <div className="rounded-2xl bg-violet-600/20 p-2 text-violet-300">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">English Learning</p>
              <p className="text-xs text-slate-400">Platform</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="rounded-full border border-white/10 bg-white/10 p-2 text-slate-200">
              <MoonStar className="h-4 w-4" />
            </button>

            <button className="rounded-full border border-white/10 bg-white/10 p-2 text-slate-200 md:hidden">
              <Menu className="h-4 w-4" />
            </button>

            <Link
              href="/login"
              className="hidden rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white md:inline-flex"
            >
              Login
            </Link>
          </div>
        </div>
      </header>

      {children}

      <footer className="border-t border-white/10 bg-slate-950/60">
        <div className="section-shell flex flex-col gap-4 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 English Learning Platform. Crafted for modern education.</p>

          <div className="flex gap-4">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms
            </Link>
            <Link href="/faq" className="transition hover:text-white">
              FAQ
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}