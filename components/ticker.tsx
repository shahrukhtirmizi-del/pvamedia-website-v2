"use client";

import { useEffect, useState } from "react";
import { STUDIO } from "@/lib/data";

export function Ticker() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    function tick() {
      const now = new Date();
      const fmt = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/London",
        hourCycle: "h23",
      }).format(now);
      setTime(fmt);
    }
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="border-b border-white/8 font-mono text-[10.5px] tracking-[0.18em] uppercase text-ink-3 tabular">
      <div className="container flex items-center justify-between gap-4 py-2.5">
        <div className="flex items-center gap-5">
          <span className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_10px_hsl(17_80%_54%_/_0.55)]" />
            <span>London · <span className="text-ink">{time || "—"}</span></span>
          </span>
          <span className="hidden sm:inline text-ink-4">·</span>
          <span className="hidden sm:inline">Est. {STUDIO.established} · Practice N° 024</span>
          <span className="hidden lg:inline text-ink-4">·</span>
          <span className="hidden lg:inline">{STUDIO.availability}</span>
        </div>
        <div className="hidden md:block">
          <span>V / 2026.04</span>
        </div>
      </div>
    </div>
  );
}
