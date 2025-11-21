import { Brain, Globe, Blocks, ShoppingCart, Terminal, Wrench, Gamepad2, Building2, Hotel, Server, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  { icon: Brain, title: 'AI-first Programs', desc: 'Strategy, LLM apps, copilots, agents, RAG, automation & MLOps.' },
  { icon: Globe, title: 'Web Apps', desc: 'Modern React frontends with robust FastAPI backends and real-time UX.' },
  { icon: Blocks, title: 'WordPress', desc: 'High-performance, headless, SEO-ready sites with custom themes.' },
  { icon: ShoppingCart, title: 'Webshops & Shopify', desc: 'Conversions-first storefronts, subscriptions, headless commerce.' },
  { icon: Terminal, title: 'Windows & Desktop', desc: 'Electron/Native builds, internal tools, dashboards, offline-first.' },
  { icon: Gamepad2, title: 'Games & Interactive', desc: 'WebGL prototypes, gamified experiences, 3D product demos.' },
  { icon: Wrench, title: 'Integrations', desc: 'ERP, CRM, payments, property systems, and custom APIs.' },
]

const industries = [
  { icon: Hotel, title: 'Hotels & Hospitality' },
  { icon: Building2, title: 'Property Management' },
  { icon: Server, title: 'SaaS & Platforms' },
]

const item = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: .6, ease: [0.22,1,0.36,1] } })
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.12),transparent_35%)]"></div>
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white text-center">What we build</h2>
        <p className="mt-4 text-slate-300/90 text-center max-w-2xl mx-auto">Full‑stack engineering from concept to scale. We handle the heavy lifting so you can focus on growth.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} className="group rounded-2xl border border-white/10 bg-slate-900/50 p-6 hover:bg-slate-900/80 transition relative overflow-hidden"
              variants={item} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} custom={i}
            >
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-500" style={{ background: 'radial-gradient(500px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.12), transparent 40%)' }} />
              <div className="mb-4 inline-flex p-3 rounded-xl bg-white/10 border border-white/10">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-slate-300/90 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>

        <div id="industries" className="mt-16">
          <h3 className="text-xl font-semibold text-white/90 text-center">Industries</h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {industries.map(({ icon: Icon, title }) => (
              <div key={title} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-slate-100">
                <Icon className="w-4 h-4" />
                <span className="text-sm">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
