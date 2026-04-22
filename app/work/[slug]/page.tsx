import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";
import { CaseCard } from "@/components/case-card";
import { SectionHead } from "@/components/section-head";
import { CASES } from "@/lib/data";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props) {
  const c = CASES.find((x) => x.slug === params.slug);
  if (!c) return {};
  return {
    title: `${c.client} · PVA Media`,
    description: c.headline,
  };
}

export default function CaseDetailPage({ params }: Props) {
  const c = CASES.find((x) => x.slug === params.slug);
  if (!c) notFound();
  const others = CASES.filter((x) => x.slug !== params.slug).slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-12 md:pt-20 md:pb-14">
        <div className="absolute inset-0 atmosphere pointer-events-none" />
        <div className="container relative">
          <Reveal>
            <Link href="/work" className="inline-flex items-center gap-2 text-[12.5px] font-mono tracking-[0.16em] uppercase text-ink-3 hover:text-accent transition-colors mb-10">
              <ArrowLeft className="w-3 h-3" /> All work
            </Link>
            <div className="flex flex-col gap-4 max-w-[880px]">
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent flex items-center gap-3 flex-wrap">
                <span>Case · {c.client}</span>
                <span className="text-ink-4">·</span>
                <span>{c.sector}</span>
                <span className="text-ink-4">·</span>
                <span>{c.year}</span>
              </div>
              <h1 className="h-display text-white">{c.headline}</h1>
              <p className="text-[16px] md:text-[17px] text-ink-2 leading-relaxed max-w-[640px]">
                {c.summary}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-16 border-t border-white/8 bg-bg-2">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-white/8 tabular">
            {c.metrics.map((m) => (
              <div key={m.k} className="p-7 border-r border-b border-white/8 flex flex-col gap-2">
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-3">{m.k}</span>
                <span className={`text-[32px] md:text-[38px] font-medium tracking-tight ${m.accent ? "text-accent" : "text-ink"}`}>
                  {m.v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-white/8">
        <div className="container max-w-[780px]">
          <Reveal>
            <h2 className="h-section text-white mb-10">The engagement.</h2>
            <div className="flex flex-col gap-5 text-[16px] text-ink-2 leading-relaxed">
              <p>
                Every engagement starts the same way — a 30-minute discovery call where we diagnose what's in the way. For {c.client}, we mapped out a three-phase plan, signed off on scope in under 48 hours, and shipped phase one ahead of the agreed date.
              </p>
              <p>
                The brief was specific: a website and supporting campaign program that would do the work of a small business development team. We kept the design quiet, the copy specific, and the measurement honest. No vanity metrics — only pipeline numbers the finance team would sign off on.
              </p>
              <p>
                Since shipping, we've continued to run the campaigns and iterate on the website monthly. The numbers above are the current running average, not a launch spike.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-white/8 bg-bg-2">
        <div className="container">
          <SectionHead
            num="02"
            eyebrow="Related work"
            title={<>See other <span className="text-accent">engagements.</span></>}
            align="stacked"
          />
          <div className="flex flex-col gap-4">
            {others.map((c, i) => (
              <CaseCard key={c.slug} c={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 relative overflow-hidden border-t border-white/8">
        <div className="absolute inset-0 atmosphere pointer-events-none" />
        <div className="container relative">
          <div className="max-w-[720px]">
            <Reveal>
              <h2 className="h-section text-white mb-5">
                Want a case study on <span className="text-accent">your</span> situation?
              </h2>
              <p className="text-[16px] text-ink-2 mb-7 max-w-[500px] leading-relaxed">
                Every engagement starts with a free discovery call. 30 minutes, no pitch, honest answers.
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
