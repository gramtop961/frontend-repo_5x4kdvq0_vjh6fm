const faqs = [
  { q: 'Can I use my own domain?', a: 'Yes, custom domains are supported on Pro and Scale plans.' },
  { q: 'Do you offer discounts?', a: 'We offer 20% off for annual billing and special pricing for startups.' },
  { q: 'Is there a free trial?', a: 'All plans start with a 14‑day free trial. No credit card required.' },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900 text-center">Frequently asked questions</h2>
        <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {faqs.map((f, i) => (
            <details key={i} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-slate-900">
                {f.q}
                <span className="ml-4 h-6 w-6 rounded-full grid place-items-center border border-slate-300 text-slate-600 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
