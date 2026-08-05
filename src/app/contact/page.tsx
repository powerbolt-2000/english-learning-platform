import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="section-shell py-20">
      <div className="glass-card p-8 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Contact</p>
            <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Reach the team</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">Questions about lessons, subscriptions, or school partnerships? We are here to help.</p>
            <div className="mt-8 space-y-4 text-slate-300">
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-violet-300" /> hello@englishlearningplatform.com</div>
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-violet-300" /> +20 100 000 0000</div>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-violet-300" /> Cairo, Egypt</div>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <h2 className="text-2xl font-semibold text-white">Send a message</h2>
            <form className="mt-6 space-y-4">
              <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none" placeholder="Name" />
              <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none" placeholder="Email" />
              <textarea className="min-h-32 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none" placeholder="Your message" />
              <button className="rounded-full bg-violet-600 px-5 py-3 text-sm font-medium text-white">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
