const faqs = [
  { question: 'Can I access lessons on mobile?', answer: 'Yes, every lesson and dashboard is optimized for mobile-first usage.' },
  { question: 'Do you offer certificates?', answer: 'Premium and VIP plans include certificates and progress summaries.' },
  { question: 'Can teachers upload content?', answer: 'Teachers can create courses, chapters, lessons, exams, and homework from their dashboard.' },
];

export default function FAQPage() {
  return (
    <main className="section-shell py-20">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-300">FAQ</p>
        <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Common questions</h1>
      </div>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <article key={faq.question} className="glass-card p-6">
            <h2 className="text-lg font-semibold text-white">{faq.question}</h2>
            <p className="mt-3 text-slate-300">{faq.answer}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
