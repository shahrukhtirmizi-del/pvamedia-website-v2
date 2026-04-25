import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoStrip } from "@/components/logo-strip";
import { SectionHead } from "@/components/section-head";
import { CaseCard } from "@/components/case-card";
import { PricingCard } from "@/components/pricing-card";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";
import { STUDIO, STATS, CASES, TIERS, PROCESS, GUARANTEES, VALUES } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="absolute inset-0 atmosphere pointer-events-none" />
        <div className="absolute inset-0 bg-grid bg-grid-mask pointer-events-none" />

        <div className="container relative z-10">
          <div className="max-w-[900px]">
            <Reveal>
              <h1 className="h-display text-white mb-6">
                Websites. Campaigns. <br className="hidden sm:block" />
                <span className="text-accent">Done properly.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[16px] md:text-[17.5px] leading-relaxed text-ink-2 max-w-[620px] mb-9">
                {STUDIO.description}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center mb-16">
                <Magnetic>
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Book a discovery call <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </Button>
                </Magnetic>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pt-8 border-t border-white/8 tabular">
                {STATS.map((s) => (
                  <div key={s.k} className="flex flex-col gap-1.5">
                    <span className="eyebrow text-ink-3">{s.k}</span>
                    <span className="text-[18px] md:text-[22px] font-medium tracking-tight text-ink">
                      {s.v}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <LogoStrip />

      {/* ============ WORK — only shown when cases exist ============ */}
      {CASES.length > 0 && (
        <section className="py-20 md:py-28 border-b border-white/8">
          <div className="container">
            <SectionHead
              num="01"
              eyebrow="Selected work"
              title={
                <>
                  Infrastructure for the <br className="hidden md:block" />
                  interfaces that <span className="text-accent">carry revenue.</span>
                </>
              }
              sub="A portfolio of engagements where measurable outcomes, design rigour and professional-services craft intersect."
            />
            <div className="flex flex-col gap-4">
              {CASES.slice(0, 2).map((c, i) => (
                <CaseCard key={c.slug} c={c} index={i} />
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Button asChild variant="ghost" size="lg">
                <Link href="/work">
                  See all {CASES.length} case studies <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* ============ PRICING ============ */}
      <section className="py-20 md:py-28 border-b border-white/8 relative">
        <div className="container relative">
          <SectionHead
            num="01"
            eyebrow="Plans & pricing"
            title={
              <>
                Three ways to <span className="text-accent">start working</span> together.
              </>
            }
            sub="Straightforward packages for websites, paid marketing, or both. No hidden fees, no retainer surprises."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {TIERS.map((t, i) => (
              <PricingCard key={t.name} tier={t} index={i} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-[13px] text-ink-3">
              All plans include a free digital presence audit · Typical response within 2 hours.
            </p>
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="py-20 md:py-28 border-b border-white/8 bg-bg-2">
        <div className="container">
          <SectionHead
            num="02"
            eyebrow="How we work"
            title={
              <>
                From first call to <span className="text-accent">live.</span>
              </>
            }
            sub="Five tight phases. You sign off at every gate. Most websites ship in 6–8 days."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-white/8">
            {PROCESS.map((p, i) => (
              <Reveal key={p.num} delay={i * 0.06}>
                <div className="p-6 border-r border-b border-white/8 h-full flex flex-col gap-3 hover:bg-bg-3 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent">
                      {p.num}
                    </span>
                    <span className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-ink-3">
                      {p.duration}
                    </span>
                  </div>
                  <h3 className="text-[18px] font-medium tracking-tight text-ink leading-tight">
                    {p.name}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-ink-2">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GUARANTEES ============ */}
      <section className="py-20 md:py-28 border-b border-white/8">
        <div className="container">
          <SectionHead
            num="03"
            eyebrow="Our guarantees"
            title={
              <>
                We remove the <span className="text-accent">risk.</span>
              </>
            }
            sub="We're confident enough in the work to put our money where our mouth is."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {GUARANTEES.map((g, i) => (
              <Reveal key={g.num} delay={i * 0.08}>
                <div className="p-7 md:p-8 bg-bg-2 border border-white/8 rounded-lg h-full flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-accent">
                      {g.num}
                    </span>
                    <span className="px-2.5 py-1 rounded-full border border-accent/40 bg-accent/10 font-mono text-[10px] tracking-[0.14em] uppercase text-accent">
                      {g.tag}
                    </span>
                  </div>
                  <h3 className="text-[22px] font-medium tracking-tight text-ink">{g.name}</h3>
                  <p className="text-[13.5px] leading-relaxed text-ink-2">{g.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="py-20 md:py-28 border-b border-white/8 bg-bg-2">
        <div className="container">
          <SectionHead
            num="04"
            eyebrow="What sets us apart"
            title={
              <>
                The agency that <span className="text-accent">delivers</span>, always.
              </>
            }
            sub="Here's what sets us apart from agencies charging five times as much for the same outcome."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-white/8">
            {VALUES.map((v, i) => (
              <Reveal key={v.name} delay={i * 0.06}>
                <div className="p-7 md:p-9 border-r border-b border-white/8 h-full flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-accent" />
                    <span className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-ink-3">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-[22px] md:text-[24px] font-medium tracking-tight text-ink">
                    {v.name}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-ink-2">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 atmosphere pointer-events-none" />
        <div className="container relative">
          <div className="max-w-[820px]">
            <Reveal>
              <div className="eyebrow text-accent mb-6 flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 bg-accent animate-pulse" />
                Free discovery call · 30 min
              </div>
              <h2 className="h-section text-white mb-5">
                A discovery call is how every good engagement{" "}
                <span className="text-accent">starts.</span>
              </h2>
              <p className="text-[16px] md:text-[17px] leading-relaxed text-ink-2 mb-8 max-w-[560px]">
                30 minutes. No pitch — we ask specific questions, understand the surface and the stakeholders, and tell you honestly whether we're right for this work.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                <Magnetic>
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Book a discovery call <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </Button>
                </Magnetic>
                <Button asChild size="lg" variant="ghost">
                  <a href={`mailto:${STUDIO.email}`}>{STUDIO.email}</a>
                </Button>
                <span className="flex items-center gap-2 ml-2 font-mono text-[10.5px] tracking-[0.18em] uppercase text-ink-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Typically respond in under 2h
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
