export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-slate-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Start free. Upgrade when you’re ready. No hidden fees.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {/* Starter */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Starter</h3>
            <p className="mt-2 text-slate-600">For personal projects and prototypes</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-semibold text-slate-900">$0</span>
              <span className="text-slate-500">/mo</span>
            </div>
            <ul className="mt-6 space-y-3 text-slate-600 text-sm">
              <li>1 project</li>
              <li>Shared resources</li>
              <li>Community support</li>
            </ul>
            <a href="#get-started" className="mt-8 inline-flex justify-center w-full bg-slate-900 text-white py-2.5 rounded-md hover:bg-slate-800 transition">Get started</a>
          </div>

          {/* Pro */}
          <div className="relative rounded-2xl border-2 border-indigo-500 bg-white p-8 shadow-md">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full">Most popular</div>
            <h3 className="text-lg font-semibold text-slate-900">Pro</h3>
            <p className="mt-2 text-slate-600">Everything you need to run your SaaS</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-semibold text-slate-900">$29</span>
              <span className="text-slate-500">/mo</span>
            </div>
            <ul className="mt-6 space-y-3 text-slate-600 text-sm">
              <li>Unlimited projects</li>
              <li>Priority support</li>
              <li>Custom domains</li>
              <li>Usage analytics</li>
            </ul>
            <a href="#get-started" className="mt-8 inline-flex justify-center w-full bg-indigo-600 text-white py-2.5 rounded-md hover:bg-indigo-500 transition">Upgrade to Pro</a>
          </div>

          {/* Scale */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Scale</h3>
            <p className="mt-2 text-slate-600">For teams with serious workloads</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-semibold text-slate-900">$99</span>
              <span className="text-slate-500">/mo</span>
            </div>
            <ul className="mt-6 space-y-3 text-slate-600 text-sm">
              <li>Dedicated resources</li>
              <li>SLA & SSO</li>
              <li>Audit logs</li>
              <li>Advanced security</li>
            </ul>
            <a href="#contact" className="mt-8 inline-flex justify-center w-full border border-slate-300 text-slate-800 py-2.5 rounded-md hover:bg-slate-50 transition">Talk to sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
