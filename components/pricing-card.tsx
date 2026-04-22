"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Tier } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PricingCard({ tier, index }: { tier: Tier; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className={cn(
        "relative rounded-xl border overflow-hidden flex flex-col",
        tier.featured
          ? "border-accent/60 bg-bg-2"
          : "border-white/8 bg-bg-2"
      )}
    >
      {tier.featured && (
        <>
          <div className="absolute inset-0 pointer-events-none atmosphere" />
          <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        </>
      )}

      <div className="relative p-7 md:p-8 flex flex-col gap-5 flex-1">
        {tier.tag && (
          <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full border border-accent/40 bg-accent/10 font-mono text-[10.5px] tracking-[0.18em] uppercase text-accent">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
            {tier.tag}
          </div>
        )}

        <div>
          <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-ink-3 mb-2">
            Plan · 0{index + 1}
          </div>
          <h3 className="text-[26px] md:text-[28px] font-medium tracking-tight text-ink">
            {tier.name}
          </h3>
          <p className="text-[14px] text-ink-2 leading-relaxed mt-2">{tier.pitch}</p>
        </div>

        <div className="flex flex-col gap-1 pt-4 border-t border-white/8 tabular">
          {tier.setup && (
            <div className="flex items-baseline gap-2">
              <span className="text-[36px] font-medium tracking-tighter text-ink">{tier.setup}</span>
              <span className="text-[13px] text-ink-3">{tier.setupNote}</span>
            </div>
          )}
          {tier.monthly && (
            <div className="flex items-baseline gap-2">
              {tier.setup && <span className="text-ink-3 text-[13px]">+</span>}
              <span className="text-[28px] font-medium tracking-tighter text-ink">{tier.monthly}</span>
              <span className="text-[13px] text-ink-3">{tier.monthlyNote}</span>
            </div>
          )}
        </div>

        <ul className="flex flex-col gap-3 mt-2">
          {tier.includes.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[13.5px] text-ink-2">
              <span className={cn(
                "mt-0.5 flex items-center justify-center w-4 h-4 rounded-full shrink-0",
                tier.featured ? "bg-accent/20 text-accent" : "bg-white/8 text-ink-2"
              )}>
                <Check className="w-2.5 h-2.5" strokeWidth={3} />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {tier.discounts && (
          <div className="mt-3 pt-4 border-t border-white/8 flex flex-col gap-2.5">
            <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-3">
              Discounted terms
            </div>
            {tier.discounts.map((d) => (
              <div
                key={d.term}
                className="flex items-baseline justify-between text-[13px] tabular"
              >
                <span className="text-ink-2">{d.term}</span>
                <div className="text-right">
                  <span className="text-ink font-medium">{d.price}</span>
                  <span className="block text-[11px] text-ink-3">{d.note}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto pt-6">
          <Button asChild size="lg" variant={tier.featured ? "primary" : "ghost"} className="w-full">
            <Link href="/contact">
              {tier.cta} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
