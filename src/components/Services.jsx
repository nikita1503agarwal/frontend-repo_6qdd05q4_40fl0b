import { Brain, Globe, Blocks, ShoppingCart, Terminal, Wrench, Gamepad2, Building2, Hotel, Server } from 'lucide-react'

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

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.12),transparent_35%)]"></div>
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white text-center">What we build</h2>
        <p className="mt-4 text-slate-300/90 text-center max-w-2xl mx-auto">Full‑stack engineering from concept to scale. We handle the heavy lifting so you can focus on growth.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-slate-900/50 p-6 hover:bg-slate-900/80 transition">
              <div className="mb-4 inline-flex p-3 rounded-xl bg-white/10 border border-white/10">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-slate-300/90 text-sm">{desc}</p>
            </div>
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
