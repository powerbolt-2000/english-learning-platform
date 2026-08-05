import { BookOpen, FileText, Users } from 'lucide-react';

const teacherCards = [
  { title: 'Courses created', value: '24', icon: BookOpen },
  { title: 'Students enrolled', value: '180', icon: Users },
  { title: 'Materials uploaded', value: '96', icon: FileText },
];

export default function TeacherDashboardPage() {
  return (
    <main className="section-shell py-20">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Teacher dashboard</p>
        <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Teach with structure and insight</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {teacherCards.map((card) => {
          const Icon = card.icon;
          return (
            <article key={card.title} className="glass-card p-6">
              <div className="rounded-2xl bg-violet-500/15 p-3 text-violet-300"><Icon className="h-5 w-5" /></div>
              <h2 className="mt-6 text-lg font-semibold text-white">{card.title}</h2>
              <p className="mt-3 text-3xl font-semibold text-white">{card.value}</p>
            </article>
          );
        })}
      </div>
    </main>
  );
}
