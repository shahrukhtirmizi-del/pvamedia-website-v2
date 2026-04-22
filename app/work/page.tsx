import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHead } from "@/components/section-head";
import { CaseCard } from "@/components/case-card";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";
import { CASES, LOGOS, STUDIO } from "@/lib/data";

export const metadata = {
  title: "Work · PVA Media",
  description:
    "Selected engagements — law firms, estate agencies, consultancies and wealth managers. Real outcomes, quantified.",
};

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="absolute inset-0 atmosphere pointer-events-none" />
        <div className="container relative">
          <div className="max-w-[820px]">
            <Reveal>
              <div className="eyebrow text-accent mb-6">Selected work · 2025 – 2026</div>
              <h1 className="h-display text-white mb-5">
                Work that <span className="text-accent">earns</span> <br className="hidden sm:block" />
                the price tag.
              </h1>
              <p className="text-[16px] md:text-[17px] leading-relaxed text-ink-2 max-w-[580px]">
                Every engagement we list on this page shipped real outcomes — quantified, measured and still running. Where we can, we show the numbers.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-white/8">
        <div className="container">
          <div className="flex flex-col gap-4">
            {CASES.map((c, i) => (
              <CaseCard key={c.slug} c={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {LOGOS.length > 0 && (
        <section className="py-20 border-t border-white/8 bg-bg-2">
          <div className="container">
            <SectionHead
              num="02"
              eyebrow="Recent engagements"
              title={<>A longer list, <span className="text-accent">unvarnished.</span></>}
              sub="A sample of the firms we've shipped for over the last 24 months. Happy to put you in touch with any of them."
              align="stacked"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-white/8 tabular">
              {LOGOS.map((logo, i) => (
                <div key={logo} className="p-6 border-r border-b border-white/8 flex items-center justify-between gap-3 min-h-[92px]">
                  <span className="font-semibold text-[15px] md:text-[17px] tracking-tight text-ink">
                    {logo}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 md:py-28 border-t border-white/8 relative overflow-hidden">
        <div className="absolute inset-0 atmosphere pointer-events-none" />
        <div className="container relative">
          <div className="max-w-[720px]">
            <Reveal>
              <h2 className="h-section text-white mb-5">
                Want a case study on <span className="text-accent">your</span> situation?
              </h2>
              <p className="text-[16px] text-ink-2 mb-7 max-w-[500px] leading-relaxed">
                Most of our engagements begin as discovery calls where we diagnose specifically what's in the way of your pipeline. That conversation is free, and usually diagnoses more than it sells.
              </p>
              <Magnetic>
                <Button asChild size="lg">
                  <Link href="/contact">
                    Book a discovery call <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </Button>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
