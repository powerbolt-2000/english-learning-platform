import { PlayCircle, FileText, CheckCircle2 } from 'lucide-react';

const lessons = [
  { title: 'Vocabulary Foundations', type: 'Video', duration: '12 min' },
  { title: 'Grammar Essentials', type: 'PDF', duration: '18 min' },
  { title: 'Speaking Practice', type: 'Homework', duration: '20 min' },
];

export default function LessonsPage() {
  return (
    <main className="section-shell py-20">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Lesson library</p>
        <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Browse lessons and learning assets</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {lessons.map((lesson) => (
          <article key={lesson.title} className="glass-card p-6">
            <div className="flex items-center justify-between">
              <div className="rounded-2xl bg-violet-500/15 p-3 text-violet-300">
                {lesson.type === 'Video' ? <PlayCircle className="h-5 w-5" /> : lesson.type === 'PDF' ? <FileText className="h-5 w-5" /> : <CheckCircle2 className="h-5 w-5" />}
              </div>
              <span className="text-sm text-slate-400">{lesson.duration}</span>
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-white">{lesson.title}</h2>
            <p className="mt-3 text-sm text-slate-300">A step-by-step learning unit designed for active practice and review.</p>
          </article>
        ))}
      </div>
    </main>
  );
}
