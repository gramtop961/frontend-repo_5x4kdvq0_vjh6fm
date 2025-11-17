import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/50 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-50 to-sky-50 text-indigo-700 border border-indigo-100 mb-6">
              <Sparkles size={16} />
              <span className="text-sm font-medium">Launch faster with NovaCloud</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Ship your SaaS in days, not months
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-7">
              The all‑in‑one platform for auth, billing, deployments and analytics. Focus on your product — we’ll handle the rest.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-md hover:bg-slate-800 transition">
                Start free
                <ArrowRight size={18} />
              </a>
              <a href="#demo" className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-800 px-5 py-3 rounded-md hover:bg-slate-100 transition">
                Live demo
              </a>
            </div>

            <ul className="mt-6 grid sm:grid-cols-3 gap-4 text-sm text-slate-600">
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={16}/>No credit card</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={16}/>Cancel anytime</li>
              <li className="inline-flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={16}/>14‑day trial</li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-indigo-500/10 to-sky-500/10 rounded-2xl blur-xl" />
            <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
              <img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000&auto=format&fit=crop" alt="App screenshot" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
