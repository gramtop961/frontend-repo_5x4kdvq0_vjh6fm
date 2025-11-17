export default function CTA() {
  return (
    <section id="get-started" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-tr from-indigo-600 to-sky-500 p-[1px]">
          <div className="rounded-2xl bg-white p-10">
            <h3 className="text-2xl font-semibold text-slate-900">Ready to build something people love?</h3>
            <p className="mt-3 text-slate-600">Join thousands of founders shipping faster on NovaCloud.</p>
            <form className="mt-6 flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Enter your email" className="flex-1 rounded-md border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" />
              <button className="rounded-md bg-slate-900 text-white px-6 py-3 hover:bg-slate-800 transition">Get early access</button>
            </form>
            <p className="mt-3 text-xs text-slate-500">We care about your data in our privacy policy.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
