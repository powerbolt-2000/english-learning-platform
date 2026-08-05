import { GraduationCap, Sparkles } from 'lucide-react';

const highlights = [
  'Personalized lessons for beginners to advanced learners',
  'Live feedback, homework, and progress tracking',
  'A calm and premium learning environment built for focus',
];

export default function AboutPage() {
  return (
    <main className="section-shell py-20">
      <div className="glass-card overflow-hidden p-8 sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="inline-flex rounded-full bg-violet-500/15 p-3 text-violet-300">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">About the teacher</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              This platform was designed by an experienced English educator who blends academic rigor with a warm, modern teaching style.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
            <div className="flex items-center gap-3 text-violet-300">
              <Sparkles className="h-5 w-5" />
              <span className="font-medium">Teaching philosophy</span>
            </div>
            <ul className="mt-6 space-y-4 text-slate-300">
              {highlights.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
