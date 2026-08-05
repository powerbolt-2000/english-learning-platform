import { BarChart3, CreditCard, Users2, Settings2 } from 'lucide-react';

const adminCards = [
  { title: 'Revenue', value: '$42k', icon: CreditCard },
  { title: 'Students', value: '3.2k', icon: Users2 },
  { title: 'Reports', value: '184', icon: BarChart3 },
  { title: 'Settings', value: 'Live', icon: Settings2 },
];

export default function AdminDashboardPage() {
  return (
    <main className="section-shell py-20">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Admin dashboard</p>
        <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Run the platform with clarity</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {adminCards.map((card) => {
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
