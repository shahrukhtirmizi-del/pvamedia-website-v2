"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type Service = {
  num: string;
  name: string;
  price: string;
  summary: string;
  points: string[];
};

export function ServiceCard({ s, index }: { s: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (index % 4) * 0.06 }}
      className={cn(
        "p-6 md:p-7 border-b border-r border-white/8 flex flex-col gap-4 bg-bg-2 hover:bg-bg-3 transition-colors",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-accent">
          {s.num}
        </div>
        <div className="text-[11px] font-mono tracking-[0.12em] uppercase text-ink-3">
          {s.price}
        </div>
      </div>
      <h3 className="text-[22px] md:text-[24px] font-medium tracking-tight text-ink leading-tight">
        {s.name}
      </h3>
      <p className="text-[13.5px] leading-relaxed text-ink-2">{s.summary}</p>
      <ul className="flex flex-col gap-2 mt-2 pt-4 border-t border-white/8">
        {s.points.map((p) => (
          <li key={p} className="flex items-start gap-2.5 text-[12.5px] text-ink-2">
            <Check className="w-3 h-3 text-accent shrink-0 mt-1" strokeWidth={3} />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
