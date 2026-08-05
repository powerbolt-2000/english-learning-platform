import { Activity, Award, BookOpen, TrendingUp } from 'lucide-react';

const cards = [
  { title: 'Courses in progress', value: '8', icon: BookOpen },
  { title: 'Certificates earned', value: '3', icon: Award },
  { title: 'Weekly score', value: '88%', icon: TrendingUp },
  { title: 'Study streak', value: '12 days', icon: Activity },
];

export default function StudentDashboardPage() {
  return (
    <main className="section-shell py-20">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Student dashboard</p>
        <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Keep your learning momentum strong</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <article key={card.title} className="glass-card p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">{card.title}</h2>
                <div className="rounded-2xl bg-violet-500/15 p-3 text-violet-300"><Icon className="h-5 w-5" /></div>
              </div>
              <p className="mt-6 text-3xl font-semibold text-white">{card.value}</p>
            </article>
          );
        })}
      </div>
    </main>
  );
}
