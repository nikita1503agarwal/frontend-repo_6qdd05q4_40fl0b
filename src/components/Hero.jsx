import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950/80 pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-slate-100/90 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Managing multi-million revenue companies
        </div>
        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          AI-first custom software that makes you say “wow”
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-slate-200/90 max-w-3xl mx-auto">
          We design and engineer full‑stack solutions across AI, web, mobile and desktop. From WordPress and Shopify to bespoke apps, we ship fast, scale reliably, and obsess over results.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-white text-slate-900 font-semibold px-6 py-3 shadow-lg shadow-white/10 hover:shadow-white/20 transition">Start a project</a>
          <a href="#services" className="inline-flex items-center justify-center rounded-2xl border border-white/30 text-white px-6 py-3 hover:bg-white/10 transition">Explore services</a>
        </div>
      </div>
    </section>
  );
}
