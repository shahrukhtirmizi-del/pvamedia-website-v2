import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHead } from "@/components/section-head";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";
import { VALUES, STATS, STUDIO } from "@/lib/data";

export const metadata = {
  title: "Studio · PVA Media",
  description: "A London studio for professional services — law firms, estate agencies and consultancies.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="absolute inset-0 atmosphere pointer-events-none" />
        <div className="container relative">
          <div className="max-w-[820px]">
            <Reveal>
              <div className="eyebrow text-accent mb-6">Studio · Est. 2025</div>
              <h1 className="h-display text-white mb-5">
                A studio for <span className="text-accent">professional services.</span>
              </h1>
              <p className="text-[16px] md:text-[17px] leading-relaxed text-ink-2 max-w-[620px]">
                We work primarily with law firms, estate agencies and consultancies — though we welcome any business that values quality and measurable outcomes. No account managers, no hand-offs to juniors, no retainer surprises.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-white/8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <Reveal>
              <div className="flex flex-col gap-5">
                <div className="eyebrow text-ink-3">The shape of the work</div>
                <p className="text-[17px] text-ink leading-relaxed">
                  At PVA Media, we combine sharp design thinking with a clear understanding of how professional service businesses attract and convert the right clients online.
                </p>
                <p className="text-[15px] text-ink-2 leading-relaxed">
                  Every website we build and every campaign we run is crafted to reflect your expertise and generate real enquiries — not to win awards, not to dazzle, not to hide the substance behind ornament.
                </p>
                <p className="text-[15px] text-ink-2 leading-relaxed">
                  We work closely with each client from first call through to launch and beyond, keeping you informed at every stage with no surprises and no handoffs to juniors.
                </p>
                <p className="text-[15px] text-ink-2 leading-relaxed">
                  We have a team of dedicated specialists across design, development, and paid media — meaning every part of your project is handled by someone who does that one thing exceptionally well.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="bg-bg-2 border border-white/8 rounded-lg p-8 h-full flex flex-col gap-6 tabular">
                <div className="eyebrow text-ink-3">By the numbers</div>
                <div className="grid grid-cols-2 gap-6">
                  {STATS.map((s) => (
                    <div key={s.k} className="flex flex-col gap-1.5">
                      <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-3">
                        {s.k}
                      </span>
                      <span className="text-[26px] font-medium tracking-tight text-ink">
                        {s.v}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-2 pt-5 border-t border-white/8 flex flex-col gap-2.5 text-[13px]">
                  <div className="flex justify-between">
                    <span className="text-ink-3">Established</span>
                    <span className="text-ink">{STUDIO.established}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-3">Base</span>
                    <span className="text-ink">{STUDIO.location}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-white/8 bg-bg-2">
        <div className="container">
          <SectionHead
            num="02"
            eyebrow="How we work"
            title={<>Four working <span className="text-accent">principles.</span></>}
            sub="The operating beliefs that shape every engagement, before the design starts."
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

      <section className="py-20 md:py-28 relative overflow-hidden border-t border-white/8">
        <div className="absolute inset-0 atmosphere pointer-events-none" />
        <div className="container relative">
          <div className="max-w-[720px]">
            <Reveal>
              <h2 className="h-section text-white mb-5">
                If you're <span className="text-accent">serious about the work</span>, so are we.
              </h2>
              <p className="text-[16px] text-ink-2 mb-7 max-w-[500px] leading-relaxed">
                We're selectively onboarding founding clients across professional services and beyond. If you're building or rebuilding your digital presence, we'd love to have a conversation.
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
