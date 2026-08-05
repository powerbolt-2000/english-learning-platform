const plans = [
  { name: 'Free', price: '$0', features: ['Core lessons', 'Community access', 'Basic homework'] },
  { name: 'Basic', price: '$19', features: ['Full lesson library', 'PDF downloads', 'Progress tracking'] },
  { name: 'Premium', price: '$49', features: ['Live exams', 'Certificates', 'Priority support'] },
  { name: 'VIP', price: '$99', features: ['All access', 'AI assistant', 'Private coaching'] },
];

export default function PricingPage() {
  return (
    <main className="section-shell py-20">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Subscription plans</p>
        <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Flexible plans for every learner</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => (
          <article key={plan.name} className="glass-card p-6">
            <h2 className="text-2xl font-semibold text-white">{plan.name}</h2>
            <div className="mt-4 text-4xl font-semibold text-white">{plan.price}</div>
            <p className="mt-3 text-sm text-slate-400">/ month</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </main>
  );
}
