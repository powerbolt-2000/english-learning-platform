import Link from 'next/link';

export default function ForgotPasswordPage() {
  return (
    <main className="section-shell flex min-h-[80vh] items-center justify-center py-20">
      <div className="glass-card w-full max-w-md p-8">
        <h1 className="text-3xl font-semibold text-white">Reset password</h1>
        <p className="mt-3 text-sm leading-7 text-slate-300">Enter your email to receive a secure reset link.</p>
        <form className="mt-8 space-y-4">
          <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none" placeholder="Email" />
          <button className="w-full rounded-full bg-violet-600 px-5 py-3 text-sm font-medium text-white">Send reset link</button>
        </form>
        <p className="mt-6 text-sm text-slate-400">
          <Link href="/login" className="text-violet-300">Back to login</Link>
        </p>
      </div>
    </main>
  );
}
