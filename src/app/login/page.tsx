import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  return (
    <main className="section-shell flex min-h-[80vh] items-center justify-center py-20">
      <div className="glass-card w-full max-w-md p-8">
        <div className="flex items-center gap-3 text-violet-300">
          <ShieldCheck className="h-6 w-6" />
          <span className="font-medium">Secure student access</span>
        </div>
        <h1 className="mt-6 text-3xl font-semibold text-white">Welcome back</h1>
        <p className="mt-3 text-sm leading-7 text-slate-300">Sign in to continue your learning journey.</p>
        <form className="mt-8 space-y-4">
          <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none" placeholder="Email" />
          <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none" placeholder="Password" type="password" />
          <button className="w-full rounded-full bg-violet-600 px-5 py-3 text-sm font-medium text-white">Sign in</button>
        </form>
        <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
          <Link href="/forgot-password" className="hover:text-white">Forgot password?</Link>
          <Link href="/register" className="hover:text-white">Create account</Link>
        </div>
      </div>
    </main>
  );
}
