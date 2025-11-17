import { ShieldCheck, CreditCard, BarChart3, Zap, Database, Globe } from 'lucide-react'

const features = [
  { icon: ShieldCheck, title: 'Auth & Teams', desc: 'Built-in users, roles and SSO that scales with you.' },
  { icon: CreditCard, title: 'Billing', desc: 'Native subscriptions with Stripe. Global tax handled.' },
  { icon: BarChart3, title: 'Analytics', desc: 'Real-time metrics and funnels to grow faster.' },
  { icon: Zap, title: 'Deployments', desc: 'Ship to global edge in seconds with zero downtime.' },
  { icon: Database, title: 'Database', desc: 'Production-ready storage, backups and migrations.' },
  { icon: Globe, title: 'Edge APIs', desc: 'Ultra-low latency APIs across 250+ regions.' },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-slate-900">Everything you need to launch</h2>
          <p className="mt-3 text-slate-600">A modern toolkit to build, grow and scale your SaaS — without the duct tape.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 grid place-items-center group-hover:scale-105 transition">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-6">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
