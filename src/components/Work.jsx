import { motion } from 'framer-motion'
import { ArrowUpRight, Trophy, TrendingUp, ShieldCheck } from 'lucide-react'

const projects = [
  {
    title: 'HotelChain Booking Engine',
    blurb: 'AI‑powered pricing, OTA sync, and blazing‑fast booking flows.',
    tags: ['AI pricing', 'OTA integrations', 'React + FastAPI'],
    metric: { icon: TrendingUp, label: '+28% conversion' },
    image: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'SaaS Platform Revamp',
    blurb: 'From monolith to modern micro‑frontend architecture.',
    tags: ['Micro‑frontends', 'K8s', 'CDN'],
    metric: { icon: ShieldCheck, label: '99.99% uptime' },
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Shopify Headless Store',
    blurb: 'Headless commerce with sub‑second product discovery.',
    tags: ['Headless', 'Shopify', 'Algolia'],
    metric: { icon: Trophy, label: 'Top 1% speed' },
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] } })
}

export default function Work() {
  return (
    <section id="work" className="relative py-28 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl mix-blend-screen animate-aurora" />
        <div className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-sky-400/20 blur-3xl mix-blend-screen animate-aurora" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/80 backdrop-blur">Selected Work</span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Case studies that ship outcomes</h2>
          <p className="mt-3 text-slate-300/90 max-w-2xl mx-auto">Real impact across hospitality, property, and SaaS. Built fast, engineered to last.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/70 transition will-change-transform"
              variants={cardVariants}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative h-48">
                <img src={p.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-90 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              </div>
              <div className="relative p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </div>
                <p className="mt-2 text-sm text-slate-300/90">{p.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs text-slate-200/90 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">{t}</span>
                  ))}
                </div>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-300/20 px-3 py-1 text-xs">
                  <p.metric.icon className="w-3.5 h-3.5" />
                  <span>{p.metric.label}</span>
                </div>
              </div>
              <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.12), transparent 40%)' }} />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
