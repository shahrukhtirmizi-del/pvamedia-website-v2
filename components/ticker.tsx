import { STUDIO } from "@/lib/data";

export function Ticker() {
  return (
    <div className="border-b border-white/8 font-mono text-[10.5px] tracking-[0.18em] uppercase text-ink-3 tabular">
      <div className="container flex items-center justify-between gap-4 py-2.5">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>London studio</span>
          </span>
          <span className="hidden sm:inline text-ink-4">·</span>
          <span className="hidden sm:inline">Est. {STUDIO.established}</span>
        </div>
        <div className="hidden md:block">
          <span>PVA Media Ltd</span>
        </div>
      </div>
    </div>
  );
}
