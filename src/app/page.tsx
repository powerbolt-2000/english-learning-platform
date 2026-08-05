'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, ShieldCheck, Sparkles, PlayCircle, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Immersive lessons',
    description: 'Structured learning paths with video, notes, and homework in one polished experience.',
    icon: BookOpen,
  },
  {
    title: 'Secure assessments',
    description: 'Create timed exams, quizzes, and auto-graded assignments with confidence.',
    icon: ShieldCheck,
  },
  {
    title: 'Teacher-first tools',
    description: 'Upload content, manage students, and grade progress from a centralized dashboard.',
    icon: GraduationCap,
  },
];

const stats = [
  { label: 'Active learners', value: '25k+' },
  { label: 'Courses published', value: '320' },
  { label: 'Avg. completion', value: '92%' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="section-shell relative overflow-hidden py-20 sm:py-28 lg:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.26),_transparent_55%)]" />
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">
              <Sparkles className="h-4 w-4" />
              Premium English learning experience
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Learn English with clarity, confidence, and modern guidance.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              An elegant platform for students, teachers, and admins to build, study, and grow with interactive lessons, exams, dashboards, and rich media.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/courses" className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-3 font-medium text-white transition hover:bg-violet-500">
                Explore courses <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/about" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 font-medium text-slate-100 transition hover:bg-white/20">
                Meet the teacher <PlayCircle className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="glass-card p-6 sm:p-8">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-violet-300">Learning path</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">IELTS Mastery</h2>
                </div>
                <div className="rounded-2xl bg-violet-500/20 p-3 text-violet-300">
                  <BadgeCheck className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-8 space-y-4">
                {['Speaking practice', 'Grammar labs', 'Video lessons', 'Exam simulations'].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                    <span>{item}</span>
                    <span className="text-violet-300">Live</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-10">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.article key={feature.title} whileHover={{ y: -4, scale: 1.01 }} className="glass-card p-6">
                <div className="mb-4 inline-flex rounded-2xl bg-violet-500/15 p-3 text-violet-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
