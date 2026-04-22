"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/lib/data";
import { cn } from "@/lib/utils";

export function CaseCard({ c, index }: { c: CaseStudy; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
    >
      <Link
        href={`/work/${c.slug}`}
        className="group grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-0 bg-bg-2 border border-white/8 rounded-lg overflow-hidden transition-all hover:-translate-y-0.5 hover:border-white/15"
      >
        {/* Visual preview — abstract product mock */}
        <div className="aspect-[16/10] lg:aspect-auto relative overflow-hidden bg-bg-3 border-b lg:border-b-0 lg:border-r border-white/8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(17_80%_54%_/_0.2),transparent_55%),linear-gradient(135deg,hsl(17_80%_54%_/_0.08),transparent_50%)]" />
          <div className="absolute inset-5 bg-bg border border-white/10 rounded-md overflow-hidden flex flex-col">
            {/* Browser chrome */}
            <div className="px-3 py-2.5 border-b border-white/8 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-ink-4" />
              <span className="w-2 h-2 rounded-full bg-ink-4" />
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="ml-3 font-mono text-[10px] text-ink-3 tracking-wide truncate">
                {c.slug}.pva — site / v1
              </span>
            </div>
            {/* Body */}
            <div className="flex-1 p-4 flex flex-col gap-2">
              <div className="flex gap-1.5">
                <span className="h-[18px] w-[60px] rounded-full border border-accent/40 bg-accent/10" />
                <span className="h-[18px] w-[90px] rounded-full border border-white/10 bg-white/5" />
              </div>
              <span className="h-[14px] w-[60%] rounded bg-white/14 mt-1" />
              <span className="h-[9px] w-[75%] rounded bg-white/8" />
              <span className="h-[9px] w-[50%] rounded bg-white/8" />
              <span className="mt-auto h-[26px] w-[104px] rounded bg-accent" />
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 flex flex-col gap-4">
          <div className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-ink-3 flex items-center gap-2 flex-wrap">
            <span>Client · {c.client}</span>
            <span className="px-2 py-0.5 border border-white/10 rounded-full text-ink-2">
              {c.sector}
            </span>
            <span className="px-2 py-0.5 border border-white/10 rounded-full text-ink-2">
              {c.year}
            </span>
          </div>
          <h3 className="h-card text-ink">
            {c.headline}
          </h3>
          <p className="text-[14px] leading-relaxed text-ink-2">{c.summary}</p>
          <div className="grid grid-cols-3 gap-4 mt-auto pt-5 border-t border-white/8 tabular">
            {c.metrics.map((m) => (
              <div key={m.k} className="flex flex-col gap-1">
                <span className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-ink-3">
                  {m.k}
                </span>
                <span
                  className={cn(
                    "font-medium text-[15px] tracking-tight",
                    m.accent ? "text-accent" : "text-ink"
                  )}
                >
                  {m.v}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-[12.5px] font-mono tracking-[0.14em] uppercase text-ink-3 group-hover:text-accent transition-colors">
            Read the full case
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
