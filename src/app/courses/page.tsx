import Link from 'next/link';
import { ArrowRight, BookText, Clock3, PlayCircle } from 'lucide-react';

const courses = [
  { title: 'Conversation Lab', description: 'Speak naturally with guided practice and feedback.', level: 'Beginner', duration: '6 weeks' },
  { title: 'Business English', description: 'Refine presentation, email, and professional language skills.', level: 'Intermediate', duration: '8 weeks' },
  { title: 'IELTS Accelerator', description: 'Prepare for exams with intensive drills and mock tests.', level: 'Advanced', duration: '10 weeks' },
];

export default function CoursesPage() {
  return (
    <main className="section-shell py-20">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Explore courses</p>
          <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Structured learning for every stage</h1>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <article key={course.title} className="glass-card p-6">
            <div className="flex items-center justify-between text-sm text-violet-300">
              <span>{course.level}</span>
              <span className="flex items-center gap-2"><Clock3 className="h-4 w-4" />{course.duration}</span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-white">{course.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{course.description}</p>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-300"><BookText className="h-4 w-4" /> 12 lessons</div>
              <Link href="/lessons" className="inline-flex items-center gap-2 text-violet-300">View lessons <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
