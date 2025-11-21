export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(99,102,241,0.15),transparent_40%)]"></div>
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="rounded-3xl border border-white/15 bg-white/5 p-10 backdrop-blur">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">Let’s build something remarkable</h2>
          <p className="mt-4 text-slate-300/90 max-w-2xl mx-auto">Tell us about your vision. We’ll reply within 24 hours with next steps, timelines and an initial plan.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:hello@meholli.com" className="inline-flex items-center justify-center rounded-2xl bg-white text-slate-900 font-semibold px-6 py-3 shadow-lg shadow-white/10 hover:shadow-white/20 transition">Email hello@meholli.com</a>
            <a href="https://cal.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl border border-white/30 text-white px-6 py-3 hover:bg-white/10 transition">Book a call</a>
          </div>
          <p className="mt-6 text-xs uppercase tracking-wider text-slate-400">Full‑stack specialists • AI‑first • Results obsessed</p>
        </div>
      </div>
    </section>
  )
}
