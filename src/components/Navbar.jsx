import { Menu, Rocket, LogIn } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 to-sky-400 text-white grid place-items-center shadow-sm">
              <Rocket size={18} />
            </div>
            <span className="font-semibold text-slate-800 text-lg">NovaCloud</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition">Features</a>
            <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
            <a href="#faq" className="hover:text-slate-900 transition">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-slate-600 hover:text-slate-900">Sign in</a>
            <a href="#get-started" className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition">
              <LogIn size={16} />
              Get Started
            </a>
          </div>

          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}
