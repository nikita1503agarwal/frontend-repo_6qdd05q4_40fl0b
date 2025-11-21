import { CheckCircle2 } from 'lucide-react'

const steps = [
  { title: 'Discover', desc: 'We map goals, constraints, users and success metrics.' },
  { title: 'Design', desc: 'Rapid prototypes and UX flows to validate fast.' },
  { title: 'Build', desc: 'Agile sprints, tight feedback loops, transparent progress.' },
  { title: 'Launch', desc: 'CI/CD, monitoring, docs, handover and training.' },
  { title: 'Grow', desc: 'Iterate with data, optimize conversions, scale reliably.' }
]

export default function Process() {
  return (
    <section id="process" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.12),transparent_35%)]"></div>
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white text-center">How we deliver</h2>
        <p className="mt-4 text-slate-300/90 text-center max-w-2xl mx-auto">A pragmatic process that keeps momentum and puts outcomes first.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              <h3 className="mt-4 text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-300/90 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
