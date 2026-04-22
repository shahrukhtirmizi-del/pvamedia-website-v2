import { LOGOS } from "@/lib/data";

export function LogoStrip() {
  if (!LOGOS || LOGOS.length === 0) return null;
  const doubled = [...LOGOS, ...LOGOS];
  return (
    <section className="border-y border-white/8 bg-bg-2 overflow-hidden">
      <div className="container flex items-center gap-0 py-6">
        <div className="shrink-0 pr-6 mr-6 border-r border-white/8 font-mono text-[10.5px] tracking-[0.2em] uppercase text-ink-3 hidden md:block">
          Recently shipped with
        </div>
        <div className="flex-1 overflow-hidden relative mask-fade">
          <div className="marquee-track gap-12 flex items-center">
            {doubled.map((logo, i) => (
              <span
                key={i}
                className="shrink-0 font-semibold text-[16px] tracking-tight text-ink-2 hover:text-ink transition-colors"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .mask-fade {
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
      `}</style>
    </section>
  );
}
