import { Menu, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMouse({ x, y });
      document.documentElement.style.setProperty("--x", `${x}%`);
      document.documentElement.style.setProperty("--y", `${y}%`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const nav = (
    <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-slate-200/90">
      <li><a href="#services" className="hover:text-white transition">Services</a></li>
      <li><a href="#industries" className="hover:text-white transition">Industries</a></li>
      <li><a href="#process" className="hover:text-white transition">Process</a></li>
      <li><a href="#work" className="hover:text-white transition">Work</a></li>
    </ul>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-30">
      <div className="spotlight" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 glow-border">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#top" className="inline-flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 blur-md bg-gradient-to-tr from-fuchsia-500 via-sky-400 to-emerald-400 opacity-70"></div>
                <div className="relative grid place-items-center w-10 h-10 rounded-xl bg-slate-800 border border-white/20">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="font-semibold tracking-tight text-white text-lg">Meholli</span>
              <span className="hidden sm:inline text-slate-400/90 text-sm">— System Architect</span>
            </a>

            <nav className="hidden md:block">{nav}</nav>

            <div className="flex items-center gap-3">
              <a href="mailto:hello@meholli.com" className="hidden md:inline-flex px-4 py-2 rounded-xl bg-white text-slate-900 font-medium hover:shadow-lg transition shadow-white/10">Contact</a>
              <button className="md:hidden grid place-items-center w-10 h-10 rounded-xl border border-white/15 text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4">
              {nav}
              <a href="mailto:hello@meholli.com" className="mt-4 inline-flex px-4 py-2 rounded-xl bg-white text-slate-900 font-medium">Contact</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
