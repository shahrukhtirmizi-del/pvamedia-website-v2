import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHead } from "@/components/section-head";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";
import { PROCESS } from "@/lib/data";

export const metadata = {
  title: "Process · PVA Media",
  description: "Five tight phases from discovery to launch. You sign off at every gate. Most websites ship in 5–7 days.",
};

export default function ProcessPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="absolute inset-0 atmosphere pointer-events-none" />
        <div className="container relative">
          <div className="max-w-[820px]">
            <Reveal>
              <div className="eyebrow text-accent mb-6">How we work</div>
              <h1 className="h-display text-white mb-5">
                Five phases, <span className="text-accent">no black boxes.</span>
              </h1>
              <p className="text-[16px] md:text-[17px] leading-relaxed text-ink-2 max-w-[580px]">
                Every engagement follows the same five-phase arc. You sign off at every gate, you see progress every week, and you never find yourself handed over to a junior mid-build.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-white/8">
        <div className="container">
          <div className="relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-white/8 hidden md:block" />
            <div className="flex flex-col gap-6 md:gap-10">
              {PROCESS.map((p, i) => (
                <Reveal key={p.num} delay={i * 0.08}>
                  <div className="grid grid-cols-[48px_1fr] md:grid-cols-[80px_1fr] gap-4 md:gap-8">
                    <div className="relative">
                      <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full border border-accent/40 bg-bg flex items-center justify-center">
                        <span className="font-mono text-[13px] md:text-[15px] tracking-[0.1em] text-accent">
                          {p.num}
                        </span>
                      </div>
                    </div>
                    <div className="pt-2 pb-6 md:pb-10 border-b border-white/8">
                      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                        <h3 className="text-[26px] md:text-[32px] font-medium tracking-tight text-ink">
                          {p.name}
                        </h3>
                        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink-3">
                          {p.duration}
                        </span>
                      </div>
                      <p className="text-[15px] md:text-[16px] text-ink-2 leading-relaxed max-w-[620px]">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 border-t border-white/8 bg-bg-2">
        <div className="container">
          <SectionHead
            num="02"
            eyebrow="Typical timelines"
            title={<>Ship dates, not <span className="text-accent">estimates.</span></>}
            sub="Here's what most engagements actually take. We quote tight because we deliver tight."
            align="stacked"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-white/8 tabular">
            {[
              { k: "Website design", v: "5–7 days", note: "From kickoff to launch" },
              { k: "Website mockup", v: "1–2 days", note: "Initial concept for your approval" },
              { k: "Website redesign", v: "5–7 days", note: "Full rebuild, faster turnaround" },
              { k: "Landing page", v: "2–3 days", note: "Single campaign page, live fast" },
              { k: "Campaign activation", v: "2–4 weeks", note: "Strategy, setup & first results" },
              { k: "Discovery → contract", v: "48 hours", note: "Scope, proposal, agreement" },
            ].map((t) => (
              <div
                key={t.k}
                className="p-7 border-r border-b border-white/8 flex flex-col gap-2"
              >
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-3">
                  {t.k}
                </span>
                <span className="text-[28px] font-medium tracking-tight text-accent">
                  {t.v}
                </span>
                <span className="text-[12.5px] text-ink-3">{t.note}</span>
              </div>
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
                Ready to <span className="text-accent">start phase 01?</span>
              </h2>
              <p className="text-[16px] text-ink-2 mb-7 max-w-[500px] leading-relaxed">
                The discovery call is a 30-minute conversation. No pitch, no pressure. You'll leave with clarity on scope, timeline, and whether we're the right studio for the brief.
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
