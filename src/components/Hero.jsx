import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100vh] grid place-items-center overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* layered gradients for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950/80 pointer-events-none" />
      <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/20 blur-3xl mix-blend-screen animate-aurora" />
      <div className="absolute -bottom-48 -right-40 h-[36rem] w-[36rem] rounded-full bg-sky-400/20 blur-3xl mix-blend-screen animate-aurora" />

      {/* content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-36 pb-28 text-center">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: [0.22,1,0.36,1] }} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-slate-100/90 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Managing multi-million revenue companies
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .05, duration: .9, ease: [0.22,1,0.36,1] }} className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          AI-first custom software that makes you say <span className="text-gradient">wow</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1, duration: .9, ease: [0.22,1,0.36,1] }} className="mt-5 text-lg sm:text-xl text-slate-200/90 max-w-3xl mx-auto">
          We design and engineer full‑stack solutions across AI, web, mobile and desktop. From WordPress and Shopify to bespoke apps, we ship fast, scale reliably, and obsess over results.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15, duration: .9, ease: [0.22,1,0.36,1] }} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-white text-slate-900 font-semibold px-6 py-3 shadow-lg shadow-white/10 hover:shadow-white/20 transition">Start a project</a>
          <a href="#services" className="inline-flex items-center justify-center rounded-2xl border border-white/30 text-white px-6 py-3 hover:bg-white/10 transition">Explore services</a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35, duration: 1.2 }} className="mt-10 text-sm text-slate-300/80">
          Meholli — System Architect
        </motion.div>
      </div>

      {/* mouse reactive spotlight */}
      <div className="spotlight" />
    </section>
  )
}
