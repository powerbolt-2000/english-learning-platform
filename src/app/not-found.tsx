import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="section-shell flex min-h-screen items-center justify-center py-20">
      <div className="glass-card max-w-xl p-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-300">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Page not found</h1>
        <p className="mt-4 text-lg text-slate-300">The page you were looking for could not be found.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-violet-600 px-5 py-3 font-medium text-white">Go home</Link>
      </div>
    </main>
  );
}
